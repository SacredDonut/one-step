import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
// import styles from './about.module.css'
import mountainLake from '../images/mountain-lake.jpeg'

// const User = props => (
//   <div className={styles.user}>
//     <img src={props.avatar} className={styles.avatar} alt=""/>
//     <div className={styles.description}>
//       <h2 className={styles.username}>{props.username}</h2>
//       <p className={styles.excerpt}>{props.excerpt}</p>
//     </div>
//   </div>
// )

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0, auto, 12px, auto;
`

const Avatar = styled.img`
  flex: 0 0  96px;
  width: 96;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.div`
  margin: 0 0 12px 0;
`

const Excerpt = styled.p`
  margin: 0;
`
const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)
const AboutPage = ({ data }) => (
  <Layout>
    <div>
      <h1>About Page</h1>
      <User
        username={data.site.siteMetadata.author}
        avatar={mountainLake}
        excerpt={data.site.siteMetadata.description}
      />
      <br />
      <Link to="/">Home</Link>
    </div>
  </Layout>
)

export const query = graphql`
 query {
    site{
      siteMetadata{
        description,
        author
      }
    }
  }
`

export default AboutPage;