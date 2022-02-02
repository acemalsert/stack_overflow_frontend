import React from 'react';
import "./header.css"
import { Link } from "react-router-dom"


function Header() {
  return <div className='header'>
      <header className='nav'>
          <a href = "" className = "logo"> <Link className='link' to= "/topQuestions"><i class="fab fa-stack-overflow"></i>Stack <b>overflow</b></Link></a>
          <form action ="" className='search'>
              <input className = "search-box" type  = "text" placeholder='Search...'/>
          </form>
          <a href = "" className = "profile"> Ahmet</a>
      </header>
       
  </div>;
}

export default Header;
