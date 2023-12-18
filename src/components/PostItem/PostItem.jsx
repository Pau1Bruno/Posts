import React from 'react';
import Button from "../UI/Button/Button";
import styles from "./PostItem.module.css";
import "../../styles/transition-group.css";

const PostItem = ({remove, number, post}) => {
    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <strong>{number}. {post.title}</strong>
                <p>
                    {post.body}
                </p>
            </div>

            <div>
                <Button onClick={() => remove(post)}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;

