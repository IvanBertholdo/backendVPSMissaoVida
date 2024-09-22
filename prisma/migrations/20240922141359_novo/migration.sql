/*
  Warnings:

  - You are about to drop the column `filhos_acolhido` on the `Acolhido` table. All the data in the column will be lost.
  - Added the required column `qual_religiao` to the `Acolhido` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `religiao_acolhido` on the `Acolhido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Acolhido" DROP COLUMN "filhos_acolhido",
ADD COLUMN     "qual_religiao" VARCHAR(50) NOT NULL,
DROP COLUMN "religiao_acolhido",
ADD COLUMN     "religiao_acolhido" BOOLEAN NOT NULL;
