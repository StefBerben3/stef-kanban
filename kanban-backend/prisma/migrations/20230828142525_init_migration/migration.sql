-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "laneId" TEXT NOT NULL,
    "taskName" TEXT NOT NULL,
    "taskDescription" TEXT NOT NULL,
    "taskPriority" INTEGER NOT NULL,
    "taskAssignee" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lane" (
    "id" TEXT NOT NULL,
    "lane" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lane_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_laneId_fkey" FOREIGN KEY ("laneId") REFERENCES "lane"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
