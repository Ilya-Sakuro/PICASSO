import { PostContainer } from 'entities/Post/modal/PostContainer';

import { PostItemContainer } from 'entities/PostItem/modal/PostItemContainer';
import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
// import styles from './App.module.scss';

export const App: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<PostItemContainer />} />
            <Route path='/post/:id' element={<PostContainer />} />
        </Routes>
    );
};
