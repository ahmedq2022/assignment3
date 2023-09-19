import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import './Contact.css';

export default function ContactPage() {
  return (
    <div class="content">
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '400px' }}>
      <h2 className="contact-heading">Contact Us</h2>

      {/* Name */}
      <div className="item">
        <label className="label">
          Name<span className="colon">:</span>
        </label>
        <MDBInput label='' v-model='name' wrapperClass='mb-4' />
      </div>

      {/* Email address */}
      <div className="item">
        <label className="label">
          Email address<span className="colon">:</span>
        </label>
        <MDBInput type='email' label='' v-model='email' wrapperClass='mb-4' />
      </div>

      {/* Subject */}
      <div className="item">
        <label className="label">
        Contact No<span className="colon">:</span>
        </label>
        <MDBInput label='' v-model='subject' wrapperClass='mb-4' />
      </div>

      {/* Message */}
      <div className="item">
        <label className="label">
          Description<span className="colon">:</span>
        </label>
        <MDBTextArea className="message" label='' />
      </div>

      {/* Send me a copy */}
      <div className="item">
        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me a copy' />
      </div>

      {/* Submit button */}
      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
  );
}
