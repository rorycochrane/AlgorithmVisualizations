import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <h2>Sorting Algorithms</h2>
      <Row className="py-2">
        <Col>
          <Card>
            <Card.Header as="h5">
              <Link to="/bubblesort">Bubble Sort</Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">
              <Link to="/gnomesort">Gnome Sort</Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Gnome Sort passes through the list only once, and each time it encounters an element smaller than the preceding element, it moves it into the correct position using a series of swaps.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="py-2">
        <Col>
          <Card>
            <Card.Header as="h5">
              <Link to="/insertionsort">Insertion Sort</Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Insertion Sort passes forward through the list only once, and each time it encounters an element smaller than the preceding element it moves that element to its correct position.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">
              <Link to="/bogosort">Bogo Sort</Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Bogo Sort is a highly inefficient sorting algorithm that generates random permutations of the list until it finds one that is sorted.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row className="py-2">
        <Col>
          <Card>
            <Card.Header as="h5">
              <Link to="/quicksort">Quick Sort</Link>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Quick Sort is an efficient sorting algorithm, serving as a systematic method for placing the elements of a list in order. It is faster in practice than other O(n log n) algorithms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Home;

