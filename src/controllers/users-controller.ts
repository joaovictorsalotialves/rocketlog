import { hash } from 'bcrypt'
import type { Request, Response } from 'express'
import { z } from 'zod'

class UsersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { name, email, password } = bodySchema.parse(request.body)

    const hashedPassword = await hash(password, 8)

    return response.json({ message: 'Ok', hashedPassword })
  }
}

export { UsersController }
