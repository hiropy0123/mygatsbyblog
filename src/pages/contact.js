import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Contact Form</h1>
    <p>メールフォーム送信テスト</p>
    <form name="contactform" action="thanks" netlify>
      <table>
        <tbody>
          <tr classList="form-group">
            <th><label htmlfor="name">お名前<abbr title="required">*</abbr></label></th>
            <td><input type="text" class="form-control" id="name" name="お名前" placeholder="お名前" maxlength="30" minlength="2" required autocomplete="name" /></td>
          </tr>
          <tr classList="form-group">
            <th><label htmlfor="email">メールアドレス<abbr title="required">*</abbr></label></th>
            <td><input type="email" class="form-control" id="email" name="メールアドレス" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" /></td>
          </tr>
          <tr classList="form-group">
            <th><label htmlfor="contact">お問い合わせ内容<abbr title="required">*</abbr></label></th>
            <td><textarea class="form-control" id="contact" name="お問い合わせ内容" rows="8" required></textarea></td>
          </tr>
        </tbody>
      </table>
      <div classList="form-group">
        <input type="submit" class="submit" value="送信する" />
      </div>
    </form>
    <Link to="/">home</Link>
  </Layout>
)

export default ContactPage
