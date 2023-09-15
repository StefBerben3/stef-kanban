import { Prisma } from '@prisma/client';
import { selectUser } from 'src/modules/user/select/userSelect';

export const selectCard = Prisma.validator<Prisma.cardDefaultArgs>()({
  select: {
    id: true,
    taskName: true,
    laneId: true,
    taskDescription: true,
    taskPriority: true,
    user: selectUser,
  },
});

export type SelectCard = Prisma.cardGetPayload<typeof selectCard>;
