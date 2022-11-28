import React,{useEffect, useState} from "react";
import "./Login.css"
import { Form ,Button} from "react-bootstrap";
const Login = () => {
  const data={name:"",email:"",password:""}
  const [inputData,setInputData]=useState(data)
  const[flag,setFlag]=useState(false)
  useEffect(()=>{
    console.log("Ragisterd Successfully")

  },[flag])
  function handelData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData)
  }
  function handelSubmit(e){
    e.preventDefault();
    if(!inputData.name||!inputData.email||!inputData.password){
      alert ("All fields are mandatory")
    }
    else{
      setFlag(true)
    }
  }
  return (
    <div>
      <pre>{(flag)?<h2 className="ui-define" >Hollo {inputData.name},you've Ragisterd Successfully</h2>:""}</pre>
      <Form onSubmit={handelSubmit} >
        <Form.Group className="mb-3 ">
          <Form.Label style={{ fontSize: "20px", fontFamily: "bold" }}>
            RAGISTER
          </Form.Label>
          <Form.Control
            value={inputData.name}
            placeholder="Enter First Name"
            type="text"
            name="name"
            onChange={handelData}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={inputData.email}
            placeholder="Enter Your Email"
            type="email"
            name="email"
            onChange={handelData}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={inputData.password}
            placeholder="Enter Password"
            type="password"
            name="password"
            onChange={handelData}
          />
        </Form.Group>
        <Button type="submit">RAGISTER</Button>
      </Form>
    </div>
  );
};

export default Login;
