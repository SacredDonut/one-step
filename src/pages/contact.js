import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({data}) => (
  <Layout>
    <div>
      <h1>Suggestions?</h1>
      <form 
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input 
          name="name"
          placeholder="your name"
          type="text" 
        />
        <button>Send</button>
      </form>
    </div>
  </Layout>

)



