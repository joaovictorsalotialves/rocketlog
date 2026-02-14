import type { Request, Response } from 'express'

class UsersController {
  create(_request: Request, response: Response) {
    return response.json({ message: 'Ok' })
  }
}

export { UsersController }
