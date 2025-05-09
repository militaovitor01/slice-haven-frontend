import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

interface ApiUser {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  address?: string;
  phone?: string;
  created_at?: string;
}

interface PageResponse {
  content: ApiUser[];
  pageable: any;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: any;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// API base URL
const API_URL = 'http://localhost:8080';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Fetch all users and find the matching one
      const response = await fetch(`${API_URL}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        credentials: 'include'
      });

      if (!response.ok) {
        console.error('Falha ao buscar usuários:', response.status, response.statusText);
        throw new Error('Login failed');
      }

      const paginatedData = await response.json() as PageResponse;
      const users = paginatedData.content; // Extrair o array de usuários da propriedade content
      
      console.log("Usuários encontrados:", users.length);
      
      // Find user with matching email and password
      const foundUser = users.find((user: ApiUser) => 
        user.email === email && user.password_hash === password
      );
      
      if (!foundUser) {
        console.error('Usuário não encontrado com as credenciais fornecidas');
        throw new Error('Invalid credentials');
      }
      
      // Create a basic token for authentication purposes
      const token = btoa(`${email}:${password}`);
      
      // Store user data and token
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        address: foundUser.address || '',
        phone: foundUser.phone || '',
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      // O backend espera um payload que corresponda ao UserDTO
      // Vamos deixar o created_at como null para que o backend use o valor default
      const userDTO = {
        id: null,
        name: userData.name,
        email: userData.email,
        password_hash: userData.password,
        address: userData.address,
        phone: userData.phone,
        created_at: null // Deixamos null para o servidor definir o timestamp
      };
      
      console.log('Enviando dados de registro:', userDTO);
      
      // Registrar o usuário
      const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        credentials: 'include',
        body: JSON.stringify(userDTO),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro ao registrar:', response.status, errorText);
        throw new Error(`Registration failed: ${errorText}`);
      }

      console.log('Registro realizado com sucesso');
      
      // Aguardar um momento para garantir que o banco de dados processou o registro
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Após o registro, fazer login automaticamente usando as credenciais fornecidas
      await login(userData.email, userData.password);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 