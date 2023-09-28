/*
  Warnings:

  - Added the required column `gymId` to the `check-ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `check-ins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "check-ins" ADD COLUMN     "gymId" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "check-ins" ADD CONSTRAINT "check-ins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check-ins" ADD CONSTRAINT "check-ins_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "gyns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
