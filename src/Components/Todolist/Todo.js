import React from "react";
import { GrAdd,GrUpdate } from "react-icons/gr";
import { FcStart } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./Todo.css";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todo: [],
      isActive: false,
    };
  }
      //fb =>first 
    componentDidMount(){
        this.setState({}) //render
        //life cycle =>api 
        // console.log("componenet did mount")
        let data = localStorage.getItem("Todo_List")
        console.log(data)
        //parse string to obj
        // v=10
        this.state.todo= JSON.parse(data) //todo
                //render 
        this.setState({
           
        })
    }


  isAlertHandler = (className) => {
    this.setState({
      isActive: true,
    });
    setTimeout(() => {
      this.setState({
        isActive: false,
      });
    }, 3000);
  };

  //input
  handlechg = (val) => {
    this.setState({
      value: val,
    });
  };

  //submit
  setdata = (e) => {
    e.preventDefault();
    //object title,s
    let obj = {
      title: this.state.value,
      s: 0,
    };

    if (obj.title === "") {
      this.isAlertHandler();
      return;
    }

    this.state.todo = [...this.state.todo, obj];

    localStorage.setItem("Todo_List", JSON.stringify(this.state.todo));

    this.setState({
      value: "",
    });
    //
  };

  //state chg = 0 or 1
  edit = (ind) => {
    //o
    for (var i = 0; i < this.state.todo.length; i++) {
      this.state.todo[i].s = 0;
    }

    this.state.todo[ind].s = 1;
    this.setState({});
  };

  //todo title => value inp
  setnewtext = (val, ind) => {
    this.state.todo[ind].title = val;
    this.setState({});
  };

  update = (i) => {
    this.state.todo[i].s = 0;
    this.setState({});
  };

  delete_Todo = (ind) => {
    this.state.todo.splice(ind, 1); //delete one element
    localStorage.setItem("Todo_List", JSON.stringify(this.state.todo));
    this.setState({});
  };

  render() {
    return (
      <div>
        <h1>Todo List </h1>
        {this.state.isActive ? (
          <div className="alert alert-danger">Please enter the value</div>
        ) : (
          ""
        )}
        <form className="todo-form">
          <input
            placeholder="Add a todo"
            className="todo-input"
            value={this.state.value}
            onChange={(e) => this.handlechg(e.target.value)}
            type="text"
          />
          <button
            className="todo-button text-white"
            type="submit"
            onClick={this.setdata}
            style={{ color: "white" }}
          >
            <GrAdd />
          </button>
        </form>
        {this.state.todo.map((v, i) => {
          return v.s == 0 ? (
            //text

            <li className="todo-item" key={i}>
              <div>
                <i className="me-2 text-warning">
                  <AiFillStar />
                </i>
                {v.title}
              </div>
              <div>
                <button
                  style={{ fontSize: "20px" }}
                  className="btn btn-success me-2 btn-sm"
                  onClick={() => this.edit(i)}
                >
                  <FiEdit />
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  style={{ fontSize: "20px", color:'red' }}
                  onClick={() => this.delete_Todo(i)}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ) : (
            <li className="todo-item" key={i}>
              <i className="me-2">
              <FiEdit />
              </i>
              <input
                className={`todo-input`}
                type="text"
                value={v.title}
                onChange={(e) => this.setnewtext(e.target.value, i)}
              />
              <div className="ms-3">
                <button
                  style={{color:'yellow',fontSize:'20px'}}
                  className="btn btn-info mb-2 btn-sm"
                  onClick={() => this.update(i)}
                >
                  <GrUpdate/>
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  style={{ fontSize: "20px", color:'red' }}
                  onClick={() => this.delete_Todo(i)}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Todo;
