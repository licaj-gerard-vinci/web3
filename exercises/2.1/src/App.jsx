import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClickCounter from './components/ClickCounter'
import './App.css'

function App() {
  const title = "Click Counter"
  const message = "You are a master in the art of clicking !"
  const hovermsg = "Click me !"
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ClickCounter title={title} message={message} hovermsg={hovermsg}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
