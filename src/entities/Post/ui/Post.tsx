import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './Post.module.scss';
interface IPostProp {
    number: number | string;
    title: string;
    body: string;
}

export const Post: FC<IPostProp> = ({ number, title, body }) => {
    return (
        <>
            <h1 className={styles.ids}>№{number}</h1>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
            <Link to={'/'}>
                <button className={styles.button}>Back</button>
            </Link>
        </>
    );
};
