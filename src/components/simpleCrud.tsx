import React, { useState, useEffect } from "react";
import axios from "axios";
function SimpleCrud() {
  const inititialition: string = "1";
  const initPost = {
        userId:"",
        id:"",
        title: "",
        body:""
  }
  const [post, setPost] = useState(initPost);
  const [id, setId] = useState(inititialition);
  const [idFromButtonClick, setIdFormButtonClick] = useState(inititialition);
  const handleClick = () => {
    setIdFormButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        {" "}
        Get Data by Id
      </button>
      <div>{post}</div>
    </div>
  );
}
export default SimpleCrud;
