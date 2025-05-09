import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  ErrorMessage,
  LoginLink,
  FormGroup,
  Label
} from './styles';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Nome completo é obrigatório');
      return false;
    }
    
    if (!formData.email.trim()) {
      setError('Email é obrigatório');
      return false;
    }
    
    if (!formData.email.includes('@')) {
      setError('Por favor, insira um email válido');
      return false;
    }
    
    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }
    
    if (!formData.address.trim()) {
      setError('Endereço é obrigatório');
      return false;
    }
    
    if (!formData.phone.trim()) {
      setError('Telefone é obrigatório');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      console.log('Iniciando registro com dados:', formData);
      const { confirmPassword, ...registerData } = formData;
      await register(registerData);
      
      console.log('Registro bem-sucedido, redirecionando para a página inicial');
      navigate('/');
    } catch (err: any) {
      console.error('Erro no cadastro:', err);
      // Tentar extrair mensagem de erro mais específica se disponível
      const errorMessage = err.message && err.message.includes('Registration failed:') 
        ? err.message 
        : 'Falha no cadastro. Por favor, tente novamente ou use outro email.';
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Criar uma Conta</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <FormGroup>
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme sua senha"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="Digite seu endereço completo"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Digite seu telefone"
            required
            disabled={isLoading}
          />
        </FormGroup>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Criando Conta...' : 'Cadastrar'}
        </Button>

        <LoginLink>
          Já tem uma conta?{' '}
          <Link to="/login">Entre aqui</Link>
        </LoginLink>
      </Form>
    </Container>
  );
};

export default RegisterPage; 