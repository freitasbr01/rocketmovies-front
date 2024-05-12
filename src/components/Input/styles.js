import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  margin-bottom: 0.8rem;
  border-radius: 1.0rem;

  > input {
    font-family: "Roboto", sans-serif;

    height: 5.5rem;

    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-family: "Roboto", sans-serif;
    } 
  }

  > svg {
    margin-left: 1.6rem;
  }
`;