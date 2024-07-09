// src/components/BarChart.js
import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './BarChart.css'; // Import the custom CSS

const BarChart = ({ algorithm }) => {
  const svgRef = useRef();
  const svgContainer = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [barsCount, setBarsCount] = useState(25);
  const [data, setData] = useState(Array.from({ length: barsCount }, () => Math.floor(Math.random() * 100) + 1));

  const getSvgContainerSize = () => {
    const containerWidth = svgContainer.current.clientWidth;
    const containerHeight = containerWidth / 2;
    setDimensions({ width: containerWidth, height: containerHeight });
  };

  useEffect(() => {
    getSvgContainerSize();
    window.addEventListener("resize", getSvgContainerSize);
    return () => window.removeEventListener("resize", getSvgContainerSize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const padding = 0;
    const chartWidth = dimensions.width - padding;
    const chartHeight = dimensions.height - padding;

    const svg = d3.select(svgRef.current)
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)
      .style('background', '#f4f4f4')
      .style('margin-top', '50')
      .style('overflow', 'visible');

    svg.selectAll('*').remove(); // Clear previous renders

    const xScale = d3.scaleBand()
      .domain(data.map((val, index) => index))
      .range([0, chartWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([chartHeight, 0]);

    let bars = svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d, index) => xScale(index))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', val => chartHeight - yScale(val))
      .attr('data-value', d => d)
      .attr('data-idx', (d, index) => index)
      .attr('fill', 'blue');

    
    if (isPlaying && algorithm) {
      const timeout = 300-speed
      algorithm(bars, xScale, yScale, chartHeight, data, timeout);
    }

  }, [dimensions, barsCount, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setData(Array.from({ length: barsCount }, () => Math.floor(Math.random() * 100) + 1));
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleBarsCountChange = (e) => {
    setBarsCount(e.target.value);
    setData(Array.from({ length: barsCount }, () => Math.floor(Math.random() * 100) + 1));
  };

  return (
    <Container>
      <Row>
        <Col ref={svgContainer} style={{ width: '100%', minHeight: '400px' }}>
          <svg ref={svgRef}></svg>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="xs-12 md-6">
          <Form.Group controlId="formSpeed">
            <Form.Label>Speed</Form.Label>
            <Form.Control
              className="slider"
              type="range"
              min="0"
              max="250"
              value={speed}
              onChange={handleSpeedChange}
              disabled={isPlaying}
            />
          </Form.Group>
        </Col>
        <Col className="xs-12 md-6">
          <Form.Group controlId="formBarsCount">
            <Form.Label>Number of Bars</Form.Label>
            <Form.Control
              className="slider"
              type="range"
              min="4"
              max="50"
              value={barsCount}
              onChange={handleBarsCountChange}
              disabled={isPlaying}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          {isPlaying ? (
            <Button variant="danger" onClick={handleReset}>Reset</Button>
          ) : (
            <Button variant="primary" onClick={handlePlay}>Play</Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default BarChart;
