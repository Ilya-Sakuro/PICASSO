import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPostByIdQuery } from 'redux/services/posts';
import { Post } from '../ui/Post';
import styles from './PostContainer.module.scss';
interface PostContainerProps {}

export const PostContainer: FC<PostContainerProps> = () => {
    const { id } = useParams();
    const { data: post, isLoading } = useFetchPostByIdQuery(id!);

    if (!post) {
        return null;
    }
    if (isLoading) {
        return <h1 className={styles.loading}>Loading...</h1>;
    }
    return <Post number={post.id} title={post.title} body={post.body} />;
};
