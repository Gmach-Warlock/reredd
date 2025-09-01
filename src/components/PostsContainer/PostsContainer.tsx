import { useEffect } from "react";
import { UseAppDispatch, UseAppSelector } from "../../app/hooks"
import Post from "./Post/Post";
import { fetchPosts } from "../../features/posts/fetchPosts";
import { reddit_url } from "../../app/variables";
import MenuButtonPosts from "./MenuButtonPosts/MenuButtonPosts";

export default function PostsContainer() {


    const dispatch = UseAppDispatch();

    const currentArray = UseAppSelector(state => state.posts.currentPostsArray);

    useEffect(() => {
        dispatch(fetchPosts({newName: 'popular', fetchUrl: reddit_url + `/r/popular.json`}))
    }, [])

    return (
        <div className="PostsContainer">

            <div className="menu flex mx-1 between">

                <div className="js-end">
                    <MenuButtonPosts />
                </div>

                <div className="js-center">Posts</div>

                <div></div>

            </div>

            <div className="container">
                {currentArray.map((post: any) => <Post 
                    post={post}
                    key={post.id}
                />)}    
            </div>

        </div>
    )
}
