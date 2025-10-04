import { Prisma } from '@prisma/client';

import { BackendError, CommonErrors } from '@/backend/domain/error-handler';

export async function prismaRepoHandler<T>(fn: () => Promise<T>) {
  try {
    return await fn();
  } catch (error) {
    if (error instanceof BackendError) {
      throw error;
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new BackendError(CommonErrors.validation);
    }

    throw new BackendError(CommonErrors.internal);
  }
}
