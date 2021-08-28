import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Posts } from '../pages/Posts';
import { PostIdPage } from '../pages/PostIdPage';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';

export const privateRoutes = [
    {id: 'home', path: '/', component: Home, exact: true},
    {id: 'about', path: '/about', component: About, exact: true},
    {id: 'posts', path: '/posts', component: Posts, exact: true},
    {id: 'postsId', path: '/posts/:id', component: PostIdPage, exact: true},
    {id: 'notFound', path: '/404', component: NotFound, exact: true},
]

export const publickRoutes = [
    {id: 'login', path: '/login', component: Login, exact: true},
]