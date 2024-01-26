import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeValidadeCheckInUseCase } from '@/use-cases/factories/make-validete-check-in-use-case'

export async function validade(request: FastifyRequest, reply: FastifyReply) {
  const validateCheckInParmsShema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validateCheckInParmsShema.parse(request.query)

  const validadeCheckInUseCase = makeValidadeCheckInUseCase()

  await validadeCheckInUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
