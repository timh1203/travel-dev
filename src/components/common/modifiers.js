export const modifiers = {
  // flexbox
  displayFlex: () => `
    display: flex;
  `,
  flexColumn: () => `
    flex-direction: column;
  `,
  flexWrap: () => `
    flex-wrap: wrap;
  `,
  justifyCenter: () => `
    justify-content: center;
  `,
  justifyAround: () => `
    justify-content: space-around;
  `,
  flex1: () => `
    flex: 1;
  `,
  flexTriple: () => `
    flex: 1 1 100%;
  `,

  // box
  p1: () => `
    padding: 1rem;
  `,
  
  // alignment
  textCenter: () => `
    text-align: center;
  `,
  
  // length
  w25: () => `
    width: 25%;
  `,
  w50: () => `
    width: 50%;
  `,
  w100: () => `
    width: 100%;
  `,
  h25: () => `
    height: 25%;
  `,
  h50: () => `
    height: 50%;
  `,
  h75: () => `
    height: 75%;
  `,

  // colors
  colorWhite: () => `
    color: white;
  `,
  backgroundGray: () => `
    background: #333333;
  `,

  // font
  fontLarge: () => `
    font-size: 1.2rem;
  `,
  fontLarger: () => `
    font-size: 1.5rem;
  `,
  underline: () => `
    text-decoration: underline;
  `,
  bold: () => `
    font-weight: bold;
  `,

  // miscellaneous
  listStyleNone: () => `
    list-style: none;
  `,
}