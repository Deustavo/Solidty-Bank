import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';
import { Form } from '@unform/web';
import * as yup from 'yup';

import Button from '../../components/Button';
import Header from '../../components/Header';

import api from '../../services/api';
import { UserResponse } from '../../types/user';
import updateReduxState from '../../services/updateReduxState';
import Loader from '../../components/Loader';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { AnyObject } from '../../types/utils';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: AnyObject) => {
    const filteredData: AnyObject = {}

    Object.keys(data).forEach(key => {
      filteredData[key] = data[key].trim();
    });
ç
    setLoading(true);
    try {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        username: yup.string().required('Nome de usuário obrigatório '),
        password: yup.string().required('Senha obrigatória'),
      });

      await schema.validate(filteredData, {
        abortEarly: false
      })

      const { data: response } = await api.post<UserResponse>('/login', {
        "usuario": username,
        "senha": password
      });
      localStorage.setItem('@token_user', response.token);
      localStorage.setItem('@user_name', response.usuario.nome);
      updateReduxState();
      toast.success('Seja bem-vindo(a)');
      //redirecionar para dashboard;
    }
    catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      if (Object.keys(err).includes('isAxiosError')) {
        toast.error('Ocorreu algum erro!');
        return //redirecionar para página de erro;
      }
      setLoading(false);
      toast.error('Usuario ou senha incorretos!');
    } finally {
      setLoading(false);
    }

  }, [username, password, history]);

  return (
    <>
      <Header />
        <Form ref={formRef} onSubmit={handleSubmit}>
          Faça o login

          <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuário" autoFocus />
          <Input name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" type="password" />

          {loading ? <Loader /> : <Button
            type="submit"
            text="Continuar"
            Icon={FaArrowRight}
            className="form-button"
          />
          }

          <Link to="/recover">Esqueci minha senha</Link>
          <Link to="/">Ainda não sou cliente</Link>
        </Form>
    </>
  );
}

export default Login;