import React from 'react'
import styled from 'styled-components'
import { Div, H1, H2, H3, A, P } from '../assets/Matrix'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Div modifiers={['tLeft']}>
      <A href={post.frontmatter.link}>
        <Img1
          modifiers={['w50', 'dBlock', 'm0A']}
          src={post.frontmatter.image}
          title={`Photo by ${post.frontmatter.photoAuthor}`}
          alt={`Photo by ${post.frontmatter.photoAuthor}`}
        />
      </A>

      <Div modifiers={['tCenter']}>
        <H11>{post.frontmatter.title}</H11>
        <H2>By: <A href="https://medium.com/@timh1203">{post.frontmatter.author}</A></H2>
        <H3>{post.frontmatter.date}</H3>
        <P>Tags: {post.frontmatter.tags}</P>
        {/* <A href="https://medium.com/@timh1203"><P>@Medium</P></A> */}
      </Div>

      <Div1 modifiers={['fLarge']} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Div>
  )
}

const Img1 = styled.img`
  width: 560px;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`

const Div1 = styled(Div)`
  width: 90%;
  margin: 0 auto;
  line-height: 2rem;
  img {
    display: block;
    width: 50%;
    margin: 0 auto;
  }

  .figcaption_hack {
    font-style: italic;
    font-size: 1rem;
    display: block;
    text-align: center;
  }
`

const H11 = styled(H1)`
  @media (max-width: 376px) {
    font-size: 1.6rem;
  }
`

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: { eq: $path } }){
      html
      frontmatter {
        path
        title
        author
        date
        link
        image
        tags
        photoAuthor
      }
    }
  }
`
