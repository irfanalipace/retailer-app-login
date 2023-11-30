import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from './components/crud/View';
import Create from './components/crud/Create';
import Update from './components/crud/Update';
import FormCreate from './components/view/FormCreate';
import Dataview from './components/view/Dataview';
import FormUpdate from './components/view/FormUpdate';
import Todo from './components/Todo/Todo';
import Count from './components/crud/Count';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/contact" element={<Count />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='/' element={<Dataview />} />
        <Route path='/create' element={<FormCreate />} />
        <Route path='/edit/:id' element={<FormUpdate />} /> */}
        {/* <Route path='/todo' element={<Todo />} /> */}
      </Routes>
    </Router>
  );
};

export default App;