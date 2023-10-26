/*
  Warnings:

  - Added the required column `postId` to the `followers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "followers" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
