import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  background: #ccc;

  label {
    margin-top: 10px;
  }

  button {
    margin-top: 10px;
  }
`;