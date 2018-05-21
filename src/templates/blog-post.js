import React from 'react'
import Link from 'gatsby-link'
import { Div, H1, H2, H3, Img, A, P } from '../assets/Matrix'

export default function Template({data}) {
  const post = data.markdownRemark

  return(
    <Div modifiers={['textLeft']}>
      <Div modifiers={['textCenter']}>
        <H1>{post.frontmatter.title}</H1>
        <H2>By: {post.frontmatter.author}</H2>
        <H3>{post.frontmatter.date}</H3>
        <P>Tags: {post.frontmatter.tags}</P>
      </Div>

      <A href="https://unsplash.com/">
        <Img title="Book Photo by Alex Read" src={post.frontmatter.image} alt="Book Photo by Alex Read" 
        style={{width: '60%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
      </A>

      <Div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
        image
        tags
      }
    }
  }
`