# Data Visualization

Data visualization is the representation of data through use of common graphics, such as charts, plots, infographics, and even animations. These visual displays of information communicate complex data relationships and data-driven insights in a way that is easy to understand.

These provide visual representations of datasets designed to help people carry out tasks more effectively. It is suitable when there is a need to augment human capabalities.

## What is D3.js?

[D3.js](https://github.com/d3/d3/wiki) is an open source JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards

> D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document.

## Why not use python, R or Tableau?

Though great tools, they provide abstraction. This causes an abstraction barrier.
Basically, they do not have a high level of customization and are limited in interactivity.

## Finding Visualizations

These are a few places to find visualizations:

1. [Reuters Graphics](https://graphics.reuters.com/)
2. [The Upshot - New York Times](https://www.nytimes.com/international/section/upshot)
3. [The Pudding](https://pudding.cool/)
4. [FiveThrityEight](https://fivethirtyeight.com/)
5. [Flowing Data](https://flowingdata.com/)
6. [Data is Beautiful - Reddit](https://www.reddit.com/r/dataisbeautiful/)
7. [Kantar Information is beautiful](https://www.informationisbeautifulawards.com/)
8. [Quartz Data Visualization](https://flowingdata.com/tag/quartz/)
9. [Graphic Detail - The Economist](https://www.economist.com/graphic-detail)
10. [Observable](https://observablehq.com/explore/)

## Prepare the data

1. We need to get a csv/tsv file
2. The data should be clean - no empty spaces
3. Then we can host to github gists to have access to them anywhere.

```js
const text = "foo,bar\n1,2";
const data = d3.csvParse(text);
// returns [
//     {
//         foo: "1",
//         bar: "2"
//     },
//     columns: ["foo", "bar"]
// ]
const tab_text = "foo\tbar\n1\t2";
const tab_data = d3.tsvParse(tab_text);
// returns [
//     {
//         foo: "1",
//         bar: "2"
//     },
//     columns: ["foo", "bar"]
// ]

// Number of Rows
const rows = data.length;
// Number of Columns
const columns = data.columns.length;
// Size of file
const size = text.length / 1024; // In kB
```

## Inputs for visualization

We need data and tasks as inputs to get started with data visualizations

### Data

There are 3 major types of data:

1. Tables

   Here, we have columns(attributes) and rows(items)

   Then there are **Multi-Dimentional Tables**, here it is presented as a table but is a result of a multi dimentional aggregation.

2. Networks and Trees

   Trees are a subset of networks.
   Networks are just basically a collection of links(edges) and nodes(items)

3. Spatial Data

   The type of data that can be embedded in some kind of space or plotted on a map.

   These are also of two types-

   - Fields (continous)
   - Geometry (spatial)

These ultimately act as tables, no matter how they are represented. To know how to best visualize a table, we need to look at Attribute Types.

**Attribute Types**

This is a broad taxnomy for visualization design:

1. Categorical

   Where the attributes or values are distinctly different from one another, but there is no natural order between them. For example, countries

2. Ordered -

   - Ordinal

   Where the attributes or values are distinctly different from one another and have a natural order between them. For example, Tshirt sizes

   - Quantitative

   Maily those attributes which have numbers.

   Ordinal and categorical data are discrete, where as quantitative datasets have very specific values

> Time is a special case. If we have a point in time, we can state it as a quantitative attribute, but, if we aggregate by day, week or month, it's ordinal
>
> Space is also a special case and can be represented in a special way. Example, my current location could be treated as quantitative, but countries, states or continents can be treated as categorical

### Types

The other thing that we look for after data is what task we want to perform with the data. Like goals or questions.

- What questions you want to answer?
- What is the problem you are trying to solve?
- What decision are you trying to make?
- What outcomes are you hoping for?
- What story do you want to tell?
- What tasks should the viewer be able to perform?
