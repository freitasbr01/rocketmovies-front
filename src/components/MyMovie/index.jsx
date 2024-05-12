import { Container } from './styles';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

export function MyMovie({ data, ...rest}) {
  return (
    <Container {...rest}>
        <h2>{data.title}</h2>
        <Stars rate={data.rating} />
        <p>{data.description}</p>

        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name}/>
            ))
            }
          </footer>
        }
    </Container>
  )
}

