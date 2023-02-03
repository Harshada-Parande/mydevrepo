import React from 'react'

export default function viewModal() {
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row mt-5" onSubmit={handleSubmit}>
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

               <label for="exampleFormControlInput3" className="form-label">
                ID:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder=""
                value={formval.id}
                disabled={false}
              />
               <label for="exampleFormControlInput4" className="form-label">
                Status:{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput4"
                placeholder=""
                value={formval.status}
              />
              <button type="submit" className="btn btn-primary mt-3">
                submit
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal> 

    </div>
  )
}
