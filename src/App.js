import React from "react";
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/page';
import { ClassCounter } from "./components/ClassCounter";
import { Counter } from './components/Counter';
import { PostFilter } from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { Loader } from "./components/UI/Loader/Loader";
import { Pagination } from "./components/UI/pagination/pagination";

import './styles/App.css';
import PostService from "./services/api";

export const App = () => {

  const [posts, setPosts] = React.useState([]);

  const [filter, setFilter] = React.useState({ sort: '', query: ''});
  const [modal, setModal] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {

    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const tottalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(tottalCount, limit));

  });

  React.useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {

    setPosts([...posts, newPost]);
    setModal(false);

  };

  const removePost = (post) => {

    setPosts(posts.filter(p => p.id !== post.id));

  };

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  };

  return <div className="container"> 

    <Counter/>
    <ClassCounter />

    <button onClick={fetchPosts}>
      GET POSTS
    </button>

    <MyButton onClick={() => setModal(true)} style={{ margin: '30px 0' }}>
      Создать пост
    </MyButton>

    <MyModal visible={modal} setVisible={setModal}>
     <PostForm create={createPost}/>
    </MyModal>

    <hr style={{ margin: '15px 0' }}/>

    <PostFilter 
      filter={filter} 
      setFilter={setFilter}
    />

    {postError && 
      <h4 style={{ color: 'red' }}>Произошла ошибка: ${postError}</h4>
    }

    {isPostsLoading
      ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px'}}><Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
    }

    <Pagination 
      page={page}
      changePage={changePage}
      totalPages={totalPages}
    />

  </div>

}
