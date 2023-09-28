import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users'
import { RegisterServer } from '../register'

export function makeRegisterServer() {
  const usersRepository = new PrismaUsersRepository()
  const registerServer = new RegisterServer(usersRepository)

  return registerServer
}
