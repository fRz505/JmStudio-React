import React from "react";
import styled from "styled-components";
import pouImg from "../img/pandi.jpg";

const SobreMiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 80px;
  background-color: #f9f9f9;
  padding-bottom: 2rem;
  flex-direction: column;

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
    flex-direction: row;
  }
`;

const ContenedorFoto = styled.div`
  flex: 1;
  max-width: 300px;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    max-width: 80%;
  }
`;

const Foto = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const SobreMiText = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const TituloSeccion = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Nombre = styled.h2`
  font-size: 2.5rem;
  color: #333;

  span {
    color: #ff6f61;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Profesion = styled.h3`
  font-size: 1.8rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Descripcion = styled.p`
  font-size: 1.2rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SobreMi = () => {
  return (
    <SobreMiContainer>
      <ContenedorFoto>
        <Foto src={pouImg} alt="Foto de Joaquin Marquillas" />
      </ContenedorFoto>
      <SobreMiText>
        <TituloSeccion>Sobre Mi</TituloSeccion>
        <Nombre>
          Hola, soy <span>Joaquin Marquillas</span>
        </Nombre>
        <Profesion>Cosmetólogo</Profesion>
        <Descripcion>Profesional de la estética & eyebrow artist</Descripcion>
      </SobreMiText>
    </SobreMiContainer>
  );
};

export default SobreMi;
