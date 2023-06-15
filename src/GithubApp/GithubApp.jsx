import { CustomInput } from "../components/CustomInput"
import { ImageSkeleton } from "../components/imageSkeleton"
import { END_POINT_URL } from "../constants"
import { useGithubAvatar } from "../hooks/useGithubAvatar"

const GithubApp = () => {
  const { handleChange, handleSubmit, loginRef, user, loading, login, errores, avatar, } = useGithubAvatar() // custom hook 

  return (
    <form className="flex flex-col w-2/3 gap-4" onSubmit={handleSubmit}>
      <fieldset className="flex items-center gap-2">
        <span> {END_POINT_URL} </span>
        <CustomInput
          ref={loginRef} // para llegar al virtualDOM
          name='user'
          value={user}
          placeholder='webferrol'
          onChange={handleChange}
        />
        <button className="px-3 py-3 text-white border rounded-md shadow-md hover:bg-slate-800 bg-slate-500">cargar</button>
      </fieldset>
      <div>
        {loading && <ImageSkeleton />}
        {avatar && <img className="object-cover w-64 h-64 rounded-full" src={avatar} alt={login} />}
        {errores && <p className="px-4 text-white bg-red-500 rounded-md">{errores}</p>}
      </div>
    </form>
  )
}

export default GithubApp
