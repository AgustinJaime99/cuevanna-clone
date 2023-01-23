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
  background-color: var(--secondaryColor2);
  margin-top: auto;
  p {
    color: var(--primaryColor2);
  }
`