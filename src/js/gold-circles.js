import * as d3 from 'd3';

const w = 500;
const h = 50;

const dataset = [ 5, 10, 15, 20, 25 ];

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

const circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr('cx', (d, i) => {
  return (i * 50) + 25;
}).attr('cy', h/2)
    .attr('r', (d) => d)
    .attr('stroke', 'gold')
    .attr('fill', (d, i) => {
      let rand = Math.ceil(Math.random() * 50) + 175,
          rgba = `rgba(255, ${rand}, 0, .${i}`;
      return rgba;
    })
    .attr('stroke-width', (d, i) => {
      return d/i;
    });