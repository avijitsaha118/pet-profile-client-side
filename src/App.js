import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Register from './login/Register';
import RequireAuth from './login/RequireAuth';
import AddPet from './pages/AddPet';
import Home from './pages/Home';
import ManageInfo from './pages/ManageInfo';
import Header from './shared/Header';
import AddVet from './pages/AddVet';
import DeleteDoctor from './pages/DeleteDoctor';
import Follow from './Follow';
import Appoinment from './pages/Appoinment';
import Blog from './pages/Blog';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>


        <Route path='/information' element={
          <RequireAuth>
            <AddPet></AddPet>
          </RequireAuth>
        }></Route>


        <Route path='/manage' element={
          <RequireAuth>
            <ManageInfo></ManageInfo>
          </RequireAuth>
        }></Route>

        <Route path='/follow' element={
          <RequireAuth>
            <Follow></Follow>
          </RequireAuth>
        }></Route>

<Route path='/appointment' element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>
        }></Route>

        <Route path='/addvet' element={
          <RequireAuth>
            <AddVet></AddVet>
          </RequireAuth>
        }></Route>

        <Route path='/removedoctor' element={
          <RequireAuth>
            <DeleteDoctor></DeleteDoctor>
          </RequireAuth>
        }></Route>

<Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
