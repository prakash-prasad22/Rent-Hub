import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  
  return (
    <>
      <Header/>
      <main className='min-h-[42vh]'>
          <Outlet/>
      </main>
      
    </>
  )
}

export default App
