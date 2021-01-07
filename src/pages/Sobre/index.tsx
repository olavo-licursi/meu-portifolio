/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import Header from '../../components/Header';
import { Container, Imagem, OutContainer } from './styles';
import minhaFoto from '../../assets/eu2.jpg';

const Sobre: React.FC = () => {
  return (
    <>
      <Header />
      <OutContainer>
        <Container>
          <h1>Sobre</h1>
          <h2>Olavo Licursi</h2>
          <p>
            Desde muito cedo apaixonado por tecnologia, entusiasta da
            programação e segurança da informação!
          </p>
          <p>
            Ingressou na faculdade de Ciência da Computação em 2017 aos 18 anos.
            Seu primeiro estágio foi na
            <a href="https://www.camaramontealto.sp.gov.br/">
              {' '}
              Câmara Municipal de Monte Alto{' '}
            </a>
            em 2017 como Monitor de Laboratório de informática. Em 2018 entrou
            na
            <a href="http://www.smarapd.com.br/"> SMARAPD </a>
            para trabalhar como Analista de Suporte, qual saiu com grande
            habilidade em suporte técnico, comunicação e trabalho em equipe.
            Atualmente busca novos desafios como desenvolvedor, trabalhando com
            projetos das mais diversas formas, como Websites, Aplicativos e
            Sistemas.
          </p>
          <p>Monte Alto - SP</p>
        </Container>
        <Imagem>
          <img src={minhaFoto} alt="Minha Foto" />
        </Imagem>
      </OutContainer>
    </>
  );
};

export default Sobre;
