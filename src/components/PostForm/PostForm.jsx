import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import "./PostForm.module.css"

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: '',});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: '',});
    }

    return (
        <form>
            <Input
                onChange={e => setPost({...post, title: e.target.value})}
                value={post.title}
                type="text"
                placeholder="Название поста"
            />

            <Input
                onChange={e => setPost({...post, body: e.target.value})}
                value={post.body}
                type="text"
                placeholder="Описание поста"
            />

            <Button onClick={addNewPost}>Создать пост</Button>
        </form>
    );
};

export default PostForm;