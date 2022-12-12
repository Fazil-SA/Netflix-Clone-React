import './App.css';
import React from 'react'
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {originals,action,romance,horror,comedy} from '../src/urls'

function App() {
  return (
    <div className="">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' url={action} isSmall />
      <RowPost title='Romance' url={romance} isSmall />
      <RowPost title='Horror' url={horror} isSmall />
      <RowPost title='Comedy' url={comedy} isSmall />
    </div>
  );
}

export default App;
