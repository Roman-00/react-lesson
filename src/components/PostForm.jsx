import React from 'react';

import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";

export const PostForm = ({ create }) => {
    const [post, setPost] = React.useState({title: '', body: ''});


      {/* Получаем данные с неуправляемого компонента */}

    //const bodyInputRef = React.useRef();

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({title: '', body: ''});

        //console.log('newPost', newPost);
        //console.log('bodyInputRef', bodyInputRef.current.value);

    };

    return (
        <form>
            {/* Управляемый компонент */}
            <MyInput
                value={post.title}
                type="text" 
                placeholder="Название поста"
                onChange={e => setPost({...post, title: e.target.value})}
            />

            { /* Неуправляемый компонент */ }
            {/*<MyInput 
                ref={bodyInputRef}
                type="text" 
                placeholder="Описание поста"
            /> */}


            <MyInput
                value={post.body} 
                type="text" 
                placeholder="Описание поста"
                onChange={e => setPost({...post, body: e.target.value})}
            />

            <MyButton onClick={addNewPost}>
                Создать пост
            </MyButton>

        </form>
    )


};