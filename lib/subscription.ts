import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

const DAY_IN_MS = 86_400_000;

export const checksubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const usersubscription = await prismadb.userSubscription.findUnique({
    where: { userId: userId },
    select: {
      stripeSubscriptionId: true,
      stripePriceId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
    },
  });

  if (!usersubscription) {
    return false;
  }

  const isvalid =
    usersubscription.stripePriceId &&
    usersubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isvalid;
};
