import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.GRAY_500};

  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.GRAY_500}` : "none"};

  border-radius: 1rem;
  padding-right: 1.6rem;
  outline: none;

  > button {
    border: none;
    background: none;
    
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    font-family: "Roboto", serif;

    width: 100%;
    height: 5.6rem;

    /* padding-left: 1.2rem; */
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    border: none;
    background: transparent;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }


`;