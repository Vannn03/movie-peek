/*
  Warnings:

  - You are about to drop the column `createdAt` on the `comment` table. All the data in the column will be lost.
  - Added the required column `dateCreated` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `createdAt`,
    ADD COLUMN `dateCreated` VARCHAR(191) NOT NULL;
