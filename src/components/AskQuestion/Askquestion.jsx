import React from 'react';
import "./askquestion.css"

function Askquestion() {
  return <div className='ask-question'>
      <div className='container bg-dark pt-3'>
        
            <div className='row text-light bg-dark m-3 '>
           <p>
           <h3>Title</h3> 
           Be specific and imagine you’re asking a question to another person
               </p> 
            </div>
            <div className='row  m-3 '>
            <form>
                <input className='input-box' type="text" placeholder='e.g Is there an R funtion for finding the index of an element in a vector?'>
                </input>
            </form>  
            </div>
            <div className='row  m-3'>
            <p>
           <h3>Body</h3> 
           Include all the information someone would need to answer your question
               </p> 
            </div>
            <div className='row  m-3'>
            <form>
                <input className='input-box-body' type="text">
                </input>
            </form>  
            </div>
            <div className='row  m-3'>
            <p>
           <h3>Tags</h3> 
           Add up to 5 tags to describe what your question is about
               </p> 
            </div>

            <div className='row  m-3'>
            <form>
                <input className='input-box' type="text" placeholder='e.g typescript laravel mysql'>
                </input>
            </form>  
            </div>

            <div className='row  m-3 pb-3'>
                <button className='ask-button'>Send Question </button>
            </div>
          </div>

        

  </div>;
}

export default Askquestion;
