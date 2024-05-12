import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 5.0rem;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "add"
    "content"
  ;
  main {
    margin: 0 auto;
    max-width: 113.4rem;
  }
`;

export const Add = styled.div`
  .box-add {
    grid-area: add;
    max-width: 113.7rem;
    margin: 4.7rem auto 3.7rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 3.2rem;
      font-weight: 400;
    }    
  }
`

export const Content = styled.div`
  .box-movie {
    height: 70.2rem;    
    overflow-y: scroll;
    padding-right: 2.5rem;
  }
`;
