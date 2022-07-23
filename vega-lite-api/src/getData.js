import { csv } from "d3";

// Url to the gist file for car specification data
const csvUrl =
  "https://gist.githubusercontent.com/curran/8c131a74b85d0bb0246233de2cff3f52/raw/194c2fc143790b937c42bf086a5a44cb3c55340e/auto-mpg.csv";

export const getData = async () => {
  const data = await csv(csvUrl);
  console.log(data[0]);

  return data;
};
