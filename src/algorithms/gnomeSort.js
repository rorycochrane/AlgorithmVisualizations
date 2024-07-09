// src/algorithms/gnomeSort.js
import * as d3 from 'd3';

const gnomeSort = async (bars, xScale, yScale, chartHeight, data, timeout) => {
  let index = 0;
  const n = data.length;

  while (index < n) {
    if (index === 0) {
      index++;
    }
    const bar1 = bars.filter(function() {
      return d3.select(this).attr("data-idx") == index;
    });

    const bar2 = bars.filter(function() {
      return d3.select(this).attr("data-idx") == index - 1;
    });

    const value1 = +bar1.attr('data-value');
    const value2 = +bar2.attr('data-value');

    bar1.attr('fill', 'red');
    bar2.attr('fill', 'red');

    if (value1 >= value2) {
      index++;
    } else {
      // Transition the bars
      bar1.transition().duration(timeout)
        .attr('x', xScale(index - 1))
        .attr('data-idx', index - 1);

      bar2.transition().duration(timeout)
        .attr('x', xScale(index))
        .attr('data-idx', index);

      await new Promise(resolve => setTimeout(resolve, timeout+10)); // Wait for the transition to complete

      // Swap the data values
      [data[index], data[index - 1]] = [data[index - 1], data[index]];
      index--;
    }

    await new Promise(resolve => setTimeout(resolve, timeout)); // Wait for the transition to complete
    bar1.attr('fill', 'blue');
    bar2.attr('fill', 'blue');
  }

  bars.attr('fill', 'black'); // Mark all bars as sorted
};

export default gnomeSort;
