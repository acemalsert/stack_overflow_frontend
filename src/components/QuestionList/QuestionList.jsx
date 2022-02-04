import React, {useState} from "react";
import "./questionList.css";
import { Link } from "react-router-dom"

function QuestionList() {

  const [searchTerm,setSearchTerm] = useState("")

  const fakeDatas  = [{numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5,Tags:"postgresql"},
  {numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:"Problems with 2dGraphics, why do i use these codes instead of these?",modifyTime:5},
  {numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue printing current project classpath // How can I print all directories and libraries in the classpath?",modifyTime:5,Tags:"postgresql"},
  {numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" Laravel move row data from table to another table using button",modifyTime:5},
  {numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" How to handle exceptions from Spring Boot's LdapAuthenticationProviderConfigurer",modifyTime:5,Tags:"postgresql"},
  {numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" Calculated sequence in list",modifyTime:5},
  {numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" Facing Rails devise gives Rollback message when Sign Up",modifyTime:5,Tags:"postgresql"}]

  return (
    <div className="question-list pb-5">

<header className='nav'>
          <a href = "" className = "logo"> <Link className='link' to= "/topQuestions"><i class="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
          <form action ="" className='search'>
              <input className = "search-box" type  = "text" placeholder='Search...' onChange={(event) => {setSearchTerm(event.target.value)}}/>
          </form>
          
      </header>
    
      {/* Top Questions Header Start*/}
      <div className="container">
      
        <div className="row mb-5">
          <div className="col-6 ">
            <h1 className="qlist-header"> Top Questions </h1>
          </div>

          <div className="col-6">
            <button className="ask-button"><Link to="/askQuestions">Ask Questions</Link></button>
          </div>
        </div>
        {/* Top Questions Header End*/}

        {/*Questions Start Here */}
        {fakeDatas.filter((data) => {  if(searchTerm == "") {
                  return data;
                }
              else if (data.questionLink.toLowerCase().includes(searchTerm.toLowerCase())){
                  return data;
              }} ).map((data) => 
         <div className="container question-section bg-dark text-light">
         <div className="row mb-2 mt-2 pt-2 ">
           <div className="col-2">{data.numOfVotes} votes</div>
           <div className="col-10 question-link">
            <Link to = "/question">{data.questionLink}</Link>
           </div>
         </div>

         <div className="row ">
           <div className="col-2 ">{data.numOfAnswers} answers</div>

           <div className="col-1">
             <div>{data.Tags}</div>
           </div>
           

           <div className="col-8">modified {data.modifyTime} min ago</div>
         </div>
         <div className="row  mt-2  ">
           <div className="col-2">{data.numOfViews} views</div>
         </div>
       </div>
        )}
       
      </div>

      {/*Questions End Here */}
    </div>
  );
}

export default QuestionList;
