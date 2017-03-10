import * as d3 from 'd3';

const w = 500;
const h = 100;
const pad = 20;

let dataset = [
  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
  [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
  [600, 150]
];

const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([pad, w - pad * 2]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - pad, pad]);

const rScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([2, 5]);

const xAxis = d3.axisBottom(xScale).ticks(10);
const yAxis = d3.axisLeft(yScale).ticks(5);

const svg = d3.select('body')
    .append('svg')
    .attr('width', w + pad)
    .attr('height', h);

svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => xScale(d[0]))
    .attr('cy', (d) => yScale(d[1]))
    .attr('r', (d) => rScale(d[1]))

svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text((d) => `${d[0]}, ${d[1]}`)
    .attr('x', (d) => xScale(d[0]))
    .attr('y', (d) => yScale(d[1]))
    .attr('fill', 'teal')
    .attr('font-family', 'sans-serif')
    .attr('font-size', '10px');

svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0,${(h - pad)})`)
    .call(xAxis);

svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(${pad},0)`)
    .call(yAxis);