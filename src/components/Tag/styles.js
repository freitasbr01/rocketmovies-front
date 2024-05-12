import styled from 'styled-components';

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  margin-right: 0.8rem;

  color: ${({ theme }) => theme.COLORS.GRAY_600};
  background: ${({ theme }) => theme.COLORS.GRAY_400};

`;