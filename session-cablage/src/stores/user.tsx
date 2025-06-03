// store.ts
import {create} from 'zustand'

// 1. Définition des types
interface User {
  id: string;
  email: string;
}

interface StoreState {
  // State
  user: User;
  //setters
  setUser:(user:User) => void
}

// 2. Création du store
export const userStore = create<StoreState>((set) => ({

  // État initial
  user: {
    id: '',
    email: ''
  },


  setUser:(user:User) => set({user})
  

}));
