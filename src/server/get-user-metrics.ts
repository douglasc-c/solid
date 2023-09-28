import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsServeRequest {
  userId: string
}

interface GetUserMetricsServeResponse {
  checkInsCount: number
}

export class GetUserMetricsServe {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsServeRequest): Promise<GetUserMetricsServeResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
