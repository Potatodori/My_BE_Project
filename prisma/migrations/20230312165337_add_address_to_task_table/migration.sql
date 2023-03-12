/*
  Warnings:

  - Added the required column `address` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Task` ADD COLUMN `address` CHAR(60) NOT NULL;
