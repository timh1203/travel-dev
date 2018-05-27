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
    flex: 1 1 25%;
  `,

  // Box Model
  p1: () => `
    padding: 1rem;
  `,
  py1: () => `
    padding: 1rem 0;
  `,
  pb2rem: () => `
    padding-bottom: 2rem;
  `,
  my3Auto: () => `
    margin: 3rem auto;
  `,
  my6: () => `
    margin: 6rem 0;
  `,
  mt2rem: () => `
    margin-top: 2rem;
  `,
  frame: () => `
    border: 1px solid black;
    box-shadow: 1px 3px 3px gray;
    border-radius: 10px;
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
  w90: () => `
    width: 90%;
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
  colorBlue: () => `
    color: #555bfb;
  `,
  backgroundGray: () => `
    background: #333333;
  `,
  backgroundBlue50: () => `
    background: rgb(85, 91, 251, 0.2);
  `,

  // Font
  fontSmall: () => `
    font-size: 0.8rem;
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
  italic: () => `
    font-style: italic;
  `,
  fontRaleway: () => `
    font-family: 'Raleway';
  `,
  fontAbril: () => `
    font-family: 'Abril Fatface';
  `,

  // Misc
  listStyleNone: () => `
    list-style: none;
  `,
  carouselPopup: () => `
  transition: ease all 1s;

  &:hover {
    transform: scale(1.05);
  }
  `,
  rotateRight: () => `
  transition: ease all 0.5s;
  
  &:hover {
    transform: rotate(-10deg) scale(1.1);
    outline: none;
    border: none;
  }
  `,
}