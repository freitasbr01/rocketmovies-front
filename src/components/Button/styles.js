import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1.6rem;

  background-color: ${({ theme, $trash }) => $trash ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  color: ${({ theme, $trash }) => $trash ? theme.COLORS.PINK : theme.COLORS.GRAY_400};

  border: none;
  border-radius: 1rem;

  font-size: 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;