import { Prisma } from '@prisma/client';

export const selectLane = Prisma.validator<Prisma.laneDefaultArgs>()({
  select: {
    id: true,
    lane: true,
    createdAt: true,
    updatedAt: true,
  },
});

export type SelectLane = Prisma.laneGetPayload<typeof selectLane>;
