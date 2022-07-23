import { comments } from '../../../data/comments';

export default function handler(req, res) {
  // console.log(comments);
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    // console.log(req.body);
    const comment = req.body.comment;
    // console.log(comment);
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }

}
