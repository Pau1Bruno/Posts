import React from 'react';
import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styles from "./PostList.module.css";

const PostList = ({posts, remove}) => {

    if (!posts.length) {
        return <h1>Посты не найдены!</h1>
    }

    return (
        <div className={styles.container}>
            <h1>Посты:</h1>

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;