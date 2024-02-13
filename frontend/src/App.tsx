
import './App.css'
import { Link, Route } from "wouter";
import dashboard from './components/users/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import dashboardAdmin from './components/admin/dashboard';

function App() {


  return (
    <>
        <div>
  

    <Route path="/" component={dashboard} > </Route>
    <Route path='/admin' component={dashboardAdmin}></Route>
    
  
  </div>
    </>
  )
}

export default App
