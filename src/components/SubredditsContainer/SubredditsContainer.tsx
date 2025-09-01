import { useEffect } from "react";
import { UseAppDispatch, UseAppSelector } from "../../app/hooks";
import MenuButtonSubreddits from "./MenuButtonSubreddits/MenuButtonSubreddits";
import SubredditButton from "./SubredditButton/SubredditButton";
import "./SubredditsContainer.css";
import { fetchSubreddits } from "../../features/subreddits/fetchSubreddits";
import { reddit_url } from "../../app/variables";

export default function SubredditsContainer() {

    const currentArray = UseAppSelector(state => state.subreddits.currentArray);
    const dispatch = UseAppDispatch();

    
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

            {currentArray.length !== 0
                ?
                    <div className="container">

                        {currentArray.map((subreddit: any) => <SubredditButton 
                            subreddit={subreddit}
                        />)}

                    </div>
                :
                    <span>Something went wrong loading subreddits!!!</span>
            }

        </div>
    )
}
