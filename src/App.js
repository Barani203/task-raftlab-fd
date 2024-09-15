
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import TaskView from './TaskView';
import EditTask from './EditTask';
import Createtsk from './Createtask';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
   <BrowserRouter>
    <div className='container'> 
      <div className='row'>


    <Routes>
      
    <Route path ="/" element={<TaskView/>}/>
    <Route path ="/create-task" element={<Createtsk/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={ <Dashboard/>}/>
    <Route path = "/edit/:id" element= {<EditTask/>}/>


    </Routes>
      </div>
    </div>

   </BrowserRouter>
  );
}

export default App;
