import request from 'supertest'

import { app } from '@/app'

describe('UsersController', () => {
  it('should create a new user successfully', async () => {
    const response = await request(app).post('/users').send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.name).toBe('Test User')
  })
})
