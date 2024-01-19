import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsUseCaseequest {
  userId: string
}

interface GetUserMetricsUseCaseesponse {
  checkInsCount: number
}

export class GetUserMetricsServe {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsUseCaseequest): Promise<GetUserMetricsUseCaseesponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
