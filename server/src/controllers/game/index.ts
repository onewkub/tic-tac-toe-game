import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export async function getGames(req: Request, res: Response) {
  const id = req.query.id
  const page = req.query.page

  try {
    if (page) {
      const rlt = await prisma.game.findMany({
        take: 5,
        skip: (Number(page) - 1) * 5,
        // include: {
        //   GameRecord: true,
        // },
      })
      res.status(200).json(rlt)
    } else if (id) {
      const rlt = prisma.game.findUnique({
        where: {
          id: id as string,
        },
        // include: {
        //   GameRecord: true,
        // },
      })
      res.status(200).json(rlt)
    } else {
      const rlt = await prisma.game.findMany({
        // include: {
        //   GameRecord: true,
        // },
      })
      res.status(200).json(rlt)
    }
  } catch (error) {
    res.status(500).json(error)
  } finally {
    prisma.$disconnect()
  }
}
