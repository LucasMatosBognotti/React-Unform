import React from 'react';

import Input from '../../components/Input';
import { Form } from './style';

import api from '../../services/api';

export default function Profile() {
  
  async function handleSubmit(data) {
    console.log(data.cep);
    const response = await api.get(`${data.cep}/json`);
    console.log(response.data);
  }

  return (
    <Form onSubmit={handleSubmit} >

      <Input label="Nome Completo" name="name" type="text" />

      <Input label="Celular" name="phone" type="tel" mask="(00) 0000-0000" />

      <Input label="Email" name="email" type="email" />

      <Input label="CPF/CNPJ" name="register" type="number" />

      <Input label="CEP" name="cep" type="number" />

      <Input label="Numero" name="number" type="number" />

      <Input label="Complemento" name="complement" type="text" />

      <Input label="Bairro" name="neighborhood" type="text" />

      <Input label="Rua" name="street" type="text" />

      <Input label="Cidade" name="city" type="text" />

      <Input label="UF" name="uf" type="text" />

      <button type="submit"> Atualizar </button>
    </Form>
  );
}