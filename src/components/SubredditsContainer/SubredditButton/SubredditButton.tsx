
export default function SubredditButton(props: any) {

    const { subreddit } = props;

    const handleClick = () => {
        
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
