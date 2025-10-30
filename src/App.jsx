
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Content from './components/Learn/content'


function App() {


  return (
    <>
    <div className=' lg:max-w-7xl sm:w-full  mx-auto'>
    <Routes>
      <Route path='/' element={<Content/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
