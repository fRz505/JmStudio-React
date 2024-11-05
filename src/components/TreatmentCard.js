import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 280px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px); /* Elevación de la card al hacer hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h3`
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
`;

const TreatmentCard = ({ title, image, description }) => {
  return (
    <CardWrapper>
      <CardImage src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </CardWrapper>
  );
};

export default TreatmentCard;
