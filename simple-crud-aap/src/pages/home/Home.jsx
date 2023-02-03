import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LOGO from "../images/LOGO.png";
// import { Modal } from "react-bootstrap";
import axios from "axios";
import TableData from "../table/TableData";
import ModalForm from "../modal/ModalForm";
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer';
import ToastHeader from "react-bootstrap/ToastHeader";

export default function Home() {
  const [show, setShow] = useState(false);
  const [formval, setFormval] = useState({
    Title: "",
    Description: ""

  });
  const [getData, setGetData] = useState([]);
  const [showToast,setShowToast]=useState(false)
  const [toastMsg,setToastMsg]=useState({
    message:"",
    variant:""
  })
  const [viewData,setViewData]=useState(false)

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  console.log(showToast)
  const handleTitleChange = (event) => {
    setFormval({
      ...formval,
      Title: event.target.value,
    });
  };

  const handleDescChange = (event) => {
    setFormval({
      ...formval,
      Description: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await axios.post(
      `${process.env.REACT_APP_SECRET_KEY}/taskDetails`,
      //formval
    {...formval,status:"pending"}
    );
    console.log(response);
    console.log(formval);
    if (response.status === 201) {
      setFormval({
        Title: "",
        Description: "",
              });
      handleClose();
      getTaskDetails();
      setShowToast(true)
      setToastMsg({
        message: "Successfully submitted",
        variant: "success",
      });
      
    }
  };

  const getTaskDetails = async () => {
    let res = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/taskDetails`);
    console.log(res);
    if (res.status === 200) {
      //setGetData(res.data)
      setGetData([...res.data]);
    }
  };

  useEffect(() => {
    getTaskDetails();
  }, []);

  const deleteFun = async (id) => {
   // console.log(id);
    const response = await axios.delete(
      `${process.env.REACT_APP_SECRET_KEY}/taskDetails/${id}`
    );
  //  console.log(response);
    if (response.status === 200) {
      getTaskDetails();
    }
  };

const editFun=async (data)=>{
console.log("data",data)
const request = {...data,status:"completed"}
console.log(request)
const resp= await axios.put(`${process.env.REACT_APP_SECRET_KEY}/taskDetails/${request.id}`,request)
console.log(resp)
if(resp.status===200)
{
  getTaskDetails()
}
}

const displayData=(x)=>{
  setViewData(true)
  setShow(true)
  console.log("x",x)
  console.log("formval",formval)
 setFormval(x)
}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav col-sm-12">
            <li className="nav-item col-sm-10">
              <a className="nav-link" href="#">
                <img src={LOGO} alt="logo" />
              </a>
            </li>
            <li className="nav-item col-sm-2 m-auto ">
              <button className="btn btn-light addBtn" onClick={()=>{handleShow();setFormval({
    Title: "",
    Description: ""

  });setViewData(false)}}>
                Add Task
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <ModalForm
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleDescChange={handleDescChange}
        formval={formval}
        viewData={viewData}
        setViewData={setViewData}
        setFormval={setFormval}
      />

    <TableData getData={getData} deleteFun={deleteFun} editFun={editFun} displayData={displayData}/>
   
      <div>
      <ToastContainer position="top-end">
   <Toast bg={toastMsg.variant}
    autohide  
    show={showToast}
    onClose={()=>setShowToast(false) } 
   className='text-white'>
   <ToastHeader>message</ToastHeader>
      <Toast.Body>{toastMsg.message}</Toast.Body>
    </Toast>
    </ToastContainer>
    </div>
    </>
  );
}
