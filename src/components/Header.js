import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const BrandText = styled.h1`
  font-size: 1.8rem;
  margin-left: 10px;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #ff6f61;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #ff6f61;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  width: 30px;

  div {
    width: 30px;
    height: 4px;
    background-color: white;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #333;
  width: 100%;
  text-align: center;
  padding: 1rem 0;

  a {
    display: block;
    color: white;
    text-decoration: none;
    margin: 0.5rem 0;

    &:hover {
      color: #ff6f61;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <HeaderWrapper>
      <Nav>
        <Brand>
          <BrandText>JmStudio</BrandText>
        </Brand>
        <NavLinks>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/tratamientos">Tratamientos</NavLink>
          <NavLink to="/productos">Laboratorios</NavLink>
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/agendar-turno">Agendar Turno</NavLink>
        </NavLinks>
        <Hamburger onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
      </Nav>
      {isMobileMenuOpen && (
        <MobileMenu>
          <NavLink to="/" onClick={handleLinkClick}>
            Inicio
          </NavLink>
          <NavLink to="/tratamientos" onClick={handleLinkClick}>
            Tratamientos
          </NavLink>
          <NavLink to="/productos" onClick={handleLinkClick}>
            Laboratorios
          </NavLink>
          <NavLink to="/sobre-mi" onClick={handleLinkClick}>
            Sobre mí
          </NavLink>
          <NavLink to="/agendar-turno" onClick={handleLinkClick}>
            Agendar Turno
          </NavLink>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
