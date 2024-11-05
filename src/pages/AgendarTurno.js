import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const AgendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.8rem;
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

const AgendarTurno = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    day: "",
    hour: "",
  });

  const tratamientos = [
    { value: "Limpieza Profunda", label: "Limpieza Profunda" },
    { value: "Peeling", label: "Peeling" },
    { value: "Dermaplaning", label: "Dermaplaning" },
    { value: "Dermapen", label: "Dermapen" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      treatment: selectedOption.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.treatment ||
      !formData.day ||
      !formData.hour
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    const mensaje = `¡Hola! Quiero agendar un turno. \n\nNombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nTratamiento: ${formData.treatment}\nFecha: ${formData.day}\nHora: ${formData.hour}`;

    const enlaceWhatsApp = `https://wa.me/5493876181123?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(enlaceWhatsApp, "_blank");
  };

  return (
    <AgendarContainer>
      <Title>Agendar un Turno</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
        />
        <Select
          options={tratamientos}
          onChange={handleSelectChange}
          placeholder="Selecciona el tratamiento"
        />
        <Input
          type="date"
          name="day"
          value={formData.day}
          onChange={handleChange}
          placeholder="Selecciona el día"
        />
        <Input
          type="time"
          name="hour"
          value={formData.hour}
          onChange={handleChange}
          placeholder="Selecciona la hora"
        />
        <Button type="submit">Enviar a WhatsApp</Button>
      </Form>
    </AgendarContainer>
  );
};

export default AgendarTurno;
