/*
  Warnings:

  - Added the required column `position_x` to the `GameRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position_y` to the `GameRecord` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GameRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "turn" INTEGER NOT NULL,
    "player" TEXT NOT NULL,
    "position_x" INTEGER NOT NULL,
    "position_y" INTEGER NOT NULL,
    "gameId" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL,
    FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_GameRecord" ("id", "turn", "player", "gameId", "createAt") SELECT "id", "turn", "player", "gameId", "createAt" FROM "GameRecord";
DROP TABLE "GameRecord";
ALTER TABLE "new_GameRecord" RENAME TO "GameRecord";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
