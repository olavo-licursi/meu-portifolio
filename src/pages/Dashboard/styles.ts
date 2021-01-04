import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 200px;

  h1 {
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 60px;
    font-weight: bold;
    color: #1c1c1c;
    white-space: nowrap;
    overflow: hidden;
    animation: blinkCursor 500ms steps(40) infinite normal,
      typing 3s steps(20) 1s normal both;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 12em;
    }
  }

  @keyframes blinkCursor {
    from {
      border-right-color: #1c1c1c;
    }
    to {
      border-right-color: transparent;
    }
  }

  p {
    font-size: 40px;
    color: #696969;
    font-weight: bold;
  }
`;

export const Imagens = styled.div`
  display: flex;
  img {
    max-width: 150px;
    max-height: 100px;
    width: auto;
    height: auto;
  }
`;
