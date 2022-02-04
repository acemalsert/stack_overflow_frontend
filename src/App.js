import './App.css';
import Askquestion from './components/AskQuestion/Askquestion';
import Header from './components/Header/Header';
import QuestionList from './components/QuestionList/QuestionList';

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import InduvidualQuestion from './components/InduvidualQuestion/InduvidualQuestion';

function App() {
  return (
    <Router>
  
     
    <div className="App">
   
    <Switch>

<Route path="/topQuestions">
    <QuestionList/>
    </Route>

    <Route path="/askQuestions">
    <Askquestion/>
    </Route>

    <Route exact path="/question">
      <InduvidualQuestion/>
      </Route>     
     
     
     <Redirect to="/topQuestions "/>
     </Switch>
     
    </div>
    
    </Router>
  );
}

export default App;
