import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApplicationShell } from './components';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home'>
          <ApplicationShell />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
