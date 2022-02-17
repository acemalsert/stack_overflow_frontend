import React, {useState} from 'react';
import "./askquestion.css"
import { Link } from "react-router-dom"
import axios from 'axios';

function Askquestion() {



    const [title,setTitle] = useState("")
    const [text,setText] = useState("")
    const [tag,setTag] = useState("")


    const handleSubmit = (event)=>{
        event.preventDefault()
        const sendQuestion= async(title,text,tag)=>{
            try {
                const res = await axios.post('https://localhost:44355/api/Questions',{
                    title:title,
                    text:text,
                    tag:tag,
                    
                })
                console.log(res.data)
                
            } catch (error) {
                console.log(error)
            }
            window.location.replace('/')
        }
        sendQuestion(title,text,tag)
        console.log(title,text,tag)

    }



  return <div className='ask-question bg-dark'>

<div className="row navbar-section">
           {/*Navbar Start */}
     
       <div className="col-2 ">
       <a href = "" className = "logo "> <Link className='link' to= "/topQuestions"><i className="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
       </div>
        
         
          
     
       {/*Navbar End */}
        </div>
      <div className='container bg-dark pt-3 '>
      
        
            <div className='row text-light  m-3 '>
           <p>
           <h3>Title</h3> 
           Be specific and imagine you’re asking a question to another person
               </p> 
            </div>
            <div className='row   m-3 '>
            <form> 
                <input className='input-box bg-dark text-light' type="text" placeholder='e.g Is there an R funtion for finding the index of an element in a vector?' onChange={(event)=>setTitle(event.target.value)}>
                </input>
            </form>  
            </div>
            <div className='row   bg-dark text-light m-3'>
            <p>
           <h3>Body</h3> 
           Include all the information someone would need to answer your question
               </p> 
            </div>
            <div className='row  m-3'>
            <form>
                <input className='input-box-body bg-dark text-light' type="text" onChange={(event)=>setText(event.target.value)}>
                </input>
            </form>  
            </div>
            <div className='row bg-dark text-light m-3'>
            <p>
           <h3>Tags</h3> 
           Add up to 5 tags to describe what your question is about
               </p> 
            </div>

            <div className='row  m-3'>
            <form>
                <input className='input-box row bg-dark text-light ml-1' type="text" placeholder='e.g typescript laravel mysql'onChange={(event)=>setTag(event.target.value)} >
                </input>
            </form>  
            </div>

            <div className='row   pb-3'>
                <button className='ask-button' onClick = {handleSubmit}>Send Question </button>
            </div>
          </div>

        

  </div>;
}

export default Askquestion;
