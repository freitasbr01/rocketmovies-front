// O BrowserRouter é um componente do pacote react-router-dom que é usado para lidar com o roteamento em aplicações React que são de página única (Single Page Applications - SPAs). Ele usa a API History do HTML5 para manter a UI sincronizada com a URL no navegador e vice-versa. Isso significa que quando você navega para diferentes “páginas” na sua aplicação SPA, a URL na barra de endereços do navegador muda para refletir a “página” atual, mesmo que tecnicamente toda a aplicação esteja sendo executada em uma única página HTML.
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';


export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
    {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}