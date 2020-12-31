import React from 'react';

import Header from '../../components/Header';
import { Container, Imagens } from './styles';

import nodeJsImg from '../../assets/nodejs.png';
import reactImg from '../../assets/react.png';
import typescriptImg from '../../assets/typescript.webp';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Olá, eu sou Olavo Licursi :)</h1>
        <p>Desenvolvedor de Sites e Aplicativos</p>
        <p>Desenvolvedor FullStack</p>
        <Imagens>
          <img src={nodeJsImg} alt="NodeJs" />
          <img src={reactImg} alt="react" />
          <img src={typescriptImg} alt="typescript" />
        </Imagens>
      </Container>
    </>
  );
};

export default Dashboard;
