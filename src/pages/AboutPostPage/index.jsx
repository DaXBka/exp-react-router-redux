import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import cl from './AboutPostPage.module.scss';

const AboutPostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`).then(res => setPost(res.data));
    }, []);

    const goBack = () => navigate(-1);

    return (
        <div className={cl.root}>
            <div className="container">
                <div className={cl.post}>
                    <h1>{post.name}</h1>
                    <p>{post.body}</p>
                </div>
                <button onClick={goBack}>Back</button>
            </div>
        </div>
    );
};

export default AboutPostPage;
