import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addMovie } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function ModalMovieCreate() {
  const [form, setForm] = useState({
    title: "",
    year: "",
  });
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function formHandler(event) {
    const { name, value } = event.target;
    console.log(event.target, "<<< target");
    // console.log(name, "<<< name");
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit() {
    try {
      const payload = form;
      console.log(payload, "<<< payload");
      await dispatch(addMovie(payload));
      handleClose();
    } catch (error) {
      // console.log(error?.message, "<<< error");
      toast.error(error?.message || "Internal Server Error");
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {JSON.stringify(form)} */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => formHandler(event)}
                name={"title"}
                value={form.title}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                onChange={formHandler}
                name={"year"}
                value={form.year}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default ModalMovieCreate;
