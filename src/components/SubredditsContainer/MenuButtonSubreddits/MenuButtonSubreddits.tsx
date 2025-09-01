import { UseAppDispatch } from "../../../app/hooks"
import { toggleSubredditsMenu } from "../../../features/subreddits/subredditsSlice";

export default function MenuButtonSubreddits() {

    const dispatch = UseAppDispatch();

    const handleClick = () => {
        dispatch(toggleSubredditsMenu());
    }

    return (
        <div 
            className='MenuButtonSubreddits'
            onClick={handleClick}
        >

            <i className="fa-solid fa-bars"></i>

        </div>
    )
}
