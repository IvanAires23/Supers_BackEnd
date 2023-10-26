/*
  Warnings:

  - Added the required column `userId` to the `followings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "followings" DROP CONSTRAINT "followings_followerId_fkey";

-- AlterTable
ALTER TABLE "followings" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
