import { useState } from "react";

useState;
function CommentForm() {
  const [comment, setComment] = useState("");
  return (
    <div class="commentForm">
      <form action="submit">
        {" "}
        <input type="text" name="comment" id="" />
        <button id="commentButton">Post</button>
      </form>
    </div>
  );
}

export default CommentForm;
