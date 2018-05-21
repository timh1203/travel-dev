import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Section from '../components/common/Section'
import Div from '../components/common/Div'
import H3 from '../components/common/H3'
import P from '../components/common/P'

const BlogPage = ({data}) => (
  <Section>
    <P>Latest Posts</P>
    {data.allMarkdownRemark.edges.map(post => (
      <Div key={post.node.id}>
        <H3>{post.node.frontmatter.title}</H3>
        <P>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</P>
        <br />
        <br />
        <Link to={post.node.frontmatter.pasth}>Read More...</Link>
        <br />
        <br />
        <hr />
      </Div>
    ))}
  </Section>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
