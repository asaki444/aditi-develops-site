import React from 'react';
import * as emailjs from 'emailjs-com';


export default class contactMe extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
       name: '',
       email: '',
       message: ''
    }
  }
  
  handleFormSubmit = ( event ) => {
    event.preventDefault();
    const { name, email, subject, message } = this.state;

    let templateParams = {
        from_name: email,
        to_name: '<YOUR_EMAIL_ID>',
        subject: subject,
        message_html: message,
       }
       emailjs.send(
        'gmail',
        'portfoliositeform',
         templateParams,
        'user_0fj6hOlXvTDeFMVBggTkO'
       )
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render (){

    return (
     
        <>

<form onSubmit={this.handleSubmit}>

<label> Name</label>

<input type="text"id="fname"name="firstname"  onChange={this.handleChange} placeholder="Your name.."/>

<label>Email</label>

<input type="email"id="email"name="email"placeholder="Your email"  onChange={this.handleChange}  />


<label>Subject</label>

<textarea id="subject"name="subject"placeholder="Write something.."   onChange={this.handleChange}  ></textarea>

<input type="submit"value="Submit"/>

</form>
        </>
  
        )
    }
  
  }