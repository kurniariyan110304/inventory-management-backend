/*
  Warnings:

  - You are about to drop the column `ItemId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `itemId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_ItemId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "ItemId",
ADD COLUMN     "itemId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
