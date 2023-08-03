import React from 'react';

function TOC(props) {

  let data = props.data;
  let lists = [];

  for (let i = 0; i < data.length; i++) {
    let id = data[i].id;
    let title = data[i].title;

    lists.push(
      <li key={data[i].id}>
        <a href={"/content/" + id}
          data-id={id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangePage(e.target.dataset.id);
          }}>
          {title}
        </a>
      </li>)
  }

  return (
    <div className="TOC">
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    </div>
  );
}

export default TOC;