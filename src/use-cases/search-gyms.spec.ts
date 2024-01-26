import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search gymsUse Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'GymUse Case',
      description: null,
      phone: null,
      latitude: -27.0747279,
      longitude: -49.488972,
    })

    await gymsRepository.create({
      title: 'Gym Repository',
      description: null,
      phone: null,
      latitude: -27.0747279,
      longitude: -49.488972,
    })

    const { gyms } = await sut.execute({
      query: 'GymUse Case',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'GymUse Case' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `GymUse Case ${i}`,
        description: null,
        phone: null,
        latitude: -27.0747279,
        longitude: -49.488972,
      })
    }

    const { gyms } = await sut.execute({
      query: 'GymUse Case',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'GymUse Case 21' }),
      expect.objectContaining({ title: 'GymUse Case 22' }),
    ])
  })
})
