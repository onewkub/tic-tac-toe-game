/*
  Warnings:

  - Added the required column `dimension` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "player_x" TEXT NOT NULL,
    "player_o" TEXT NOT NULL,
    "dimension" INTEGER NOT NULL,
    "result" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "createAt" DATETIME NOT NULL
);
INSERT INTO "new_Game" ("id", "player_x", "player_o", "result", "isDone", "createAt") SELECT "id", "player_x", "player_o", "result", "isDone", "createAt" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
