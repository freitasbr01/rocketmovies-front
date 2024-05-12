import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";
  padding: 0 5.0rem;

  main {
    grid-area: content;
    overflow-y: scroll;
    max-width: 113.7rem;
    height: 58.1rem;
    margin: 4rem auto 0;
    padding-right: 1.5rem;
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_900};

  .back-delete {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .delete {
      background: none;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-weight: 400;
    }
  }

  .rate {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin: 2.4rem 0;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  .box-user {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 4.0rem;

    .user {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 1.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
      }
    }

    .clock {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        width: 1.6rem;
        margin-left: 2rem;
      }
    }
  }

  p {
    text-align: justify;
    margin-top: 4.0rem;
    max-width: 111.3rem;
  }
`;

