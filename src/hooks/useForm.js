import { useState } from 'react'

export function useForm (initialControlValue = {}) {
  const [controles, setControles] = useState(initialControlValue)

  const handleChange = (e) => {
    const { name, value } = e.target
    setControles({
      ...controles, 
      [name]: value
    })
  }

  const reset = () => {
    setControles(initialControlValue)
  }

  return {
    ...controles, // todo lo que se pase en el objeto controles lo devuelve desestructurado
    handleChange,
    reset
  }
}
