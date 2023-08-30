import React from 'react'

const List = ({title, list}) => {
  return (
    <ul className='list'>
      <p className='list__title'># {title}</p>
      {list.map((item, i) => {return <li key={i} className='list__element'>{item}</li>})}
    </ul>
  );
}

export default List