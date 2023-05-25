import { FastifyInstance } from 'fastify'

import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/transaction', async () => {
    const transaction = await knex('transactions').select('*')

    return transaction
  })
}
