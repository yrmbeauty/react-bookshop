import React from 'react';
import star from '../../../media/star.jpeg';

const Rect = () => {
  return (
    <svg
      className='bd-placeholder-img mr-3 align-self-center'
      width='64'
      height='64'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid slice'
      focusable='false'
      role='img'
      aria-label='Placeholder: 64x64'
    >
      <title>Placeholder</title>
      <rect width='100%' height='100%' fill='#868e96'></rect>
      <text x='15%' y='50%' fill='#dee2e6' dy='.3em'>
        64x64
      </text>
    </svg>
  );
};

const Comments = () => {
  let comments = this.props.comments;
  return (
    <li className='media'>
      {comments.photo === undefined && <Rect />}
      <div className='media-body'>
        <h5 className='mt-0 mb-1'>{comments.author}</h5>
        <div type='text'>{comments.text}</div>
        <p>
          <img src={star} alt='rate' className='rate'></img> {comments.rating}
        </p>
      </div>
    </li>
  );
};
export default Comments;
