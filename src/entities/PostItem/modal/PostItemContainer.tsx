import { PostItem } from 'entities/PostItem/ui/PostItem';
import { FC, useEffect, useState } from 'react';

import { useFetchAllPostsQuery } from 'redux/services/posts';
import styles from './PostContainer.module.scss';
import { Link } from 'react-router-dom';

export const PostItemContainer: FC = () => {
    const [currentPostStart, setCurrentPostStart] = useState(0);
    const { data: posts, isFetching } = useFetchAllPostsQuery({
        limit: 5,
        start: currentPostStart,
    });

    const [isMyFetching, setIsFetchingDown] = useState(false);
    const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);
    useEffect(() => {
        if (isMyFetching) {
            setCurrentPostStart(prev => {
                return prev < 94 ? prev + 5 : prev;
            });
            setIsFetchingDown(false);
        }
    }, [isMyFetching]);
    useEffect(() => {
        if (isMyFetchingUp) {
            setCurrentPostStart(prev => {
                return prev > 0 ? prev - 5 : prev;
            });
            setIsMyFetchingUp(false);
        }
    }, [isMyFetchingUp]);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    const scrollHandler = (e: Event): void => {
        const eventTarget = e.target as Document;
        if (eventTarget.documentElement.scrollTop < 50) {
            setIsMyFetchingUp(true);
        }
        if (
            eventTarget.documentElement.scrollHeight -
                eventTarget.documentElement.scrollTop -
                window.innerHeight <
            50
        ) {
            setIsFetchingDown(true);
            window.scrollTo(
                0,
                eventTarget.documentElement.scrollHeight +
                    eventTarget.documentElement.scrollTop -
                    300,
            );
        }
    };

    return (
        <ul className={styles.wrapper}>
            {posts?.map(post => (
                <div key={post.id}>
                    <PostItem post={post} />
                    <Link to={`/post/${post.id}`}>
                        <button className={styles.button}>View</button>
                    </Link>
                </div>
            ))}
            {isFetching && <h1 className={styles.loading}>Loading...</h1>}
        </ul>
    );
};
