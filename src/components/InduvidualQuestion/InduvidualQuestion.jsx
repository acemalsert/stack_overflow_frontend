import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';
import { useParams } from 'react-router-dom'


function InduvidualQuestion() {

  //const [input,setInput] = useState("")
  const [question,setQuestion] = useState("")
  const [comment,setComment] = useState([])
  const [newComment,setNewComment] = useState("")
  const [FKquestionid,setFKquestionid] = useState("")
  const {id} = useParams()
  

  const individualQuestions = async()=>{
    try {
        const res = await axios.get(`https://webapplication420220213220336.azurewebsites.net//api/Questions/${id}`)
        setQuestion(res.data)
        setFKquestionid(id)
        
    } catch (error) {
        console.log(error)
    }
}


const comments = async()=>{
  try {
      const res = await axios.get(`https://webapplication420220213220336.azurewebsites.net//api/Comments`)
      //console.log(res.data)
      setComment(res.data)
  } catch (error) {
      console.log(error)
  }
  
}  



const handleSubmit = (event)=>{
  event.preventDefault()
  const generateNewComment= async(newComment,FKquestionid)=>{
      
      try {
          const res = await axios.post('https://localhost:44362/api/Comments',{
              commentText:newComment,
              FKquestionid:FKquestionid
          })
          console.log(res.data)
          
      } catch (error) {
          console.log(error)
      }

  }
  generateNewComment(newComment,FKquestionid)


}


useEffect(()=>{
    individualQuestions()
    comments()
    
},[comment])
   
  return <div className='induvidual-questions bg-dark'>
   
   <div className="row navbar-section">
           {/*Navbar Start */}
     
       <div className="col-2 ">
       <a href = "" className = "logo "> <Link className='link' to= "/"><i class="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
       </div>
       
         
          
     
       {/*Navbar End */}
        </div>
    
            
  

      <div className='container bg-dark text-light  pt-4'>
            <h1>{question.title}</h1>
         
          <div className='row text-light pb-4 pl-2'>
              {question.text}
          </div>
            <div className='row pl-2'><p>
              Know someone who can answer? Share a link to this question via email, Twitter, or Facebook.
              </p></div>
              
              {
              comment.filter((comm)=>{
               
                 if(comm.FKquestionId == id){ 
                  
                   
                    return comm;
                }
                
                }).map((comm)=>(
               <div className='comment' key={comm.id}>

                 <hr/>
                 <h3>Answer</h3>
                 {comm.commentText} 
                 <hr/>
               </div>
              
              ))}
              

              <h3 className='pt-3'>Your Answer</h3>
          <div className='row'>
              
              
              <div className='row mt-3 pl-4  '>
            <form>
                <input className='input-box-body bg-dark text-light' type="text" onChange={(event)=>setNewComment(event.target.value)}>
                </input>
            </form>  
            </div>

            
          </div>

          <div className='row  pb-3 pl-2'>
                <button className='ask-button' onClick={handleSubmit}>Send Answer </button>
            </div>
      </div>
  </div>;
}

export default InduvidualQuestion;
