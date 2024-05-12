import { Container, Form } from './styles';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { ButtonText } from '../../components/ButtonText';
import { MovieItem } from '../../components/MovieItem';
import { ScrollBar } from '../../components/ScrollBar';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]); // Guarda a lista de tags que será exibida.
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(event) {
    event.preventDefault();

    if (!title) {
      return alert("Digite o título do filme!");
    }

    if(isNaN(Number(rating)) || rating > 5 || rating < 0) {
      return alert("Avalie este filme de 0 a 5")
    }

    if (!description) {
      return alert("Digite a descrição do filme");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo de adicionar. Clique para adicionar ou deixe o campo vazio!");
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Nota criada com sucesso!");
    handleBack()
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />        

      <ScrollBar>
        <main>
          <Form>
            <header>
                <ButtonText title="Voltar" onClick={handleBack}/>
              <h1>Novo filme</h1>
            </header>

            <div className="box-input">
              <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />

              <Input 
                placeholder="Sua nota (de 0 a 5)"
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <TextArea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />

            <Section title="Marcadores">
              <div className="markers">
                {
                  tags.map((tag, index) => (
                    <MovieItem
                      key={String(index)}
                      value={tag}
                      onClick={() => {handleRemoveTag(tag)}}
                    />
                  ))
                }

                <MovieItem 
                  $isNew 
                  placeholder="Novo marcador"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </Section>

            <div className="box-button">
              <Button $trash title="Excluir filme" />
              <Button title="Salvar alterações" onClick={handleNewNote} />
            </div>

          </Form>
        
        </main>
      </ScrollBar>
    </Container>
  )
}