import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Header from '../../components/Header';
import { Container } from './styles';

const Contato: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Contato</h1>
        <p>Envie uma mensagem</p>
        <a href="https://api.whatsapp.com/send/?phone=5516997799655&text&app_absent=0">
          <FiArrowRight />
          WhatsApp: (16) 99779-9655
        </a>
        <a href="https://www.linkedin.com/in/olavo-licursi-04753215b/">
          <FiArrowRight />
          Linkedin - Olavo Licursi
        </a>
        <p>
          <FiArrowRight />
          licursiolavo@gmail.com
        </p>
      </Container>
    </>
  );
};

export default Contato;
