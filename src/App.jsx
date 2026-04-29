import { Outlet } from 'react-router-dom';
import Body from './components/Body/Body';
import Header from './components/Header/Header'
function App() {
 

  return (
  
     <>
     <Header/>
     <Outlet/>


     </>

  )

}

export default App;