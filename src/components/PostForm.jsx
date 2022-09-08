import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        type="text"
        placeholder="описание поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      <MyButton onClick={addNewPost}>Создать </MyButton>
    </form>
  );
};

export default PostForm;
