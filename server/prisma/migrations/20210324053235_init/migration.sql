-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "player_x" TEXT NOT NULL,
    "player_o" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "createAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "GameRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "turn" INTEGER NOT NULL,
    "player" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL,
    FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
