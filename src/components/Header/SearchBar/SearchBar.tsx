import { useState } from "react";
import { UseAppDispatch } from "../../../app/hooks";
import { fetchPosts } from "../../../features/posts/fetchPosts";
import { reddit_url } from "../../../app/variables";
import { store } from "../../../app/store";

export default function SearchBar() {

    const [searchTerms, setSearchTerms] = useState('');

    const dispatch = UseAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerms(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(fetchPosts({fetchUrl: reddit_url + `/r/popular.json`, newName: 'popular'}))
        
        console.log(searchTerms);
        console.log(store.getState())
        setSearchTerms('');
    }

    return (
        <div className='SearchBar'>

            <form 
                action="/"
                name="search-form"
                id="search-form"
                title="search-form"
                onSubmit={handleSubmit}
            >

                <label htmlFor="search-input"></label>
                <input 
                    type="text"
                    id="search-input" 
                    name="search-input"
                    title="search-input"
                    placeholder="Search Reddit"
                    onChange={handleChange}
                    value={searchTerms}
                />
                <button
                    type="submit"
                    name="search-button"
                    id="search-button"
                    title="search-button"
                    className="search-button button"
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

            </form>
            
        </div>
    )
}
