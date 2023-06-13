import PropTypes from 'prop-types';
import { useState } from 'react';

function H1({ textH1 = 'aquí tu título' }) {
  return (
    <h1 className='text-pink-400 font-bold text-7xl'>{textH1}
    </h1>
  )
}

function H3({ textH3 = 'aquí tu título' }) {
  return (
    <h3 className='text-orange-400 font-bold text-3xl mt-8'>{textH3}</h3>
  )
}

function Boton({ textButton = 'click', funcionClick = () => console.log('aquí tu función') }) {
  return (
    <button
      className='px-2 rounded bg-white hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:border-none'
      onClick={funcionClick}>
      {textButton}
    </button>
  )
}

export function CounterApp({ initialCounter = 0, initialIncrement = 1 }) {

  const [contador, setContador] = useState(initialCounter)
  const [value, setValue] = useState(initialIncrement)
  const [inputValue, setInputValue] = useState(initialCounter)


  const handleDecrease = () => {
    setContador(contador - value)
  }
  const handleIncrease = () => {
    setContador(contador + value)
  }

  return (
    <main className='container flex flex-col items-center justify-center h-screen gap-2 absolute -inset-1'>
      <div className=' rounded-xl shadow-2xl flex flex-col items-center justify-center w-2/5'>
        <H3 textH3='Parte Basica' />
        <H1 textH1={contador} />
        <fieldset className='flex justify-center gap-2 mt-4'>
          {/* el input/number determina la cantidad del incremento o decremento lo inicio en 1 como manda el ejercicio */}
          <input type='number' className='w-1/5 h-10 px-2 border border-black rounded' value={value} onChange={(e) => setValue(Number(e.target.value))} />
          <Boton textButton='DECREASE' funcionClick={handleDecrease} />
          <Boton textButton='INCREASE' funcionClick={handleIncrease} />
        </fieldset>
        <H3 textH3='Añadiendo Complejidad' />
        <fieldset className='flex justify-center gap-2 mt-4 mb-16'>
          <input type='number' className='w-1/5 h-10 px-2 border border-black rounded' onChange={(e) => setInputValue(Number(e.target.value))} />
          <Boton textButton='SET COUNTER' funcionClick={() => setContador(inputValue)} />
        </fieldset>
      </div>
    </main>
  )
}

H1.propTypes = {
  textH1: PropTypes.string
}

H3.propTypes = {
  textH3: PropTypes.string
}

Boton.propTypes = {
  textButton: PropTypes.string,
  funcionClick: PropTypes.func
}

CounterApp.propTypes = {
  initialCounter: PropTypes.number,
  initialIncrement: PropTypes.number
}
