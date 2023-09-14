import { Prisma } from '@prisma/client';

export const selectCard = Prisma.validator<Prisma.cardDefaultArgs>()({
  select: {
    id: true,
    taskName: true,
    laneId: true,
    taskDescription: true,
    taskPriority: true,
    user: true,
  },
});

export type SelectCard = Prisma.cardGetPayload<typeof selectCard>;
