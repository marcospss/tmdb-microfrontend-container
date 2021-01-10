import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  background-color: #010101;
  color: #fff;
  padding: 1.2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

export const Title = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0.5rem;
`;
