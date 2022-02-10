import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom"
import "./questionList.css"
import axios from "axios";

function QuestionList() {


  
  const [questions,setQuestions] = useState([])
  const [searchTerm,setSearchTerm] = useState("")

  const fetchQuestions = async() =>{
    try{
        const res = await axios.get('https://localhost:44362/api/Questions')
        console.log(res.data)
        setQuestions(res.data)
    }
    catch(error){
        console.log(error)
    }
} 

useEffect(() => {
  fetchQuestions()
}, []) 


 

  return (
    <div className="question-list">
        <div className="row navbar-section">
           {/*Navbar Start */}
     
       <div className="col-2 ">
       <a className = "logo "> <Link className='link' to= "/topQuestions"><i class="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
       </div>
         <div className="col-8  mr-2"> <form action ="" className='search'>
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
            <button className="ask-button"><Link className="link" to="/askQuestions">Ask Questions</Link></button>
          </div>
        </div>
        {/* Top Questions Header End*/}

        {/*Questions Start Here */}
        {questions.filter((data) => {  if(searchTerm == "") {
                  return data;
                }
              else if (data.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return data;
              }} ).map((data) => 
         <div className="container question-section bg-dark text-light" key = {data.id}>
         <div className="row mb-2 mt-2 pt-2 ">
           <div className="col-2"> votes</div>
           <div className="col-10 question-link">
            <Link to = "/question/:id">{data.title}</Link>
           </div>
         </div>

         <div className="row ">
           <div className="col-2 "> answers</div>

           <div className="col-1">
             <div>{data.tag}</div>
           </div>
           

           <div className="col-8">modified {data.time} min ago</div>
         </div>
         <div className="row  mt-2 mb-2  ">
           <div className="col-2"> views</div>
         </div>
       </div>
        )} 
        

      
       
       
      </div>

      {/*Questions End Here */}
    </div>
  );
}

export default QuestionList;
