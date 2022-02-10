import './App.css';
import Askquestion from './components/AskQuestion/Askquestion';
import QuestionList from './components/QuestionList/QuestionList';

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import InduvidualQuestion from './components/InduvidualQuestion/InduvidualQuestion';

function App() {
  /*const fakeDatas = [{numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5,Tags:"postgresql"},
  {numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:"Problems with 2dGraphics, why do i use these codes instead of these?",modifyTime:5},
  {numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue printing current project classpath // How can I print all directories and libraries in the classpath?",modifyTime:5,Tags:"postgresql"},
  {numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" Laravel move row data from table to another table using button",modifyTime:5},
  {numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" How to handle exceptions from Spring Boot's LdapAuthenticationProviderConfigurer",modifyTime:5,Tags:"postgresql"},
  {numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" Calculated sequence in list",modifyTime:5},
  {numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" Facing Rails devise gives Rollback message when Sign Up",modifyTime:5,Tags:"postgresql"}] */
 
  const fakeDatas = []
  return (
    
    <Router>
  
     
    <div className="App">
    
   
    <Switch>

<Route path="/topQuestions">
    <QuestionList data = {fakeDatas}/>
    </Route>
    
    <Route path="/askQuestions">
    <Askquestion/>
    </Route>

    <Route exact path="/question/:id">
      <InduvidualQuestion/>
      </Route>     
     
     
     <Redirect to="/topQuestions "/>
     </Switch>
     
    </div>
    
    </Router>
  );
}

export default App;
