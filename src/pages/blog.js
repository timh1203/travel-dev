import React from 'react'
import Link from 'gatsby-link'
import { Wrapper, Div, H1, H3, P, Img } from '../assets/Matrix'

const BlogPage = ({ data }) => (
  <Wrapper>
    <H1 modifiers={['my3']}>Blog</H1>
    {data.allMarkdownRemark.edges.map(post => (
      <Div key={post.node.id}>
        <Link to={post.node.frontmatter.path}>
          <Img
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
        <hr />
      </Div>
    )).reverse()}
  </Wrapper>
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
            image
            tags
          }
        }
      }
    }
  }
`

export default BlogPage
