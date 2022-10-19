import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

    const [state, handleSubmit] = useForm("xwkzlwgn");
    if (state.succeeded) {
        return <h2 className='formThankYou'>Thank You for your submission! If you added a name you should see it within 24hrs!</h2>;
    }

  return (
    <div className='contactHeader'>
        <div className='contactHeaderDiv'>
        <h1>Contact</h1>
        </div>
        <div className='formDiv'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder='Email Address'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Add a name or give your feedback!'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className='formButton'>
          Submit
        </button>
        </form>
        </div>
    </div>
  )
}
