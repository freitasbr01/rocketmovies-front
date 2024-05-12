import styled from 'styled-components';

export const Container = styled.section`
  ::-webkit-scrollbar {
    width: 0.8rem;
  } 

  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
    border: 0.3rem solid transparent;
  }
`;