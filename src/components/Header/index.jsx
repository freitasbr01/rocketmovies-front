import { Container, Profile, Logout } from './styles';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar-pink.svg';
import { api } from '../../services/api';

export function Header({ children }) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }


  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <div className="box-header">
        <h1>RocketMovies</h1>
        {children} 
        
        <div className="box-profile">
          <div className="name-logout">    
            <strong>{user.name}</strong>
            <Logout onClick={handleSignOut}>sair</Logout>
          </div>

          <Profile to="/profile" >
            <img src={avatarUrl} alt={user.name} />
          </Profile>
        </div>

      </div>
    </Container>
  )
}