export const Modifiers = {
  // Display
  dFlex: () => `
    display: flex;
  `,
  dGrid: () => `
    display: grid;
  `,
  dInline: () => `
    display: inline;
  `,
  dBlock: () => `
    display: block;
  `,
  dNone: () => `
    display: none;
  `,
  vHidden: () => `
    visibility:hidden;
  `,

  // CSS Grid
  gGTC2fr: () => `
    grid-template-column: 1fr 1fr;
  `,
  gGG1rem: () => `
    grid-gap: 1rem;
  `,

  // Flexbox
  fColumn: () => `
    flex-direction: column;
  `,
  fWrap: () => `
    flex-wrap: wrap;
  `,
  fjcCenter: () => `
    justify-content: center;
  `,
  fjcBetween: () => `
    justify-content: space-between;
  `,
  fjcAround: () => `
    justify-content: space-around;
  `,
  facCenter: () => `
    align-content: center;
  `,
  faiCenter: () => `
    align-items: center;
  `,
  f1: () => `
    flex: 1;
  `,
  f25: () => `
    flex: 1 1 25%;
  `,

  // Box Model
  p0: () => `
    padding: 0;
  `,
  p1: () => `
    padding: 1rem;
  `,
  py1: () => `
    padding: 1rem 0;
  `,
  py3: () => `
    padding: 3rem 0;
  `,
  m0: () => `
    margin: 0;
  `,
  m0A: () => `
    margin: 0 auto;
  `,
  my3A: () => `
    margin: 3rem auto;
  `,
  my6: () => `
    margin: 6rem 0;
  `,
  mt2R: () => `
    margin-top: 2rem;
  `,

  // Window
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
  h0: () => `
    height: 0;
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
  vh50: () => `
    height: 50vh;
  `,

  // Color
  cWhite: () => `
    color: white;
  `,
  cBlue: () => `
    color: #555bfb;
  `,
  bBlue20: () => `
    background: rgb(85, 91, 251, 0.2);
  `,

  // Font
  tDecNone: () => `
    text-decoration: none;
  `,
  tCenter: () => `
    text-align: center;
  `,
  tLeft: () => `
    text-align: left;
  `,
  fSmall: () => `
    font-size: 0.8rem;
  `,
  fLarge: () => `
    font-size: 1.2rem;
  `,
  fLarger: () => `
    font-size: 1.5rem;
  `,
  fLargest: () => `
    font-size: 1.8rem;
  `,
  ul: () => `
    text-decoration: underline;
  `,
  b: () => `
    font-weight: bold;
  `,
  i: () => `
    font-style: italic;
  `,

  // Misc
  lsNone: () => `
    list-style: none;
  `,
  frame: () => `
    border: 1px solid black;
    box-shadow: 1px 3px 3px gray;
    border-radius: 10px;
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
