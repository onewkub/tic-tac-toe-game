import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export async function getGameCount(req: Request, res: Response) {
  try {
    const rlt = await prisma.game.count()
    res.status(200).json(rlt)
  } catch (error) {
    res.status(500).json(error)
  } finally {
    prisma.$disconnect()
  }
}

export async function getGames(req: Request, res: Response) {
  const id = req.query.id
  const page = req.query.page
  const take = req.query.take || 4

  try {
    if (page) {
      const rlt = await prisma.game.findMany({
        take: Number(take),
        skip: (Number(page) - 1) * Number(take),
        // include: {
        //   GameRecord: true,
        // },
        orderBy: {
          createAt: 'desc',
        },
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
