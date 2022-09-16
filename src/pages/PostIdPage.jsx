import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getByid(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <h1 style={{ marginTop: 15, marginBottom: 15 }}>You are on page with ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      {isComLoading ? (
        <Loader />
      ) : (
        comments.map((comm) => (
          <div key={comm.id} style={{ marginTop: 15 }}>
            <h4>{comm.email}</h4>
            <h5>{comm.body}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default PostIdPage;
