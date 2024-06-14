/*
  Warnings:

  - You are about to alter the column `createdAt` on the `comment` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `createdAt` DATETIME NOT NULL;
