import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  max-height: 150px;
  justify-content: space-between;

  div {
    height: 50px;
    margin-top: 50px;
    width: 620px;
    display: flex;
    align-items: center;
    background: black;
    border-radius: 0px;
    border-right: 0;
    border: 3px solid #232129;
    padding: 15px;

    a {
      color: white;
      padding: 10px;
      padding-right: 20px;
      font-weight: bold;
      font-size: 25px;
      text-decoration: none;
      transition: opacity 0.2s;

      & + a {
        margin-left: 10px;
      }

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
