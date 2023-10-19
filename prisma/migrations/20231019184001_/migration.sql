/*
  Warnings:

  - You are about to drop the column `nameHero` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[heroName]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `heroName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_nameHero_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "nameHero",
ADD COLUMN     "heroName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_heroName_key" ON "users"("heroName");
