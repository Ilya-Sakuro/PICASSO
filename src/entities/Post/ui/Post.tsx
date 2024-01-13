import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import styles from './Post.module.scss';
interface IPostProp {
    number: number | string;
    title: string;
    body: string;
}

export const Post: FC<IPostProp> = ({ number, title, body }) => {
    const [disable, setDisable] = useState<boolean>(true);
    const [linkTo, setLinkTo] = useState<string>('');

    setTimeout(() => {
        setDisable(false);
        setLinkTo('/');
    }, 3000);

    return (
        <>
            <h1 className={styles.ids}>№{number}</h1>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
            <Link to={linkTo}>
                <button disabled={disable} className={styles.button}>
                    Back
                </button>
            </Link>
        </>
    );
};
