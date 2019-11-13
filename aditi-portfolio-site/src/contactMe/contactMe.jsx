import React from 'react';
import './contactMe.scss';
import emailjs from 'emailjs-com';

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      subject: ''
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {name, email, subject, message} = this.state;

    let templateParams = {
      name,
      email,
      subject,
      message
    }
    
    emailjs
      .sendForm('gmail', 'portfoliositeform', event.target, 'user_0fj6hOlXvTDeFMVBggTkO', templateParams)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formValid = ()=>{
    const {name, email, subject, message} = this.state;
    return name !== "" && email !== "" && subject !== "" && message !== "";
  }

  render() {
    const {name, email, subject, message} = this.state;
    return (

      <div id="contact-form-section">
        <div className="contact-form-title">
          Contact Me:
        </div>
        <form onSubmit={this.handleSubmit && this.formValid}>

          <label>
            Name:</label>

          <input
            type="text"
            id="fname"
            name="name"
            onChange={this.handleChange}
            value={name}
            placeholder="Your name.."/>

          <label>Email:</label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Your email"
            onChange={this.handleChange}/>

          <label>Subject:</label>

          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            onChange={this.handleChange}
            value={subject}/>
<label>Message:</label>
          <textarea ></textarea>

          <button type="submit" id="submit" value="Submit"> Submit </button>

        </form>
      </div>

    )
  }

}