/*
  Warnings:

  - Added the required column `movieTitle` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `movieTitle` VARCHAR(191) NOT NULL;
