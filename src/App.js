
import './App.css';
import React, { useState } from 'react';
import TOC from './component/TOC';
import ReadContent from './component/ReadContent';
import Subject from './component/Subject';
import Control from './component/Control';
import CreateContent from './component/CreateContent';
import UpdateContent from './component/UpdateContent'

function App() {
  let max_content_id = 3;
  const [title] = useState("WEB");
  const [sub] = useState("World Wide Web");
  const [contents, setContent] = useState([
    { id: 1, title: "HTML", desc: "HTML is ..." },
    { id: 2, title: "CSS", desc: "CSS is ..." },
    { id: 3, title: "JavaScript", desc: "JavaScript is ..." }
  ]);
  const [mode, setMode] = useState("welcome");
  const [selected_content_id, setSelected_content_id] = useState(2);
  const [welcome] = useState({ title: "welcome", desc: "Hello, React!" })

  function getReadContent() {
    for (let i = 0; i < contents.length; i++) {
      let data = contents[i];
      if (data.id === selected_content_id) {
        return data;
      }
    }
  }
  function getContent() {
    let _title, _desc, _article, _content = null;
    if (mode === "welcome") {
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (mode === 'read') {
      _content = getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (mode === 'create') {
      _article = <CreateContent onSubmit={(_title, _desc) => {
        max_content_id = max_content_id + 1;
        let _contents = contents.concat({ id: max_content_id, title: _title, desc: _desc });
        setContent(_contents);
        setMode("read")
        setSelected_content_id(max_content_id)
      }} ></CreateContent>
    } else if (mode === 'update') {
      _content = getReadContent()
      _article = <UpdateContent
        data={_content}
        onSubmit={(_id, _title, _desc) => {
          let _contents = Array.from(contents)
          for (let i = 0; i < _contents.length; i++) {
            if (_contents[i].id === _id) {
              _contents[i] = { id: _id, title: _title, desc: _desc }
            }
          }
          setContent(_contents);
          setMode("read");
        }} ></UpdateContent>
    } return _article;
  }

  return (
    <div>
      <Subject
        title={title}
        sub={sub}
        onChangePage={
          () => {
            setMode("welcome");
          }
        }
      >
      </Subject>
      <TOC
        data={contents}
        onChangePage={(id) => {
          setSelected_content_id(Number(id));
          setMode("read");
        }}
      ></TOC>
      <Control onChangeMode={(_mode) => {
        if (_mode === "delete") {
          if (window.confirm("정말 삭제하시겠습니까?")) {
            const deletedContentId = selected_content_id;
            let _contents = Array.from(contents);
            for (let i = 0; i < _contents.length; i++) {
              if (_contents[i].id === deletedContentId) {
                _contents.splice(i, 1);
                setSelected_content_id(_contents[0].id)
              }
            }
            setMode("welcome");
            setContent(_contents)
            alert("삭제되었습니다.")
          }
        } else {
          setMode(_mode);
        }
      }}
      ></Control>
      {getContent()}
    </div>
  )
};

export default App;