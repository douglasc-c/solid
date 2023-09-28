import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchUsersCheckInsHistoryServeRequest {
  userId: string
  page: number
}

interface FetchUsersCheckInsHistoryServeResponse {
  checkIns: CheckIn[]
}

export class FetchUsersCheckInsHistoryServe {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUsersCheckInsHistoryServeRequest): Promise<FetchUsersCheckInsHistoryServeResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
