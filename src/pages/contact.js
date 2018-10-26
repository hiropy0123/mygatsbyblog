import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Contact Form</h1>
    <p>メールフォーム送信テスト</p>
    <form 
      name="contactform" 
      method="POST" 
      data-netlify="true"
      data-netlify-honypot="bot-field"
    >
      <input type="hidden" name="contactform" value="contact" /> 
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>


      {/* <div classList="form-group">
        <label>お名前<abbr title="required">*</abbr>
        <input type="text" class="form-control" id="name" name="name" placeholder="お名前" maxlength="30" minlength="2" required autocomplete="name" />
        </label>
      </div>
      <div classList="form-group">
        <label>メールアドレス<abbr title="required">*</abbr>
        <input type="email" class="form-control" id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" />
        </label>
      </div>
      <div classList="form-group">
        <label>お問い合わせ内容<abbr title="required">*</abbr>
        <textarea class="form-control" id="contact" name="content" rows="8" required></textarea>
        </label>
      </div>

      <div classList="form-group">
      <button type="submit">Send</button>
      </div> */}
    </form>
    <Link to="/">home</Link>
  </Layout>
)

export default ContactPage
