import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.postData);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  const post = posts.find(p => p.id === parseInt(id));

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!post && posts.length > 0) return <div className="error">Post not found</div>;
  if (!post) return null;

  const imgSrc = `https://picsum.photos/200?random=${post.id}`;

  return (
    <div className="detail-container">
      <h2>Details Page For Post With ID {post.id}</h2>
      <img src={imgSrc} alt="Post cover" className="detail-img" />
      <div className="detail-info">
        <p className="detail-user-id">User Id : {post.userId}</p>
        <p className="detail-title">Title : {post.title}</p>
        <p className="detail-body">Body : {post.body}</p>
      </div>
    </div>
  );
};

export default Detail;
