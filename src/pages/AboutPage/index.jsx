import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cl from './AboutPage.module.scss';

const AboutPage = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments', {
                onUploadProgress: function (e) {
                    console.log(e);
                },
            })
            .then(res => setPosts(res.data));
    }, []);

    const navigateToId = id => {
        return () => {
            navigate(`${id}`);
        };
    };

    return (
        <div className={cl.root}>
            <div className="container">
                <h1>AboutPage</h1>
                <section className={cl.posts}>
                    {posts.map(post => (
                        <div className={cl.post} key={post.id}>
                            <div>
                                <h2>{post.name}</h2>
                                <p>{post.body}</p>
                            </div>
                            <button onClick={navigateToId(post.id)}>See more</button>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
