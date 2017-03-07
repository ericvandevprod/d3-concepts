const w = 500;
const h = 100;
const pad = 1;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
  11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

const svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attrs({
      x: (d, i) => i * (w / dataset.length),
      y: (d) => h - (d * 4),
      width: (d) => w / dataset.length - pad,
      height: (d) => d * 4,
      fill: (d) => `rgb(0, 0, ${d * 10})`
    });

svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text((d) => d)
    .attrs({
      x: (d, i) => i * (w / dataset.length) + (w / dataset.length - pad) / 2,
      y: (d) => h - (d * 4) + 14
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '11px')
    .attr('fill', 'white')
    .attr("text-anchor", "middle");