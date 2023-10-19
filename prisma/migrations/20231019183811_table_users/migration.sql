-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nameHero" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nameHero_key" ON "users"("nameHero");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
