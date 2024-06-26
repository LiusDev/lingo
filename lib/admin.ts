import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2djMpZ0oCvvZtLjHNOTUb9I15mP",
  "user_2hVLCI92Ycecnc5mFPAodigJvKM"
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
