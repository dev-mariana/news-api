/*
  Warnings:

  - You are about to alter the column `created_at` on the `news` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `news` ADD COLUMN `updated_at` DATETIME NULL,
    MODIFY `created_at` DATETIME NOT NULL;
