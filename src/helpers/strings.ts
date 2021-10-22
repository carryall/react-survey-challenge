export const toTitleCase = (str: string | undefined): string | undefined => {
  if (!str) {
    return;
  }

  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};
