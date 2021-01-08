import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #1c1c1c;
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    font-size: 25px;
    color: #1c1c1c;
    margin-bottom: 10px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  p {
    font-size: 25px;
    font-weight: 500;
    color: #1c1c1c;
    margin-bottom: 10px;
  }
`;
