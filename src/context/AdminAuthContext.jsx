import { createContext, useContext, useEffect, useState } from 'react'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('jem_admin_access') === 'true')

  useEffect(() => {
    localStorage.setItem('jem_admin_access', String(isAdmin))
  }, [isAdmin])

  return <AdminAuthContext.Provider value={{ isAdmin, signIn: () => setIsAdmin(true), signOut: () => setIsAdmin(false) }}>{children}</AdminAuthContext.Provider>
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (!context) throw new Error('useAdminAuth must be used within AdminAuthProvider')
  return context
}
