import React, { useState } from "react"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap"
import "./navbar.scss"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
import useFirebase from "../../utils/useFirebase"
import { getCredentials, setCredentials } from "../../services/storageService"

function NavbarComponent() {
  const firebase = useFirebase()
  const [showPopup, setPopup] = useState(false)
  const handleClose = () => {
    setPopup(false)
  }

  const { register, errors, handleSubmit } = useForm({
    defaultValues: {
      email: getCredentials().email,
      password: getCredentials().password,
    },
  })
  const onSubmit = ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setCredentials({ email, password })
        console.log("resp", response)
        navigate("/admin")
      })
      .catch(error => {
        console.log("error", error)
      })
  }
  return (
    <Navbar className="edurite-navbar" expand="md">
      <Navbar.Brand href="/">Edurite</Navbar.Brand>
      <Navbar.Toggle
        className="white-toggle"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse className="flex-end" id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link>Services</Nav.Link>
          <Nav.Link>Link</Nav.Link>
          <Button onClick={() => setPopup(true)} className="login-button">
            Login
          </Button>
        </Nav>
      </Navbar.Collapse>
      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you Edurite Admin? Login to access the portal!
        </Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={register({
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Please enter valid email id",
                },
              })}
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="error-text">
              {errors.email && errors.email.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={register({
                required: { value: true, message: "Password is mandatory" },
              })}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Form.Text className="error-text">
              {errors.password && errors.password.message}
            </Form.Text>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  )
}

export default NavbarComponent
