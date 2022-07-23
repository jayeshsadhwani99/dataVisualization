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

## Marks and Channels

Take a look [here](https://youtu.be/2LhoCfjm8R4?t=13833) for reference.

It helps us map the attributes based on what their type is to the graphics on the screen and provides a systematic way of looking at the decision space.

### Marks

Marks include:

- Points
- Lines
- Area

A lot of visualizations can be boiled down to these marks.

### Channels

Channels are modifiers on the marks. Types of channels:

- Precision:

  Like the points x and y

  > Precision is the most powerful channel. Because, the first thing we percieve is the position

- Color:

  It is kinda subtle. There are 3 dimensions of color:

  1. Hue
  2. Saturation
  3. Luminance

- Size
- Shape

> All of these have different places to be applied, depending on the attribute types.

**Some Important Points**

- We can use opacity to determine the density.
- We use hue with categorical data
- The way that people percieve size is by the area and not the radius of the circle. And, radius is proportional to the square root of the area. So, we need to keep that in account when using size as a channel.

  Thus, from an implementation perspective we wouldn't want to represent data in a linear scale with size.

- If we map hue to an ordered data, it wouldn't make sense, as we cannot assign an order to hue, for example, we cannot say that blue is grater than yellow or vice-versa

- To map ordered data, luminance would be a better indicator than hue, as luminance has a natural order.

- Using area while representing a relative data like temperature is not a good idea.

- We can use areas to represent multiple different things and we can distinguish them using hue.

[Here](https://youtu.be/2LhoCfjm8R4?t=15915) is the rankings for different channels and marks
