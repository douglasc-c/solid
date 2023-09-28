/*
  Warnings:

  - You are about to drop the column `gymId` on the `check-ins` table. All the data in the column will be lost.
  - Added the required column `gym_id` to the `check-ins` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "check-ins" DROP CONSTRAINT "check-ins_gymId_fkey";

-- AlterTable
ALTER TABLE "check-ins" DROP COLUMN "gymId",
ADD COLUMN     "gym_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "check-ins" ADD CONSTRAINT "check-ins_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
