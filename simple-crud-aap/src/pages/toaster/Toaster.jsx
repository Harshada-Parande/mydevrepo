import React, { useState } from 'react'
import { ToastHeader } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer';

export default function Toaster() {

  const [showToast,setShowToast]=useState(true)
  const [toastMsg,setToastMsg]=useState({
    message:"",
    variant:""
  })
  
  return (
    <div>
    <ToastContainer position="top-end" >
   <Toast bg={toastMsg.variant}
    delay={2000}
    autohide
    show={showToast}
    onClose={()=>setShowToast(false)} 
   className='text-white'>
   <ToastHeader>message</ToastHeader>
      <Toast.Body>{toastMsg.message}</Toast.Body>
    </Toast>
    </ToastContainer>
    </div>
  )
}
