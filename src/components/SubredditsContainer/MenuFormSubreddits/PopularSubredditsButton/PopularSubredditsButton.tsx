import { UseAppDispatch, UseAppSelector } from "../../../../app/hooks"
import { reddit_url } from "../../../../app/variables";
import { fetchSubreddits } from "../../../../features/subreddits/fetchSubreddits";
import "./PopularSubredditsButton.css";

export default function PopularSubredditsButton() {

    const dispatch = UseAppDispatch();
    const currentArrayName = UseAppSelector(state => state.subreddits.currentArrayName);

    const handleClick = () => {
        dispatch(fetchSubreddits({fetchUrl: `${reddit_url}/subreddits/popular.json`, newName: 'popular'}));
    }

    return (
        <div className={`PopularSubredditsButton-${currentArrayName}`}>

            <span 
                className="underline"
                onClick={handleClick}
            >
                Popular
            </span><br />

        </div>
    )
}
