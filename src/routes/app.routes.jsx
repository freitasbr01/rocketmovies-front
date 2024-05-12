// Rotas da aplicação, vai dar acesso as telas após o login.

import { Routes, Route, Navigate } from 'react-router-dom';
// Routes - vai envolver todas as minhas rotas.
// Route - para cada rota eu digo qual é o endereço, em barra eu quero renderizar o elemento minha Home.

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  )
}