import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

import logoImg from '../../assets/meu_logo.png';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <img src={logoImg} alt="Olavo Licursi" />
        <div>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/portifolio">Portifólio</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </Container>
    </>
  );
};

export default Header;
