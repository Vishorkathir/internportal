
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Content from './components/Learn/content'


function App() {


  return (
    <>
    <div className=' max-w-3/4 mx-auto'>
    <Routes>
      <Route path='/Learn' element={<Content/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
