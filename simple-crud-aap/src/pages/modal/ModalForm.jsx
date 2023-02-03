import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ModalForm({handleClose,handleSubmit,handleTitleChange,formval,handleDescChange,show,viewData,setViewData,setFormval})
{
    const [disable,setDisable]=useState(true)
    
    return(
        <>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {!viewData ? ( <form className="row mt-5" onSubmit={handleSubmit}>
            <div className="mb-3 w-50 mx-auto">
              <label for="exampleFormControlInput1" className="form-label">
                Title:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="enter title"
                onChange={handleTitleChange}
                value={formval.Title}
              />
              <label for="exampleFormControlInput2" className="form-label">
                Desciption:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="describe task"
                value={formval.Description}
                onChange={handleDescChange}
              />

              <button type="submit" className="btn btn-primary mt-3">
                submit
              </button>
            </div>
          </form>)
          :(<>
            <p>ID:{formval.id}</p>
            <p>Title:{formval.Title}</p>
            <p>Description:{formval.Description}</p>
            <p>status:{formval.status}</p>
            <button onClick={()=>{setViewData(false);handleClose();setFormval({
        Title: "",
        Description: "",
              })}}>ok</button>
          </>)}
         
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal> 

        </>
    )
}
export default ModalForm