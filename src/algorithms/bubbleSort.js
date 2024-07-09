// src/algorithms/bubbleSort.js
import * as d3 from 'd3';

const bubbleSort = async (bars, xScale, yScale, chartHeight, data, timeout) => {
  const n = data.length;

  

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {

      const bar1 = bars.filter(function() {
        return d3.select(this).attr("data-idx") == j; 
      });

      const bar2 = bars.filter(function() {
        return d3.select(this).attr("data-idx") == j+1;
      });

      const value1 = +bar1.attr('data-value');
      const value2 = +bar2.attr('data-value');

      bar1.attr('fill', 'red')
      bar2.attr('fill', 'red')

      if (value1 > value2) {
        
        // Transition the bars
        bar1.transition().duration(timeout)
          .attr('x', xScale(j + 1))
          .attr('data-idx', j + 1);

        bar2.transition().duration(timeout)
          .attr('x', xScale(j))
          .attr('data-idx', j);

        await new Promise(resolve => setTimeout(resolve, timeout+10)); // Wait for the transition to complete

        // Swap the data values
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
      await new Promise(resolve => setTimeout(resolve, timeout)); // Wait for the transition to complete
      bar1.attr('fill', 'blue')
      bar2.attr('fill', 'blue')

    }
    const endBar = bars.filter(function() {
        return d3.select(this).attr("data-idx") == n-i-1; 
      });

    endBar.attr('fill', 'black')

  }
};

export default bubbleSort;
