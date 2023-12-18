import React, {useMemo, useState} from "react";
import './styles/global.css'
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import {usePosts} from "./hooks/usePosts";
import styles from "./styles/App.module.css";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Первый пост', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {id: 2, title: 'Второй пост', body: 'Nullam sollicitudin malesuada tincidunt'},
        {id: 3, title: 'Третий пост', body: 'Nunc ut mi id nibh placerat venenatis ac a eros'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);

    const sortedPosts = usePosts(posts, filter.sort, filter.query);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className={styles.app}>
            <Button onClick={() => setModal(true)}>
                Добавить пост
            </Button>

            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
        </div>
  );
}

export default App;
