import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  

  > header {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.PINK + '0D'};

    .box-header {
      padding: 0 1.0rem;
      max-width: 113.7rem;
      height: 14.4rem;
      margin: 0 auto;
      display: flex;
    }
  }
`;

export const Form = styled.form`
  max-width: 36.0rem;
  margin: 0 auto;
  padding: 0 2.0rem;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > div:nth-child(5) {
    margin-bottom: 2.4rem;
  }

`;

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;

  position: relative;
  margin: -9.0rem auto 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    border: 1px solid #3b3b3b;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    input {
      display: none;
    }

    svg {
    width: 2.0rem;
    height: 2.0rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
}
`;

