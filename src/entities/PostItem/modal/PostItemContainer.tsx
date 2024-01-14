import { PostItem } from 'entities/PostItem/ui/PostItem';
import { FC, useState } from 'react';
import { useFetchAllPostsQuery } from 'redux/services/posts';
import styles from './PostContainer.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

export const PostItemContainer: FC = () => {
    const [currentPostLimit, setCurrentPostLimit] = useState<number>(7);
    const [more, setMore] = useState<boolean>(true);

    const { data: posts, isLoading } = useFetchAllPostsQuery({
        limit: currentPostLimit,
        start: 0,
    });

    const handleLoadMore = () => {
        setCurrentPostLimit(prevLimit => prevLimit + 5);
        if (currentPostLimit >= 100) {
            setMore(false);
        }
    };

    if (isLoading) {
        return <h1 className={styles.loading}>Loading...</h1>;
    }

    return (
        <InfiniteScroll
            dataLength={posts?.length}
            next={handleLoadMore}
            hasMore={more}
            loader={<h1 className={styles.loading}>Loading...</h1>}
        >
            <ul className={styles.wrapper}>
                {posts?.map(post => (
                    <div key={post.id}>
                        <PostItem post={post} />
                        <Link to={`/post/${post.id}`}>
                            <button className={styles.button}>View</button>
                        </Link>
                    </div>
                ))}
            </ul>
        </InfiniteScroll>
    );
};
