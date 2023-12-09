
import SignIn from './Components/Login'
import './App.css'
import SignUp from './Components/SignUp'
import { Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      
       <Routes>
        <Route path = '/' element={<SignIn/>}/>
        <Route path = '/signup' element={<SignUp/>}/>

       </Routes>
  
    
    </>
  )
}

export default App
