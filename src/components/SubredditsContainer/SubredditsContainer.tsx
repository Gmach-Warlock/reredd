import { useEffect } from "react";
import { UseAppDispatch, UseAppSelector } from "../../app/hooks";
import MenuButtonSubreddits from "./MenuButtonSubreddits/MenuButtonSubreddits";
import SubredditButton from "./SubredditButton/SubredditButton";
import "./SubredditsContainer.css";
import { fetchSubreddits } from "../../features/subreddits/fetchSubreddits";
import { reddit_url } from "../../app/variables";
import MenuFormSubreddits from "./MenuFormSubreddits/MenuFormSubreddits";

export default function SubredditsContainer() {

    const currentArray = UseAppSelector(state => state.subreddits.currentArray);
    const dispatch = UseAppDispatch();
    const subredditsMenuIsVisible = UseAppSelector(state => state.subreddits.subredditsMenuIsVisible);
    
    
    useEffect(() => {
        dispatch(fetchSubreddits({fetchUrl: `${reddit_url}/subreddits/popular.json`, newName: 'popular'}))
    }, [])
    

    return (
        <div className='SubredditsContainer'>

            <div className="menu">

                <div>
                    <span>Subreddits</span>
                </div>

                <div>
                    <MenuButtonSubreddits />
                </div>

            </div>

            {subredditsMenuIsVisible && <div>
                <MenuFormSubreddits />    
            </div>}

            {currentArray.length !== 0
                ?
                    <div className="container">

                        {currentArray.map((subreddit: any) => <SubredditButton 
                            subreddit={subreddit}
                            key={subreddit.id}
                        />)}

                    </div>
                :
                    <span>Something went wrong loading subreddits!!!</span>
            }

        </div>
    )
}
