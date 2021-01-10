import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #010101;
  margin-bottom: 2rem;
  color: #fff;
  padding: 1.2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  flex-flow: column;
  margin-right: 2rem;
`;

export const Title = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SubTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;
