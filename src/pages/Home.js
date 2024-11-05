import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-top: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const MapContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  iframe {
    width: 100%;
    height: 400px;
    border: 0;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Bienvenido a JmStudio</Title>
      <Description>
        Descubre todos nuestros tratamientos y productos para cuidar tu piel.
        ¡Tu bienestar es nuestra prioridad!
      </Description>

      <MapContainer>
        <iframe
          src="https://maps.google.com/maps?q=Buenos+Aires+160,+Salta,+Argentina&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="Mapa JmStudio"
          allowFullScreen
        ></iframe>
      </MapContainer>
    </HomeContainer>
  );
};

export default Home;
