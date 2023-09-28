import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface SearchGymsServerRequest {
  query: string
  page: number
}

interface SearchGymsServerResponse {
  gyms: Gym[]
}

export class SearchGymsServer {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsServerRequest): Promise<SearchGymsServerResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
