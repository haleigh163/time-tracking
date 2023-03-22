type StringFormatterOption = "capitalize" | "titleCase";

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const titleCase = (str: string) => {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};
