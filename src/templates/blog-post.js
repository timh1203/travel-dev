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
        <A href={post.frontmatter.medium}><P>@Medium</P></A>
      </Div>

      <A href="https://unsplash.com/">
        <Img modifiers={['w50', 'displayBlock', 'm0Auto']}
        src={post.frontmatter.image}
        title="Book Photo by Alex Read"        
        alt="Book Photo by Alex Read" 
        />
      </A>

      <Div modifiers={['fontLarge']} dangerouslySetInnerHTML={{ __html: post.html }} />
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
        medium
      }
    }
  }
`