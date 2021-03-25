import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export async function getGameRecord(req: Request, res: Response) {
  const id = req.query.id as string
  try {
    const rlt = await prisma.gameRecord.findMany({
      where: {
        gameId: id,
      },
      orderBy: {
        turn: 'asc',
      },
    })
    res.status(200).json(rlt)
  } catch (error) {
    res.status(500).json(error)
  } finally {
    prisma.$disconnect()
  }
}
