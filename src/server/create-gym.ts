import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface CreateGymServerRequest {
  title: string
  description?: string | null
  phone?: string | null
  latitude: number
  longitude: number
}

interface CreateGymServerResponse {
  gym: Gym
}

export class CreateGymServer {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: CreateGymServerRequest): Promise<CreateGymServerResponse> {
    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    return { gym }
  }
}
