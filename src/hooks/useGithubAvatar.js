import { useRef, useState } from 'react'
import { useForm } from './useForm'
import { END_POINT_URL, INITIAL_VALUE_GITHUB } from '../constants'
import { getData } from '../helpers/getData'

export function useGithubAvatar() {

  const { user, handleChange } = useForm({ user: '' })
  const loginRef = useRef(null) // sirve para llegar al virtualDOM como el queryselector
  const [userData, setUserData] = useState(INITIAL_VALUE_GITHUB)

  const { loading, avatar, login, errores } = userData

  const getGitHubAvatar = async (url) => {

    const clone = structuredClone(INITIAL_VALUE_GITHUB) // clono la el inicialvalue porque es asincrona la variable de estado es sincrona
    setUserData({ ...clone, loading: true })

    try {
      const { avatar_url, message, login } = await getData(url)
      // si aparece message no encontró el usuario
      if (message) throw new Error(message)
      clone.avatar = avatar_url
      clone.login = login
    } catch (error) {
      clone.errores = error.message
    } finally { // siempre se ejecuta
      clone.loading = false
      setUserData(clone)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user.trim().length) {
      loginRef.current.focus()
      return
    }
    getGitHubAvatar(END_POINT_URL + user)
    loginRef.current.select()
  }

  return {
    handleChange,
    handleSubmit,
    loginRef,
    user,
    loading,
    login,
    errores,
    avatar,
  }
}
