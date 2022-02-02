import './App.css';
import Askquestion from './components/AskQuestion/Askquestion';
import Header from './components/Header/Header';
import QuestionList from './components/QuestionList/QuestionList';

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
  
     
    <div className="App">
    <Header/>
    <Switch>

<Route path="/topQuestions">
    <QuestionList/>
    </Route>

    <Route path="/askQuestions">
    <Askquestion/>
    </Route>
     
     
     
     <Redirect to="/topQuestions "/>
     </Switch>
     
    </div>
    
    </Router>
  );
}

export default App;
