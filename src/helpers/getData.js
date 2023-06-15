// es una funcion pura (que no depende de nada externo)
export const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data
}
