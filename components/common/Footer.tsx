import styled from "styled-components"

export const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Ver y descargar Películas y Series en Latino, Español, Subtitulado e ingles, los últimos estrenos en la mejor calidad HD sin cortes. Cuevana Online.
      </p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(to bottom,rgba(20,26,50,0) 0,rgba(20,26,50,.01) 1%,#141a32 100%);
  margin-top: auto;
  width: 100%;
  p {
    color: var(--primaryColor2);
  }
`