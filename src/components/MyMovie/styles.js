import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => `rgba(255, 192, 203, 0.05)`};
  border-radius: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    font-size: 2.4rem;
    padding-bottom: 0.8rem;    
  }

  > p {    
    font-family: "Roboto", serif;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;    
  }
`;