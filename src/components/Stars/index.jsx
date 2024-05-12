import { Container } from './styles';
import { IoStarSharp, IoStarOutline  } from "react-icons/io5";

export function Stars({ big, rate }) {
  let stars = [];

  for (let cont = 1; cont <=5; cont++) { 
    if (cont <= rate) {
      stars.push(<IoStarSharp key={cont} />);
    } else {
      stars.push(<IoStarOutline key={cont} />)
    }
  }

  return (
    <Container big={big} >
      {stars}
    </Container>
  )
}

