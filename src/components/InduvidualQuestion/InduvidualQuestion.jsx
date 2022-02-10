import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';
import { useParams } from 'react-router'


function InduvidualQuestion() {

  const [question,setQuestion] = useState("")
  const [comment,setComment] = useState([])
  const [newComment,setNewComment] = useState("")
  const {id} = useParams()
  const {FKquestionid} = useParams()

  const individualQuestions = async()=>{
    try {
        const res = await axios.get(`https://localhost:44362/api/Questions/${id}`)
        console.log(res.data)
        setQuestion(res.data)
    } catch (error) {
        console.log(error)
    }
}

const comments = async()=>{
  try {
      const res = await axios.get(`https://localhost:44362/api/Comments`)
      console.log(res.data)
      setComment(res.data)
  } catch (error) {
      console.log(error)
  }
  
}  

const neededComments = async () => {
  comments()

  comment.forEach(comment => {
    if(comment.FKquestionid == question.id) {
      return comment;
    }
  });
  
}

const handleSubmit = (event)=>{
  event.preventDefault()
  const generateNewComment= async(newComment,FKquestionid)=>{
      try {
          const res = await axios.post('https://localhost:44362/api/Comments',{
              newComment,
              FKquestionid
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
    neededComments()
    
},[])
   
  return <div className='induvidual-questions bg-dark'>
   
   <div className="row navbar-section">
           {/*Navbar Start */}
     
       <div className="col-2 ">
       <a href = "" className = "logo "> <Link className='link' to= "/topQuestions"><i class="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
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
           
              {comment.map((comment)=>(
               <div className='comment'>

                 <hr/>
                 <h3>Answer</h3>
                 {comment.commentText}
                 <hr/>
               </div>
              
              ))}
              

              <h3 className='pt-3'>Your Answer</h3>
          <div className='row'>
              
              
              <div className='row mt-3 pl-4  '>
            <form>
                <input className='input-box-body bg-dark' type="text" onChange={(event)=>setNewComment(event.target.value)}>
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
