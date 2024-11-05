import React from "react";
import TreatmentCard from "../components/TreatmentCard";
import styled from "styled-components";
import limpiezaImage from "../img/limpieza.jpg";
import dermapenimage from "../img/depamen.jpg";
import dermaplaningimage from "../img/dermaplaning.jpg";
import peelingimage from "../img/peeling.jpg";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 2rem;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const Tratamientos = () => {
  const tratamientos = [
    {
      title: "Limpieza Profunda",
      image: limpiezaImage,
      description:
        "Una limpieza profunda para eliminar impurezas y renovar tu piel.",
    },
    {
      title: "Peeling",
      image: peelingimage,
      description:
        "Tratamiento exfoliante para mejorar la textura y luminosidad de tu piel.",
    },
    {
      title: "Dermaplaning",
      image: dermaplaningimage,
      description:
        "Eliminación de células muertas y vello facial para un rostro suave y radiante.",
    },
    {
      title: "Dermapen",
      image: dermapenimage,
      description:
        "Microagujas para estimular la producción de colágeno y rejuvenecer la piel.",
    },
  ];

  return (
    <div>
      <Title>Tratamientos</Title>
      <CardsContainer>
        {tratamientos.map((tratamiento, index) => (
          <TreatmentCard
            key={index}
            title={tratamiento.title}
            image={tratamiento.image}
            description={tratamiento.description}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

export default Tratamientos;
