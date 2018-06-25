import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Wrapper, Div, Hr, H1, H3, P } from '../assets/Matrix'

const BlogPage = ({ data }) => (
  <Wrapper>
    <H1 modifiers={['my3']}>Blog</H1>
    {data.allMarkdownRemark.edges.map(post => (
      <Div key={post.node.id}>
        <Link to={post.node.frontmatter.path}>
          <Img1
            modifiers={['w50', 'frame']}
            src={post.node.frontmatter.image}
            title="Photo by Alex Read"
            alt="Book Photo by Alex Read"
          />
        </Link>
        <H3>{post.node.frontmatter.title}</H3>
        <P>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</P>
        <P>Tags: {post.node.frontmatter.tags}</P>
        <Link to={post.node.frontmatter.path}>Read More...</Link>
        <Hr />
      </Div>
    )).reverse()}
  </Wrapper>
)

const Img1 = styled.img`
  width: 560px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`

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
            image
            tags
          }
        }
      }
    }
  }
`

export default BlogPage
