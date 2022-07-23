import axios from 'axios';
import React from 'react';

export default function CommentsPage() {
  const [comments, setComments] = React.useState([]);
  const [comment, setComment] = React.useState('');

  const fetchComments = async () => {
    const response = await axios.get('/api/comments');
    const data = response.data;
    console.log(typeof data);
    setComments(data);
  };

  const submitComment = async () => {
    const response = await axios.post('/api/comments', { comment: comment });
    const data = await response.data;
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await axios.delete(`/api/comments/${commentId}`);
    const data = await response.data;
    console.log(data);
    fetchComments();
  };

  const modifyComment = async (commentId) => {
    const response = await axios.patch(`/api/comments/${commentId}`,{newComment: comment});
    const data = await response.data;
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={() => modifyComment(comment.id)}>Update</button>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
