import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const ContactoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Titulo = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0;
  outline: none;

  &:focus {
    border-color: #ff6f61;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0;
  outline: none;
  resize: none;

  &:focus {
    border-color: #ff6f61;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #e55c4e;
  }
`;

const StatusMessage = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
  color: #333;
`;

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .send(
        "service_kgrjjee",
        "template_ckkocqn",
        formData,
        "1xwErdOOlU7ACB7ox"
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setStatus("Mensaje enviado con éxito");
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <ContactoContainer>
      <Titulo>Contáctanos</Titulo>
      <Formulario onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico"
          required
        />
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
          rows="6"
          required
        />
        <Button type="submit">Enviar mensaje</Button>
      </Formulario>
      {status && <StatusMessage>{status}</StatusMessage>}
    </ContactoContainer>
  );
};

export default Contacto;
