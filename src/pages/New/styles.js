import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";
  padding: 0 5.0rem;

  main {
    grid-area: content;
    max-width: 113.7rem;
    height: 78.3rem;
    margin: 4.0rem auto 0;
    overflow-y: scroll;
    padding-right: 2.5rem;
  }
`;

export const Form = styled.form`
  h1 {
    font-size: 3.6rem;
    font-weight: 500;
    margin-top: 2.4rem;
  }

  .box-input {
    display: flex;
    align-items: center;
    gap: 4.0rem;
    margin: 4.0rem 0;
  }

  .markers {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.4rem;
    
    padding: 1.6rem;
    border-radius: 0.8rem;
    margin-bottom: 4.0rem;
  }

  .box-button {
    display: flex;
    align-items: center;
    gap: 4.0rem;
    margin-bottom: 20rem;
  }
`;

