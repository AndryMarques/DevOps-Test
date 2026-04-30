import { useState } from 'react'
// import heroImg from './assets/hero.png'
import Logo from './assets/Galo.png'
// import Logo from './assets/NaoExiste.png'   // CD
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const variavelSemUso = "QUEBROU O CI"

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={Logo} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>O melhor projeto</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
