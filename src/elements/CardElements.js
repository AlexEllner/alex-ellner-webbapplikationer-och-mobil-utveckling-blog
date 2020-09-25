import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "header sidebar"
    "main sidebar";
  justify-items: flex-start;
  align-items: flex-start;
`
