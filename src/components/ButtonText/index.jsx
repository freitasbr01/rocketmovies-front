import { GoArrowLeft } from "react-icons/go";

import { Container } from './styles';

export function ButtonText({ title, ...rest }) {
  return (
    <Container
      type='button'
      {...rest}
    >
      <GoArrowLeft />
      {title}
    </Container>
  )
}