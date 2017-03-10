import * as d3 from 'd3';

const w = 500;
const h = 100;
const pad = 1;

let dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
  11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

const svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (w / dataset.length))
    .attr('y', (d) => h - (d * 4))
    .attr('width', (d) => w / dataset.length - pad)
    .attr('height', (d) => d * 4)
    .attr('fill', (d) => `rgb(0, 0, ${d * 10})`);

svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => i * (w / dataset.length) + (w / dataset.length - pad) / 2)
    .attr('y', (d) => h - (d * 4) + 14)
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'white')
    .attr("text-anchor", "middle");
