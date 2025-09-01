import { UseAppDispatch, UseAppSelector } from "../../../../app/hooks"
import { reddit_url } from "../../../../app/variables";
import { fetchPosts } from "../../../../features/posts/fetchPosts";
import "./PopularPostsButton.css";

export default function PopularPostsButton() {

    const currentPostsArrayName = UseAppSelector(state => state.posts.currentPostsArrayName);
    const dispatch = UseAppDispatch();

    const handleClick = () => {
        dispatch(fetchPosts({fetchUrl: `${reddit_url}/r/popular.json`, newName: 'popular' }))
    }

    return (
        <div className={`PopularPostsButton-${currentPostsArrayName}`}>

            <span className="underline" onClick={handleClick}>Popular</span>

        </div>
    )
}
