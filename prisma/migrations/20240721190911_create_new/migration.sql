-- CreateTable
CREATE TABLE `news` (
    `id` VARCHAR(191) NOT NULL,
    `title` CHAR(50) NOT NULL,
    `description` VARCHAR(2000) NOT NULL,
    `content` VARCHAR(100) NOT NULL,
    `created_by` CHAR(50) NOT NULL,
    `created_at` DATETIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
