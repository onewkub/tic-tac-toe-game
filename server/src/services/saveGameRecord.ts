import { prisma } from '../lib/prisma'
import { IGameRoom } from './createRoom'

export async function saveGameRecord(room: IGameRoom) {
  try {
    await prisma.game.create({ data: room.game })
    console.log(`add ${room.id} game to database`)
    room.gameRecord.map(async (record) => {
      try {
        await prisma.gameRecord.create({
          data: {
            ...record,
            gameId: room.id,
          },
        })
      } catch (error) {
        console.log(error)
      }
    })
  } catch (error) {
    console.log(error)
  } finally {
    
    prisma.$disconnect()
  }
}
