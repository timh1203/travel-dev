import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.p``
const Title = styled.p``
const SubTitle = styled.h3``
const Body = styled.p``

const BlogPage = ({data}) => (
  <Container>
    <Title>Latest Posts</Title>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <SubTitle>{post.node.frontmatter.title}</SubTitle>
        <Body>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</Body>
        <br />
        <br />
        <Link to={post.node.frontmatter.pasth}>Read More...</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Container>
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
