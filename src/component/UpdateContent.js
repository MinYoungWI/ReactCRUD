import React, { useState } from 'react';

function UpdateContent(props) {
  const [titleValue, setTitleValue] = useState(props.data.title)
  const [descValue, setDescValue] = useState(props.data.desc)
  const [id] = useState(props.data.id)

  return (
    < article >
      <h2>Update</h2>
      <form action='/create_process' method='post'
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(
            id,
            titleValue,
            descValue);
        }}
      >
        <input type="hidden" name="id" value={id}></input>
        <p><input
          type="text"
          name="title"
          placeholder='title'
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
        ></input></p>
        <p><textarea
          name='desc'
          placeholder='description'
          value={descValue}
          onChange={(e) => {
            setDescValue(e.target.value);
          }}
        ></textarea></p>
        <p><input type="submit"></input></p>
      </form>
    </article >
  )
};

export default UpdateContent;
