import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class EmailCheck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      bool: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //Update the new value for new input.
  changeEmail = e => {
    this.setState({
      email: e.target.value
    })
    //Checking new value.
    const thisEmail = this.state.email
    console.log(thisEmail)
  }

  handleSubmit() {
    const Email = this.state.email
    console.log(Email)

    //Axios API.
    axios
      .get(`https://www.disify.com/api/email/${Email}`)
      //To respond the response data (Element's data) that is from backend.
      .then(res => {
        console.log(res)
        this.setState({
          bool: res.data.format
        })
        console.log(res.data)
      })
  }

  render() {
    const { bool } = this.state
    let correct = (
      <span style={{ color: 'green' }}>This is a correct email!</span>
    )
    let in_correct = (
      <span style={{ color: 'red' }}>
        {' '}
        Please enter a correct email! Thank you!
      </span>
    )
    return (
      <div className="Form_input">
        <div>
          <div>
            <Form.Group className="mb-3" controlId="formInputs">
              <Form.Label>Email Check</Form.Label>
              <div>
                <Form.Control
                  placeholder="Email Check"
                  type="text"
                  value={this.state.email}
                  onChange={e => this.changeEmail(e)}
                />
              </div>
            </Form.Group>
          </div>

          {bool ? correct : in_correct}

          <div>
            <button variant="primary" onClick={this.handleSubmit}>
              <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>{' '}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EmailCheck
