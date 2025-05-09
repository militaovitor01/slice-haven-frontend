import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage,
  RegisterLink,
  FormGroup,
  Label
} from './styles';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or default to home
  const from = location.state?.from || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Email é obrigatório');
      return;
    }

    if (!password.trim()) {
      setError('Senha é obrigatória');
      return;
    }

    setIsLoading(true);

    try {
      await login(email, password);
      // Redirect to the page the user was trying to access
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Erro na autenticação:', err);
      setError('Credenciais inválidas. Por favor, verifique seu email e senha.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login Slice Haven</Title>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>

        <RegisterLink>
          Não tem uma conta? <Link to="/register">Cadastre-se aqui</Link>
        </RegisterLink>
      </Form>
    </Container>
  );
};

export default LoginPage;
