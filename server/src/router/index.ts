import { Router } from 'express'
import { getGameCount, getGames } from '../controllers/game'
import { getGameRecord } from '../controllers/gameRecord'

const router = Router()

router.get('/game', getGames)
router.get('/game-count', getGameCount)
router.get('/game-record', getGameRecord)

export default router
