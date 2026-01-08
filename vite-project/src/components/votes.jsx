import upvoteEmpty from "../assets/upvoteEmpty.svg";
import upvotedFilled from "../assets/upvotedFilled.svg";
import downvoteEmpty from "../assets/downvoteEmpty.svg";
import downvoteFilled from "../assets/downvoteFilled.svg";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Votes({ vote }) {
  //   const [votes, setVotes] = useState(vote);
  // 1. on click change the button
  // 2. make an API call and PATCH
  let upVoteCount = 0;
  const [upVoted, setIsUpVoted] = useState(true);
  const [downVoted, setIsDownVoted] = useState(true);
  const [upVoteDisabled, setUpvoteDisabled] = useState(false);
  const [downVoteDisabled, setDownvoteDisabled] = useState(false);
  let params = useParams();
  let article_id = params.article_id;
  let [votes, setVote] = useState(vote);
  const handleUpVote = () => {
    setIsUpVoted(!upVoted);
    console.log(upVoted);
    if (upVoted) {
      setVote((currVote) => currVote + 1);
      setDownvoteDisabled(true);
      axios.patch(
        `https://nc-news-xnco.onrender.com/api/articles/${article_id}`,
        { inc_votes: 1 }
      );

      console.log(1);
    } else {
      setVote((currVote) => currVote - 1);
      setDownvoteDisabled(false);
      axios.patch(
        `https://nc-news-xnco.onrender.com/api/articles/${article_id}`,
        { inc_votes: -1 }
      );
    }
  };
  const handleDownVote = () => {
    setIsDownVoted(!downVoted);
    if (downVoted) {
      setVote((currVote) => currVote - 1);
      setUpvoteDisabled(true);
      axios.patch(
        `https://nc-news-xnco.onrender.com/api/articles/${article_id}`,
        { inc_votes: -1 }
      );
    } else {
      setVote(votes + 1);
      setUpvoteDisabled(false);
      axios.patch(
        `https://nc-news-xnco.onrender.com/api/articles/${article_id}`,
        { inc_votes: +1 }
      );
    }
  };

  return (
    <div class="button-container">
      <button disabled={upVoteDisabled} onClick={handleUpVote}>
        <img src={upVoted ? upvoteEmpty : upvotedFilled} alt="" />
      </button>
      <p> {votes}</p>
      <button disabled={downVoteDisabled} onClick={handleDownVote}>
        <img src={downVoted ? downvoteEmpty : downvoteFilled} alt="" />
      </button>
    </div>
  );
}

export default Votes;
