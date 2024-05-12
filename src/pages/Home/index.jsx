import { Container, Content, Add } from './styles';

import { ScrollBar } from '../../components/ScrollBar';
import { MyMovie } from '../../components/MyMovie';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (      
    <Container>
      <Header>
        <Input
          type="text"
          placeholder="Pesquisar pelo título" 
          onChange={(e) => setSearch(e.target.value)}
          icon={FiSearch}
        /> 
      </Header>      

      <Add>
        <div className="box-add">
          <h1>Meus Filmes</h1>
          <Link to="/new">
            <Button title="Adicionar Filme" icon={FiPlus} maxWidth="19rem" />
          </Link>
        </div>

        <main>
          <Content>
            <ScrollBar>
              <section>
                <div className="box-movie">              
                  {
                    notes.map(note => (
                      <MyMovie
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                      />
                    ))
                  }
                </div>
              </section>
            </ScrollBar>
          </Content>
        </main>
      </Add>


      
    </Container>
  )

}