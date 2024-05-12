import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  resize: none;

  border-radius: 1.0rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};

  }
`;