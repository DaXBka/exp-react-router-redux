import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({ className, post }) => {
    const navigate = useNavigate();

    const navigateToId = id => {
        return () => {
            navigate(`${id}`);
        };
    };

    return (
        <div className={className} key={post.id}>
            <div>
                <h2>{post.name}</h2>
                <p>{post.body}</p>
            </div>
            <button onClick={navigateToId(post.id)}>See more</button>
        </div>
    );
};

export default Post;
