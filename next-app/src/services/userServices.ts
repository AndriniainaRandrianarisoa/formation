// services/userService.ts

import prisma from "../lib/prisma"

export const userService = {
  // Méthode pour récupérer tous les utilisateurs
  async getAllUsers() {
    try {
      const users = await prisma.user.findMany()
      return users
    } catch (error) {
      throw new Error('Failed to fetch users')
    }
  },

  // Méthode pour récupérer un utilisateur par ID
  async getUserById(id: number) {
    try {
      const user = await prisma.user.findUnique({
        where: { id }
      })
      return user
    } catch (error) {
      throw new Error('Failed to fetch user')
    }
  },

  // Méthode pour créer un utilisateur
  async createUser(data: { name: string; email: string }) {
    try {
      const user = await prisma.user.create({
        data
      })
      return user
    } catch (error) {
      throw new Error('Failed to create user')
    }
  }
}
