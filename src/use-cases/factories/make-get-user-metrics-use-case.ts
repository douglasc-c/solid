import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-in-repository'
import { GetUserMetricsServe } from '../get-user-metrics'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetUserMetricsServe(checkInsRepository)

  return useCase
}
