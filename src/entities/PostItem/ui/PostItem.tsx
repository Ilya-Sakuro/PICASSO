import type { FC } from 'react';
import { IPost } from 'redux/services/types';
import styles from './PostItem.module.scss';

interface IPostItemProps {
    post: IPost;
}
export const PostItem: FC<IPostItemProps> = ({ post }) => {
    return (
        <li className={styles.postItem}>
            <div className={styles.ids}>№{post.id}</div>
            <div className={styles.title}> {post.title}</div>
            <div className={styles.body}>
                {post.body.length > 100
                    ? post.body.substring(0, 99) + '...'
                    : post.body}
            </div>
        </li>
    );
};
