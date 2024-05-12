// Rotas de autenticação, vai dar acesso as páginas quando o usuário não está logado.

import { Routes, Route, Navigate } from 'react-router-dom';
// Routes - vai envolver todas as minhas rotas.
// Route - para cada rota eu digo qual é o endereço, em barra eu quero renderizar o elemento minha Home.

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketmovies:user");

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {!user && <Route path="*" element={<Navigate to="/" />} /> }

    </Routes>
  )
}