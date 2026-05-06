import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const imgSrc = `https://picsum.photos/200?random=${post.id}`;
  
  // Truncate logic
  const truncatedTitle = post.title.length > 20 ? post.title.substring(0, 20) + '....' : post.title;
  const truncatedBody = post.body.length > 50 ? post.body.substring(0, 50) : post.body;

  const handleClick = () => {
    navigate(`/item/${post.id}`);
  };

  return (
    <div className="post-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={imgSrc} alt="Post cover" />
      <div className="post-card-content">
        <p className="user-id">User ID: {post.userId}</p>
        <p className="post-title">Title : {truncatedTitle}</p>
        <p className="post-body">
          Body :{truncatedBody}
          {post.body.length > 50 && <br />}
          <span className="read-more">Read More...</span>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
