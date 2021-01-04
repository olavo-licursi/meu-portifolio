import styled from 'styled-components';

export const OutContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 100px;
  max-width: 50%;
  width: auto;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #1c1c1c;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 40px;
    font-weight: bold;
    color: #1c1c1c;
  }

  p {
    font-size: 20px;
    color: #1c1c1c;
    font-weight: 600;
    margin-top: 20px;
    max-width: 100%;
    max-height: 50%;
  }

  a {
    text-decoration: none;
    color: green;
  }
`;

export const Imagem = styled.div`
  display: flex;
  margin-right: 300px;
  margin-top: 100px;

  img {
    max-width: 300px;
    max-height: 150px;
    width: auto;
    height: auto;

    border-radius: 90px;
    border: 10px solid;
    border-color: #6495ed;
    background-color: #aaa;
    max-height: 500px;
  }
`;
