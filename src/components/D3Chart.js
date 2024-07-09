import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
                  .attr('width', 500)
                  .attr('height', 500)
                  .style('background-color', '#f0f0f0');

    svg.append('circle')
       .attr('cx', 250)
       .attr('cy', 250)
       .attr('r', 100)
       .style('fill', 'blue');
  }, []);

  return <svg ref={ref}></svg>;
};

export default D3Chart;