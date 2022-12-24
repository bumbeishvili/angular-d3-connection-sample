import * as d3 from 'd3';

// Chart function
export function BarChartD3(data, appDiv) {
  // Create elements
  const sum = d3.sum(data, (d) => d.value);

  const firstDraw = !!d3.select(appDiv).select('svg').node();

  const svg = d3
    .select(appDiv)
    .selectAll('svg')
    .data([1])
    .join('svg')
    .attr('width', 500)
    .attr('height', 500)
    .style('margin-top', 40)
    .style('border-radius', 20 + 'px');

  let gInitial = svg.selectAll('g.row').data(data, (d) => d.key);

  const gEnter = gInitial.enter().append('g');

  const gExit = gInitial.exit();
  const g = gEnter.merge(gInitial);

  g.attr('class', 'row');

  gExit
    .transition()
    .duration(500)
    .attr('transform', (d, i, arr) => `translate(-1000,${50 + 25 * i})`)
    .on('end', function () {
      d3.select(this).remove();
    });

  gEnter.attr('transform', (d, i, arr) => `translate(1000,${50 + 25 * i})`);

  g.transition()
    .duration(1000)
    .attr('transform', (d, i, arr) => `translate(10,${50 + 25 * i})`);

  g.selectAll('text.keys')
    .data((d) => [d])
    .join('text')
    .text((d) => d.key)
    .attr('class', 'keys')
    .attr('y', 16)
    .attr('text-anchor', 'end')
    .attr('x', 140);

  const max = d3.max(data, (d) => d.value);

  const scale = d3.scaleLinear().domain([0, max]).range([0, 300]);

  g.selectAll('rect.bars')
    .data((d) => [d])
    .join('rect')
    .attr('class', 'bars')
    .attr('height', 20)
    .attr('fill', 'darkblue')
    .attr('x', 150)
    .transition()
    .duration(1000)
    .delay((d, i, arr) => 1000 + i * 100)
    .attr('width', (d) => scale(d.value));

  g.selectAll('text.percents')
    .data((d) => [d])
    .join('text')
    .attr('class', 'percents')
    .text((d) => {
      const p = Math.round((d.value / sum) * 100 * 10) / 10;
      return p + '%';
    })
    .attr('font-size', 11)
    .attr('y', 16)
    .attr('x', function () {
      const current = d3.select(this).attr('x');
      return current || 155;
    })
    .transition()
    .duration(1000)
    .delay((d, i, arr) => 1000 + i * 100)
    .attr('x', (d) => 150 + scale(d.value) + 5);
}
