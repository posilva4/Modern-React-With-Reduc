import faker from "faker";
import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 19:00"
          commentText="Nice blog post!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 12:00"
          commentText="Nice test!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Yesterday at 08:00"
          commentText="Nice to go!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
