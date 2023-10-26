/*
  Warnings:

  - You are about to drop the `followers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "followers" DROP CONSTRAINT "followers_postId_fkey";

-- DropForeignKey
ALTER TABLE "followers" DROP CONSTRAINT "followers_userId_fkey";

-- DropTable
DROP TABLE "followers";

-- CreateTable
CREATE TABLE "followings" (
    "id" SERIAL NOT NULL,
    "followerId" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "followings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
