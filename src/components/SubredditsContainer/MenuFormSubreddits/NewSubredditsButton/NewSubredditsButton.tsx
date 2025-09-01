import { UseAppDispatch, UseAppSelector } from "../../../../app/hooks"
import { reddit_url } from "../../../../app/variables";
import { fetchSubreddits } from "../../../../features/subreddits/fetchSubreddits";
import "./NewSubredditsButton.css";

export default function NewSubredditsButton() {

    const currentArrayName = UseAppSelector(state => state.subreddits.currentArrayName);
    
    const dispatch = UseAppDispatch();

    const handleClick = () => {
        dispatch(fetchSubreddits({fetchUrl: `${reddit_url}/subreddits/new.json`, newName: 'new'}));
    }

    return (
        <div className={`NewSubredditsButton-${currentArrayName}`}>

            <span 
                className="underline"
                onClick={handleClick}
            >
                New
            </span><br />

        </div>
    )
}
