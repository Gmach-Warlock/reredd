import { UseAppDispatch, UseAppSelector } from "../../../../app/hooks"
import { reddit_url } from "../../../../app/variables";
import { fetchPosts } from "../../../../features/posts/fetchPosts";
import "./RisingPostsButton.css";

export default function RisingPostsButton() {

    const dispatch = UseAppDispatch();
    const currentPostsArrayName = UseAppSelector(state => state.posts.currentPostsArrayName)

    const handleClick = () => {
        dispatch(fetchPosts({fetchUrl: `${reddit_url}/rising.json`, newName: 'rising'}));
    }

    return (
        <div className={`RisingPostsButton-${currentPostsArrayName}`}>

            <span className="underline" onClick={handleClick}>Rising</span>  

        </div>
    )
}
