/*
  Warnings:

  - You are about to drop the column `username` on the `comment` table. All the data in the column will be lost.
  - Added the required column `userImage` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `username`,
    ADD COLUMN `userImage` VARCHAR(191) NOT NULL,
    ADD COLUMN `userName` VARCHAR(191) NOT NULL;
