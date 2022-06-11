import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import SkeletonPost from '../../components/Post/Skeleton';

import cl from './AboutPage.module.scss';

const AboutPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments', {
                onUploadProgress: function (e) {
                    console.log(e);
                },
            })
            .then(res => setPosts(res.data));
    }, []);

    return (
        <div className={cl.root}>
            <div className="container">
                <h1>AboutPage</h1>
                <section className={cl.posts}>
                    {posts.length > 0
                        ? posts.map(post => <Post className={cl.post} post={post} />)
                        : [...new Array(6)].map((_, i) => <SkeletonPost key={i} />)}
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
