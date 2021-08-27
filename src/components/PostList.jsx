import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PostItem } from './PostItem';

export const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h3 style={{ textAlign: 'center' }}>
                Post None
            </h3>
        )
    }

    return (
        <>

            <h2 style={{textAlign: 'center', marginTop: '15px'}}>
               {title}
            </h2>

            <TransitionGroup>
                {posts.map((post, index) => (
                    
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>

                ))}
            </TransitionGroup>

        </>
    )

}