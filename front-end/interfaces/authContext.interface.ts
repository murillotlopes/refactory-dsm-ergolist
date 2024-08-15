import { ReactNode } from 'react';
import { tLogin } from '../types/signin';
import { tUserRegistration } from '../types/signup';

export interface ProviderProps {
  children: ReactNode;
}

export interface AuthContextData {

  signIn: (login: tLogin) => Promise<void>;
  signUp: (user: tUserRegistration) => Promise<void>

}