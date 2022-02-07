import React from 'react';
import {Link} from "react-router-dom"


function InduvidualQuestion() {

    const fakeQuestion = {question_title:"javascript arrays",question:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
  return <div className='induvidual-questions bg-dark'>
              <header className='nav'>
          <a href = "" className = "logo bg-dark"> <Link className='link' to= "/topQuestions"><i class="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
          </header>
  

      <div className='container bg-dark text-light  pt-4'>
        asd
            <h1>{fakeQuestion.question_title}</h1>
            <hr/>
          <div className='row text-light pb-4 pl-2'>
              {fakeQuestion.question}
          </div>
            <div className='row pl-2'><p>
              Know someone who can answer? Share a link to this question via email, Twitter, or Facebook.
              </p></div>

              <h3 className='pt-3'>Your Answer</h3>
          <div className='row'>
              
              
              <div className='row mt-3 pl-4  '>
            <form>
                <input className='input-box-body bg-dark' type="text">
                </input>
            </form>  
            </div>
          </div>

          <div className='row  pb-3 pl-2'>
                <button className='ask-button'>Send Question </button>
            </div>
      </div>
  </div>;
}

export default InduvidualQuestion;
