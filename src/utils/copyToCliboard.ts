export const copyToCliboard = async (message: string) => {
  await navigator.clipboard.writeText(message);
};
