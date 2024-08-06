export const capitalize = (str) => {
  const stringArray = str.split(" ");
  const capitalizedString = stringArray.map(
    (string) => string[0].toUpperCase() + string.slice(1)
  );

  return capitalizedString.join(" ");
};
