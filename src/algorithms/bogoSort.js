// src/algorithms/bogoSort.js
import * as d3 from 'd3';

const isSorted = (data) => {
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] < data[i - 1][1]) {
      return false;
    }
  }
  return true;
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const bogoSort = async (bars, xScale, yScale, chartHeight, data, timeout) => {
  // Create an array that holds the original indices and the data values
  let indexAndData = data.map((value, index) => [index, value]);

  while (!isSorted(indexAndData)) {
    shuffle(indexAndData);

    // Map each bar to the new index based on the shuffled array
    for (let i = 0; i < indexAndData.length; i++) {
      const originalIndex = indexAndData[i][0];
      const bar = bars.filter((d, idx) => idx === originalIndex);
      bar.transition().duration(timeout)
        .attr('x', xScale(i))
        .attr('data-idx', i);
    }

    await new Promise(resolve => setTimeout(resolve, timeout+10)); // Wait for the transition to complete
  }

  // Set all bars to a sorted color
  bars.transition()
      .duration(500)
      .attr('fill', 'black');
};

export default bogoSort;
