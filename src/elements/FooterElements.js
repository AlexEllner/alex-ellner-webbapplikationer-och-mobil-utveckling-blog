import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: flex-start;
  text-align: flex-start;

  p {
    text-align: flex-start;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 50%;
  margin-bottom: 2rem;

  img {
    height: 22px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`
