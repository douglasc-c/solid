import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface FetchUsersCheckInsHistoryUseCaseequest {
  userId: string
  page: number
}

interface FetchUsersCheckInsHistoryUseCaseesponse {
  checkIns: CheckIn[]
}

export class FetchUsersCheckInsHistoryServe {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUsersCheckInsHistoryUseCaseequest): Promise<FetchUsersCheckInsHistoryUseCaseesponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
