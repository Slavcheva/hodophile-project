import React, { createContext } from 'react'

export const AuthContext = createContext({isLogged: false })

const ContextWrapper = props => {
  const [isLogged, setIsLogged] = React.useState(false)

  function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
      const [cookieName, cookieValue] = cookie.split('=');
      acc[cookieName] = cookieValue;
      return acc;
    }, {})
  }

  React.useEffect(()=>{

    const cookies = parseCookies();
    const isLogged = !!cookies['x-auth-token'];

    setIsLogged(isLogged)
  })
  return (
    <AuthContext.Provider value={{isLogged}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default ContextWrapper