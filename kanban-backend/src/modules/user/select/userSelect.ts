import { Prisma } from '@prisma/client';

export const selectUser = Prisma.validator<Prisma.userDefaultArgs>()({
  select: {
    id: true,
    name: true,
    lastname: true,
  },
});

export type SelectUser = Prisma.userGetPayload<typeof selectUser>;
