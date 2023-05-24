import React, { useState } from "react";
import { Container, Form, FormControl, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="App">
      <header className="bg-primary position-fixed top-0 w-100">
        <h2 className="text-center p-2 text-white">My Contact</h2>
      </header>
      <Container className="pt-5">
        <Form className="form pt-3">
          <InputGroup className="my-3">
            <FormControl onChange={(e) => setSearch(e.target.value)} placeholder="Search contact" />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td className="text-center">{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
