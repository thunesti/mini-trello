import type { User } from '~/types/types'

export const useUserStore = defineStore('user', () => {
  
  // --- STATE ---
  const user = ref<User | null>(null)
  const isAuthenticated = ref<boolean>(false)

  // --- ACTIONS ---
  
  // Innlogging som kun krever brukernavnet
  function login(usernameInput: string) {
    if (!usernameInput.trim()) return false // Sikrer at det ikke logges inn med tomt felt

    // Brukernavn formateres (f.eks. gjør "stian" til "Stian")
    const formattedName = usernameInput.charAt(0).toUpperCase() + usernameInput.slice(1)

    const userData: User = {
      username: usernameInput.toLowerCase().trim(),
      name: formattedName,
      // Genererer en unik og dritkul sci-fi robot-avatar basert på brukernavnet!
      avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${usernameInput}`
    }

    user.value = userData
    isAuthenticated.value = true

    // Lagre i nettleseren så man slipper å logge inn på nytt ved sideoppdatering (F5)
    localStorage.setItem('user_session', JSON.stringify(userData))
    return true
  }

  // Logger ut og fjerner sesjonen
  function logout() {
    user.value = null
    isAuthenticated.value = false
    localStorage.removeItem('user_session')
    navigateTo('/')
  }

  // Sjekker om brukeren allerede er logget inn når appen starter
  function initializeAuth() {
    if (import.meta.client) {
      const savedSession = localStorage.getItem('user_session')
      if (savedSession) {
        user.value = JSON.parse(savedSession)
        isAuthenticated.value = true
      }
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    initializeAuth
  }
})