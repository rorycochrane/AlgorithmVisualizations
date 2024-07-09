// src/algorithms/quickSort.js
import * as d3 from 'd3';

const quickSort = async (bars, xScale, yScale, chartHeight, data, timeout) => {
  const n = data.length;

  const partition = async (low, high) => {
    let pivot = data[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      const bar1 = bars.filter(function () {
        return d3.select(this).attr("data-idx") == j;
      });

      const bar2 = bars.filter(function () {
        return d3.select(this).attr("data-idx") == high;
      });

      bar1.attr('fill', 'red');
      bar2.attr('fill', 'green');

      await new Promise(resolve => setTimeout(resolve, timeout));

      if (data[j] < pivot) {
        i++;

        const bar3 = bars.filter(function () {
          return d3.select(this).attr("data-idx") == i;
        });

        if (i<j) {
            bar3.attr('fill', 'purple');
        }

        

        await new Promise(resolve => setTimeout(resolve, timeout));

        // Swap the data values
        [data[i], data[j]] = [data[j], data[i]];

        // Transition the bars
        bar1.transition().duration(250)
          .attr('x', xScale(i))
          .attr('data-idx', i);

        bar3.transition().duration(250)
          .attr('x', xScale(j))
          .attr('data-idx', j);

        await new Promise(resolve => setTimeout(resolve, timeout+10)); // Wait for the transition to complete
        
        bar3.attr('fill', 'blue');
      }
      await new Promise(resolve => setTimeout(resolve, timeout)); // Wait for the transition to complete
      bar1.attr('fill', 'blue');
      bar2.attr('fill', 'blue');
    }

    const bar4 = bars.filter(function () {
      return d3.select(this).attr("data-idx") == i + 1;
    });

    const bar5 = bars.filter(function () {
      return d3.select(this).attr("data-idx") == high;
    });

    // Swap the pivot value to its correct position
    [data[i + 1], data[high]] = [data[high], data[i + 1]];

    // Transition the bars
    bar4.transition().duration(timeout)
      .attr('x', xScale(high))
      .attr('data-idx', high);

    bar5.transition().duration(timeout)
      .attr('x', xScale(i + 1))
      .attr('data-idx', i + 1);

    await new Promise(resolve => setTimeout(resolve, timeout+10)); // Wait for the transition to complete

    bar4.attr('fill', 'blue');
    bar5.attr('fill', 'black');

    return i + 1;
  };

  const quickSortHelper = async (low, high) => {
    if (low < high) {
      const pi = await partition(low, high);

      await quickSortHelper(low, pi - 1);
      await quickSortHelper(pi + 1, high);
    } else {
        const bar = bars.filter(function () {
            return d3.select(this).attr("data-idx") == high;
            });
        bar.attr('fill', 'black')
    }
  };

  await quickSortHelper(0, n - 1);

  bars.attr('fill', 'black');
};

export default quickSort;
