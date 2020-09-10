import React, { useState, useEffect } from "react"
import { Navbar, Nav, Form, Button, Modal } from "react-bootstrap"
import "./navbar.scss"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
import useFirebase from "../../utils/useFirebase"
import { getCredentials, setCredentials } from "../../services/storageService"
import anime from "animejs/lib/anime.es.js"

function NavbarComponent() {
  const firebase = useFirebase()
  useEffect(() => {
    const textWrapper = document.querySelector(".ml2")
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".ml2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      })
  }, [])
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
        navigate("/admin/dashboard")
      })
      .catch(error => {
        console.log("error", error)
      })
  }
  return (
    <Navbar className="edurite-navbar" expand="md">
      <Navbar.Brand className="ml2" href="/">
        Edurite
      </Navbar.Brand>
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
      <Modal className="login-modal" show={showPopup} onHide={handleClose}>
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
                required: {
                  value: true,
                  message: "email is mandatory",
                },
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
          <Button
            className="login-cancel-btn"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="login-btn"
            variant="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  )
}

export default NavbarComponent
