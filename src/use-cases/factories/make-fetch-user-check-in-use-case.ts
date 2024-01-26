import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-in-repository'

import { FetchUsersCheckInsHistoryServe } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUsersCheckInsHistoryServe(checkInsRepository)

  return useCase
}
