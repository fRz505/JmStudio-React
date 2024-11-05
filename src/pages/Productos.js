import React from "react";
import styled from "styled-components";
import idraetImg from "../img/idraet.png";
import exelImg from "../img/images.png";
import lidhermaImg from "../img/lidherma.jpg";

const ProductosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding-top: 15px;
  background-color: #f9f9f9;
  padding-bottom: 2rem; /* Añadido espacio inferior */
`;

const TituloProducto = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Titulo = styled.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajustar tamaño de fuente en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Ajustar aún más en pantallas más pequeñas */
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px; /* Limitar el ancho máximo */
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 280px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 2rem; /* Añadido margen inferior para separar las tarjetas */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 250px; /* Ajustar tamaño de las tarjetas en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    width: 200px; /* Reducir tamaño aún más en móviles */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #f1f1f1;

  @media (max-width: 768px) {
    height: 180px; /* Ajustar altura de las imágenes en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    height: 150px; /* Reducir aún más la altura en móviles */
  }
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h5`
  font-size: 2rem;
  margin-top: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Ajustar tamaño del título en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 1.6rem; /* Reducir aún más en pantallas móviles */
  }
`;

const Productos = () => {
  return (
    <ProductosContainer>
      <TituloProducto>
        <Titulo>Trabajamos con estos laboratorios:</Titulo>
      </TituloProducto>
      <CardContainer>
        <Card>
          <CardImage src={lidhermaImg} alt="Lidherma" />
          <CardBody>
            <CardTitle>Lidherma</CardTitle>
          </CardBody>
        </Card>

        <Card>
          <CardImage src={exelImg} alt="Exel" />
          <CardBody>
            <CardTitle>Exel</CardTitle>
          </CardBody>
        </Card>

        <Card>
          <CardImage src={idraetImg} alt="Idraet" />
          <CardBody>
            <CardTitle>Idraet</CardTitle>
          </CardBody>
        </Card>
      </CardContainer>
    </ProductosContainer>
  );
};

export default Productos;
