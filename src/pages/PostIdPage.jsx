import React from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../services/api'
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../components/UI/Loader/Loader';

export const PostIdPage = () => {

    const [post, setPost] = React.useState({});
    const [comments, setComments] = React.useState([]);

    const params = useParams();

    const [fetchPostById, isLoading, error] = useFetching(async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, errorCom] = useFetching(async(id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    React.useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Comments
            </h1>

            {isComLoading
                ? <Loader />
                :<div>
                    {comments.map(com => (
                        <div key={com.id} style={{margin: '15px 0'}}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    ))}
                </div>
            }

        </div>
    );
};