// src/components/Layout.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Layout = ({ content, text }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Algorithm Visualizer</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {content && <section className="content-section">{content}</section>}
      <main className="mb-4">
        <Container className="px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {text}
            </div>
          </div>
        </Container>
      </main>
      {/* <footer className="border-top">
        <Container className="px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div>
            </div>
          </div>
        </Container>
      </footer> */}
    </>
  );
};

export default Layout;
