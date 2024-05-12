import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .box-header {
    max-width: 113.7rem;
    height: 10.5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 6rem;
    }

    .box-profile {
      display: flex;
      align-items: center;
      gap: 1rem;

      .name-logout {
        margin: 0 1rem 0 6rem;
        display: flex;
        flex-direction: column;
        align-items: end;
        white-space: nowrap;

        strong {
          font-size: 1.4rem;
          color: ${({ theme }) => theme.COLORS.GRAY_900};
        }
      }
    }
  }
`;

export const Profile = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.COLORS.GRAY_900};


  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    border: 1px solid #3b3b3b;
  }
`;

export const Logout = styled.button`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: none;
  background: none;
`