-- CreateEnum
CREATE TYPE "SurfaceType" AS ENUM ('ROCK', 'GAS', 'ICE', 'OCEAN', 'LAVA', 'DESERT', 'FOREST', 'JUNGLE', 'SWAMP', 'TUNDRA', 'MOUNT', 'PLAINS', 'CITY', 'SPACE', 'OTHER');

-- CreateTable
CREATE TABLE "Planet" (
    "id" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appearance" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "texture" TEXT,
    "size" DOUBLE PRECISION NOT NULL,
    "brightness" DOUBLE PRECISION NOT NULL,
    "surfaceType" "SurfaceType" NOT NULL,
    "planetId" TEXT NOT NULL,

    CONSTRAINT "Appearance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stats" (
    "id" TEXT NOT NULL,
    "water" DOUBLE PRECISION NOT NULL,
    "vegetation" DOUBLE PRECISION NOT NULL,
    "atmosphere" DOUBLE PRECISION NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "gravity" DOUBLE PRECISION NOT NULL,
    "planetId" TEXT NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Planet_uuid_key" ON "Planet"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Appearance_planetId_key" ON "Appearance"("planetId");

-- CreateIndex
CREATE UNIQUE INDEX "Stats_planetId_key" ON "Stats"("planetId");

-- AddForeignKey
ALTER TABLE "Planet" ADD CONSTRAINT "Planet_id_fkey" FOREIGN KEY ("id") REFERENCES "Stats"("planetId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appearance" ADD CONSTRAINT "Appearance_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
