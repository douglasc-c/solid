import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsServer } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsServer

describe('Search gyms Server', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsServer(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Gym Server',
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
      query: 'Gym Server',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Gym Server' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `Gym Server ${i}`,
        description: null,
        phone: null,
        latitude: -27.0747279,
        longitude: -49.488972,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Gym Server',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Gym Server 21' }),
      expect.objectContaining({ title: 'Gym Server 22' }),
    ])
  })
})
