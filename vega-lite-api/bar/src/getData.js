import { csv } from "d3";

// Url to the gist file for car specification data
const csvUrl =
  "https://gist.githubusercontent.com/curran/0d2cc6698cad72a48027b8de0ebb417d/raw/8434d10333e3fa7631392af1b5a276ba02384483/religionByCountryTop20.csv";

export const getData = async () => {
  const data = await csv(csvUrl);
  console.log(data[0]);

  return data;
};
