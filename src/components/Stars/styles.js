import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: ${({ big }) => big ? '2.0rem' : '1.2rem'};
`;



