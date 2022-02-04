import React, {useState} from "react";

import { Link } from "react-router-dom"
import "./questionList.css"

function QuestionList(props) {
  

  const [searchTerm,setSearchTerm] = useState("")

 

  return (
    <div className="question-list">
        <div className="row navbar-section">
           {/*Navbar Start */}
     
       <div className="col-2 ">
       <a href = "" className = "logo "> <Link className='link' to= "/topQuestions"><i class="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
       </div>
         <div className="col-10 "> <form action ="" className='search'>
              <input className = "search-box" type  = "text" placeholder='Search...' onChange={(event) => {setSearchTerm(event.target.value)}}/>
          </form></div>
         
          
     
       {/*Navbar End */}
        </div>
    
      {/* Top Questions Header Start*/}
      <div className="container ">

        
      
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
        {props.data.filter((data) => {  if(searchTerm == "") {
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
        <div className="text-light">
          {props.data.map((data)=>{<div>{data.numOfAnswers}</div>})}
        </div>
       
      </div>

      {/*Questions End Here */}
    </div>
  );
}

export default QuestionList;
