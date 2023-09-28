import { compare } from 'bcryptjs'
import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterServer } from './register'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymServer } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymServer

describe('Create Gym Server', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymServer(gymsRepository)
  })

  it('should be able to register', async () => {
    const { gym } = await sut.execute({
      title: 'Gym Server',
      description: null,
      phone: null,
      latitude: -27.0747279,
      longitude: -49.488972,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
