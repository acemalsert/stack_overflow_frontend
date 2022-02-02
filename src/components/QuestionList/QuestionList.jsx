import React from "react";
import "./questionList.css";
import { Link } from "react-router-dom"

function QuestionList() {

  const fakeDatas  = [{numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5,Tags:"postgresql"},{numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5},{numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5,Tags:"postgresql"},{numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5},{numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5,Tags:"postgresql"},{numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5},{numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5,Tags:"postgresql"},{numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5},{numOfVotes : 1, numOfAnswers:1, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5,Tags:"postgresql"},{numOfVotes : 0, numOfAnswers:0, numOfViews:19,questionLink:" issue with ownership on mounted volumes in kubernetes pod",modifyTime:5}]

  return (
    <div className="question-list">
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
        {fakeDatas.map((data) => 
         <div className="container question-section bg-dark text-light">
         <div className="row mb-2 mt-2 pt-2 ">
           <div className="col-2">{data.numOfVotes} votes</div>
           <div className="col-10 question-link">
            {data.questionLink}
           </div>
         </div>

         <div className="row ">
           <div className="col-2 ">{data.numOfAnswers} answers</div>

           <div className="col-1">
             <div>{data.Tags}</div>
           </div>
           

           <div className="col-8">modified {data.modifyTime} min ago</div>
         </div>
         <div className="row mb-2 mt-2  pb-2">
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
