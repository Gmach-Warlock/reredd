import { useEffect } from "react";
import { UseAppDispatch, UseAppSelector } from "../../app/hooks"
import Post from "./Post/Post";
import { fetchPosts } from "../../features/posts/fetchPosts";
import { reddit_url } from "../../app/variables";
import MenuButtonPosts from "./MenuButtonPosts/MenuButtonPosts";
import MenuFormPosts from "./MenuFormPosts/MenuFormPosts";

export default function PostsContainer() {

    const dispatch = UseAppDispatch();

    const currentArray = UseAppSelector(state => state.posts.currentPostsArray);
    const menuIsVisible = UseAppSelector(state => state.posts.menuIsVisible);

    useEffect(() => {
        dispatch(fetchPosts({newName: 'popular', fetchUrl: reddit_url + `/r/popular.json`}))
    }, [])

    return (
        <div className="PostsContainer">

            <div className="menu-button-posts flex mx-1 between">

                <div className="js-end">
                    <MenuButtonPosts />
                </div>

                <div>Posts</div>

                <div></div>

            </div>

            {menuIsVisible && <div className="menu-form-posts">
                <MenuFormPosts />
            </div>}

            <div className="container">
                {currentArray.map((post: any) => <Post 
                    post={post}
                    key={post.id}
                    
                />)}
            </div>

        </div>
    )
}
