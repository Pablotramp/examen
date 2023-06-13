import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'

export function useCharacters () {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true) // para un loader
  const [error, setError] = useState(null) // para un error

  useEffect(() => {
    fetch('https://swapi.dev/api/people/?page=1')
      .then(response => response.json())
      .then(data => {
        const { results } = data
        const data2 = results.map(({ name, mass, height }) => {
          return {
            id: uuidv4(),
            name,
            mass,
            height
          }
        })
        setUsers(data2)
        setIsLoading(false) // si llega aqui cargó la data y paso a false el loader
      })
      .catch(setError) // si falla en algun lado nos larga el error
  }, [])

  function handleCharacter (payload) {
    setUsers([
      payload,
      ...users
    ])
  }

  return { users, isLoading, error, handleCharacter } // retornamos un objeto con los valores que necesitamos
}
