-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "player_x" TEXT NOT NULL,
    "player_o" TEXT NOT NULL,
    "dimension" INTEGER NOT NULL,
    "result" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameRecord" (
    "id" SERIAL NOT NULL,
    "turn" INTEGER NOT NULL,
    "player" TEXT NOT NULL,
    "position_x" INTEGER NOT NULL,
    "position_y" INTEGER NOT NULL,
    "gameId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameRecord" ADD FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
