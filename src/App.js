import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateGroup from './components/CreateGroup';
import AddMembers from './components/AddMembers';
import Expense from './components/Expense';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateGroup />} />
        <Route path="/members" element={<AddMembers />} />
        <Route path="/expense" element={<Expense />} />

      </Routes>
    </BrowserRouter>)

}

export default App;
