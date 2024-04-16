/*
  Warnings:

  - You are about to drop the column `endAt` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `startAt` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "endAt",
DROP COLUMN "startAt";
