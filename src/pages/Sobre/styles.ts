import styled from 'styled-components';

export const OutContainer = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 220px;
  max-width: 50%;
  width: auto;

  h1 {
    font-size: 55px;
    font-weight: bold;
    color: #1c1c1c;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 55px;
    font-weight: bold;
    color: #1c1c1c;
  }

  p {
    font-size: 28px;
    color: #1c1c1c;
    font-weight: 600;
    margin-top: 20px;
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
    max-height: 300px;
    width: auto;
    height: auto;

    border-radius: 90px;
    border: 10px solid;
    border-color: #6495ed;
    background-color: #aaa;
    max-height: 500px;
  }
`;
