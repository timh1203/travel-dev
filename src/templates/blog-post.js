import React from 'react'
import { Div, H1, H2, H3, Img, A, P } from '../assets/Matrix'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Div modifiers={['tLeft']}>
      <Div modifiers={['tCenter']}>
        <H1>{post.frontmatter.title}</H1>
        <H2>By: {post.frontmatter.author}</H2>
        <H3>{post.frontmatter.date}</H3>
        <P>Tags: {post.frontmatter.tags}</P>
        <A href="https://medium.com/@timh1203"><P>@Medium</P></A>
      </Div>

      <A href="https://unsplash.com/">
        <Img
          modifiers={['w50', 'dBlock', 'm0A']}
          src={post.frontmatter.image}
          title={`Photo by ${post.frontmatter.photoAuthor}`}
          alt={`Book Photo by ${post.frontmatter.photoAuthor}`}
        />
      </A>

      <Div modifiers={['fLarge']} dangerouslySetInnerHTML={{ __html: post.html }} />
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
        photoAuthor
      }
    }
  }
`
