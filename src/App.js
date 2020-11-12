import logo from './logo.svg';
import './App.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import DataAdd from './screens/DataAdd';
import DataList from './screens/DataList';
import { Route, Switch } from 'react-router-dom';
import DataUpdate from './screens/DataUpdate';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={DataList} />
     <Route path="/ekle"  component={DataAdd} />
     <Route path="/güncelle/:id"  component={DataUpdate} />
    </Switch>
   </BrowserRouter>
 
 
    </>
  
  );
}

export default App;
