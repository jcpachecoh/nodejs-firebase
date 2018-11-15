import React, { Component } from "react";
import fire from "./fire";
import { Row, Input, Col, Button, Preloader } from "react-materialize";
import DataTable from "./components/DataTable";
import NavBarMenu from "./components/NavBarMenu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      name: "",
      age: "",
      salary: "",
      loading: false
    }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire
      .database()
      .ref("employees")
      .orderByKey()
      .limitToLast(100);
    let emps = [];
    this.setState({ loading: true });
    messagesRef.once("value").then(snapshot => {
      emps = Object.entries(snapshot.val());
      emps = emps.map(item => item[1]);
      console.log(emps);
      // let employee = { snapshot.val(), id: snapshot.key };
      this.setState({ employees: emps, loading: false });
      console.log("em", this.state.employees);
    });
  }
  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    const { name, age, salary } = this.state;
    let obj = {
      name: name,
      salary: salary,
      age: age
    };
    fire
      .database()
      .ref("employees")
      .push(obj);
    this.setState({
      name: "",
      age: "",
      salary: ""
    });
  }
  render() {
    const { name, age, salary, employees, loading } = this.state;
    return (
      <div>
        <NavBarMenu />
        <Row>
          <Col s={12} className="grid-example">
            <Input
              s={12}
              label="Name"
              value={name}
              onChange={e =>
                this.setState({
                  name: e.target.value
                })
              }
            />
            <Input
              s={12}
              label="Age"
              value={age}
              onChange={e =>
                this.setState({
                  age: e.target.value
                })
              }
            />
            <Input
              s={12}
              label="Salary"
              value={salary}
              onChange={e =>
                this.setState({
                  name: e.target.value
                })
              }
            />
            <Button waves="light" onClick={this.addMessage.bind(this)}>
              Save
            </Button>
            {loading && <Preloader flashing />}
            {!loading && employees && <DataTable employees={employees} />}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
