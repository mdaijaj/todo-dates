import './App.css';
import NewTask from './component/signup'
import { Routes ,Route } from 'react-router-dom';
import Landing from './component/landingpage'
import EditTask from './component/editcandidate';
import Todo from './component/todo'


const Routing=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Todo/>} />  
        <Route path="/newtask" element={<NewTask/>} />  
        <Route path="/landing" element={<Landing />} />
        <Route path="/editcandidate/:id" element={<EditTask/>}/>
      </Routes>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
