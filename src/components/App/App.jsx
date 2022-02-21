import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../Header/Header';
import LogIn from './LogIn/LogIn';
import CreateTeam from './AdminProfile/AdminProfile';
import UserProfile from './UserProfile/UserProfile';

import { allImages } from '../../assets';

import './App.scss';

const App = () => {

  const getRandomImage = () => {
    return allImages[Math.floor(Math.random() * allImages.length)]
  }

  return (
    <BrowserRouter>
      <Header />
      <div className='main'>
        <img src={getRandomImage()} alt={'Poster'} className='background-image' />
        <Routes>
            <Route path='/' element={<LogIn/>} />
            <Route path='/admin-profile' element={<CreateTeam />} />
            <Route path='/user-profile' element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
