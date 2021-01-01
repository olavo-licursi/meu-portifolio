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
    background: #e8e8e8;
    border-radius: 10px;
    border: 3px solid #232129;
    border-color: #00008b;
    padding: 15px;

    a {
      color: #1c1c1c;
      padding: 10px;
      padding-right: 20px;
      border-radius: 10px;
      border-right: 3px solid;
      border-color: #00008b;
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
