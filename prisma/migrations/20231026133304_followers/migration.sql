/*
  Warnings:

  - You are about to drop the column `postId` on the `followers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "followers" DROP CONSTRAINT "followers_postId_fkey";

-- AlterTable
ALTER TABLE "followers" DROP COLUMN "postId";
