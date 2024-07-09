// src/algorithms/insertionSort.js
import * as d3 from 'd3';

const insertionSort = async (bars, xScale, yScale, chartHeight, data, timeout) => {
  const n = data.length;

  for (let i = 1; i < n; i++) {

    let j = i-1;
    const middleBars = []
    
    const bar1 = bars.filter(function() {
        return d3.select(this).attr("data-idx") == i;
      });

    const bar2 = bars.filter(function() {
        return d3.select(this).attr("data-idx") == j;
      });

    bar1.attr('fill', 'red');
    await new Promise(resolve => setTimeout(resolve, timeout)); 

    const value1 = +bar1.attr('data-value');
    let value2 = +bar2.attr('data-value');

    while (j >= 0 && value2 > value1) {

      const bar2 = bars.filter(function() {
        return d3.select(this).attr("data-idx") == j;
      });

      value2 = +bar2.attr('data-value');

      if (value2 > value1) {
        bar2.attr('fill', 'red');
        middleBars.push(bar2)
        j--;
      }

      // Highlight the current comparison
      await new Promise(resolve => setTimeout(resolve, timeout+10)); 

      
    }

    for (const middleBar of middleBars) {
        const oldSpot = +middleBar.attr('data-idx');
        
        middleBar.transition().duration(timeout)
          .attr('x', xScale(oldSpot+1))
          .attr('data-idx', oldSpot+1);
    }

    if (middleBars.length !== 0) {
        bar1.transition().duration(timeout)
          .attr('x', xScale(j+1))
          .attr('data-idx', j+1);
    }
    

    await new Promise(resolve => setTimeout(resolve, timeout*(middleBars.length*0.4+1)));
    bars.attr('fill', 'blue');
  }

  bars.attr('fill', 'black'); 
};

export default insertionSort;
