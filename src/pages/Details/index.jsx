import { Container, Content } from './styles';

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { LiaTrashAlt } from "react-icons/lia";
import { GoArrowLeft } from "react-icons/go";
import { LuClock3 } from "react-icons/lu";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { ButtonText } from '../../components/ButtonText';
import { ScrollBar } from "../../components/ScrollBar";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

export function Details() {
  const [data, setData] = useState(null);

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a filme?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNotes();
  }, []);


  return (
    <Container>
      <Header />
      <ScrollBar>
        {
          data &&
          <main>
            <Content>
              <div className="back-delete">
                <ButtonText title="Voltar" onClick={handleBack} icon={GoArrowLeft} />
                <Button className="delete" title="Excluir filme" maxWidth="16rem" onClick={handleRemove} icon={LiaTrashAlt} />
              </div>


              <div className="rate">
                <h1>{data.title}</h1>
                <Stars big rate={data.rating} />
              </div>


              <div className="box-user">
                <div className="user">
                  <img src={avatarUrl} alt="Foto do usuário" />
                  <span>Por <strong>{user.name}</strong></span>
                </div>

                <div className="clock">
                  <LuClock3 />
                  <span>{data.updated_at}</span>
                </div>
              </div>

              {
                data.tags &&              
                data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))                
              }

              <p>{data.description}</p>            
            </Content>
          </main>
        }
      </ScrollBar>
    </Container>
  )
}