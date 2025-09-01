import { useState } from "react"
import { UseAppDispatch } from "../../../app/hooks";
import { fetchSubreddits } from "../../../features/subreddits/fetchSubreddits";
import { reddit_url } from "../../../app/variables";
import NewSubredditsButton from "./NewSubredditsButton/NewSubredditsButton";
import PopularSubredditsButton from "./PopularSubredditsButton/PopularSubredditsButton";

export default function MenuFormSubreddits() {

    const [searchTerms, setSearchTerms] = useState('');

    const dispatch = UseAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerms(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(fetchSubreddits({fetchUrl: `${reddit_url}/subreddits/search.json?q=${searchTerms}`, newName: 'search'}))

        setSearchTerms('')
    }

    return (
        <div className='MenuFormSubreddits'>

            <div className="searchbar-subreddits">

                <form 
                    action="/"
                    name="search-form-subreddits"
                    id="search-form-subreddits"
                    title="search-form-subreddits"
                    onSubmit={handleSubmit}
                >
                    
                    <label htmlFor="search-input-subreddits"></label>
                    <input 
                        type="text"
                        id="search-input-subreddits"
                        title="search-input-subreddits"
                        name="search-input-subreddits"
                        placeholder="Search subreddits"
                        value={searchTerms}
                        onChange={handleChange}
                        className="w-80"
                    />
                    <button 
                        type="submit"
                        id="search-button-subreddits"
                        title="search-button-subreddits"
                        className="search-button-subreddits button"
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                </form>

            </div>

            <div className="topics">
                <NewSubredditsButton />
                <PopularSubredditsButton />
            </div>

        </div>
    )
}
