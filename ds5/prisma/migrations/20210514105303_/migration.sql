-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "title" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Author" ADD FOREIGN KEY ("authorId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
