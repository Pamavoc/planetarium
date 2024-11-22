-- DropForeignKey
ALTER TABLE "Planet" DROP CONSTRAINT "Planet_id_fkey";

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
