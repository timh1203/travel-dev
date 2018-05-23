export const Modifiers = {
  // Display
  displayFlex: () => `
    display: flex;
  `,
  displayInline: () => `
    display: inline;
  `,
  displayBlock: () => `
    display: block;
  `,
  displayNone: () => `
    display: none;
  `,
  visibilityHidden: () =>  `
    visibility:hidden;
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
  justifyBetween: () => `
    justify-content: space-between;
  `,
  justifyAround: () => `
    justify-content: space-around;
  `,
  alignCenter: () => `
    align-content: center;
  `,
  itemsCenter: () => `
    align-items: center;
  `,
  flex1: () => `
    flex: 1;
  `,
  flexTriple: () => `
    flex: 1 1 100%;
  `,

  // Box Model
  p1: () => `
    padding: 1rem;
  `,
  my3Auto: () => `
    margin: 3rem auto;
  `,
  my6: () => `
    margin: 6rem 0;
  `,
  bLR: () => `
    border-left: 1px solid gray;
    border-right: 1px solid gray;
  `,
  
  // Alignment
  textCenter: () => `
    text-align: center;
  `,
  textLeft: () => `
    text-align: left;
  `,
  m0Auto: () => `
    margin: 0 auto;
  `,
  textMiddle: () => `
    vertical-align: middle;
  `,
  textTop: () => `
    vertical-align: top;
  `,
  
  // Length
  w25: () => `
    width: 25%;
  `,
  w50: () => `
    width: 50%;
  `,
  w75: () => `
    width: 75%;
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
  mh50: () => `
    max-height: 50%;
  `,
  mh300px: () => `
    max-height: 300px;
  `,

  // Color
  colorWhite: () => `
    color: white;
  `,
  backgroundGray: () => `
    background: #333333;
  `,

  // Font
  fontSmall: () => `
    font-size: 0.9rem;
  `,
  fontLarge: () => `
    font-size: 1.2rem;
  `,
  fontLarger: () => `
    font-size: 1.5rem;
  `,
  fontLargest: () => `
    font-size: 1.8rem;
  `,
  underline: () => `
    text-decoration: underline;
  `,
  bold: () => `
    font-weight: bold;
  `,

  // Misc
  listStyleNone: () => `
    list-style: none;
  `,
}