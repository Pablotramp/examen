import { CustomInput } from "./components/CustomInput"
import { END_POINT_URL } from "./constants"
import { useState } from "react"
import { useForm } from "./hooks/useForm"
import { getData } from "./helpers/getData"

const GithubApp = () => {
  const { user, handleChange } = useForm({ user: '' })
const [data, setData] = useState({
  error: false,
  isLoading: false,
  data: null
})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = END_POINT_URL + user
    // const data = await getData(url)
    // console.log(data)
    try {
      const data = await getData(url)
      console.log(data)
    } catch (error) { 
      console.log(error) }  

  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex items-center gap-2">
        <span>
          {
            END_POINT_URL
          }
        </span>
        <CustomInput
          name='user'
          value={user}
          placeholder='webferrol'
          onChange={handleChange}
          required
        />
      </fieldset>
      <button>cargar</button>
    </form>
  )
}

export default GithubApp


