import { UseAppDispatch } from "../../../app/hooks";
import { reddit_url } from "../../../app/variables";
import { fetchPosts } from "../../../features/posts/fetchPosts";

export default function SubredditButton(props: any) {

    const { subreddit } = props;
    const subredditPostUrl = reddit_url + '/' + subreddit.display_name_prefixed + '.json';
    const dispatch = UseAppDispatch();

    const handleClick = () => {
        dispatch(fetchPosts({fetchUrl: subredditPostUrl, newName: subreddit.display_name_}))
    }

    return (
        <div className='SubredditButton'>

            <button
                type="submit"
                id="subreddit-button"
                name="subreddit-button"
                title="subreddit-button"
                className="subreddit-button button"
                onClick={handleClick}
            >{subreddit.display_name}</button>
            
        </div>
    )
}
