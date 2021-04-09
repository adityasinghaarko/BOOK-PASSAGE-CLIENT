import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';

const Home = () => {


  return (
    <Router>
      <div>
        <div style={{display:"flex"}} className="col-md-4">
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand><Link style={{color:"black"}} to="/admin/addBook">Add book</Link></Navbar.Brand>
            </Container>
          </Navbar>
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand><Link style={{color:"black"}} to="/admin/manageBooks">Manage books</Link></Navbar.Brand>
            </Container>
          </Navbar>
        </div>

        <hr />

        <div className="col-md-8">
          <Switch>
            <Route path="/admin/addBook">
              <AddBook></AddBook>
            </Route>
            <Route path="/admin/manageBooks">
              <ManageBooks></ManageBooks>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Home;