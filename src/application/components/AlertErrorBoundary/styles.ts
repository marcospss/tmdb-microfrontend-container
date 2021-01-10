import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background: #ff000045;
`;

export const Message = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  background: #fff;
  padding: 2rem 4rem;
  border-radius: 4rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
