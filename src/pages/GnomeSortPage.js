// src/pages/AlgorithmPage.js
import React from 'react';
import Content from '../components/Content';
import BarChart from '../components/BarChart';
import bubbleSort from '../algorithms/bubbleSort';
import gnomeSort from '../algorithms/gnomeSort';
import insertionSort from '../algorithms/insertionSort';
import bogoSort from '../algorithms/bogoSort';
import quickSort from '../algorithms/quickSort';

const GnomeSortPage = () => {
  const visualization = <BarChart algorithm={gnomeSort} />;
  const pythonCode = `
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
  `;
  const explanation = "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.";


  const content = (
    <Content 
      visualization={visualization}
      pythonCode={pythonCode}
      explanation={explanation}
    />
  );

  const text = (
    <div>
      <h1>Bubble Sort Algorithm</h1>
      <p>Additional text or information about the algorithm can go here.</p>
    </div>
  );

  return { content, text };
};

export default GnomeSortPage;
