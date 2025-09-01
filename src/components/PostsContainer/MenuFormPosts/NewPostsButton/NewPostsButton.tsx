import { UseAppDispatch, UseAppSelector } from "../../../../app/hooks"
import { reddit_url } from "../../../../app/variables";
import { fetchPosts } from "../../../../features/posts/fetchPosts";
import "./NewPostsButton.css";

export default function NewPostsButton() {

    const currentPostsArrayName = UseAppSelector(state => state.posts.currentPostsArrayName);
    const dispatch = UseAppDispatch();

    const handleClick = () => {
        dispatch(fetchPosts({fetchUrl: `${reddit_url}/new.json`, newName: 'new'}));
    }

    return (
        <div className={`NewPostsButton-${currentPostsArrayName}`}>

            <span className="underline" onClick={handleClick}>New</span>
            
        </div>
    )
}
