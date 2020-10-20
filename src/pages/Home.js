import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { HEROKU_BYPASS_CORS, GITREPOS } from './../constants/constants';

import Gitreposite from './../components/gitrepos';

export default function HomePage() {
    const [repoResults, setRepoResults] = useState(undefined);
    const [filteredResults, setFilteredResults] = useState([]);
    const [isResultsFiltered, setIsResultsFiltered] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(HEROKU_BYPASS_CORS + GITREPOS)
            .then((result) => {
                setRepoResults(result.data.items);
                setIsLoading(false)
            })
    }, [])

    const handleFiltering = (input) => {
        let filteredRepoPosts = repoResults.filter((value) => {
            return value.name.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setFilteredResults(filteredRepoPosts)
        setSearchPhrase(input.target.value)
        setIsResultsFiltered(true)
    }
    return (
        (isLoading)? 
    <div className="col-sm-12 text-center">
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f430a36197347.57135ca19bbf5.gif" alt="loading" />
    </div> :
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <br />
                    <h2>GITREPOS</h2>
                    <br />
                    Search for a specific repo...
                    <br />
                </div>
                <form className="Searchbar">
                    <input type='text'
                        name='username'
                        onChange={handleFiltering}
                        className="form-control Searchbar"
                        placeholder="ex.. React, Vue, bootstrap.."
                    />
                    <br />
                    <br />
                </form>
            </div>

            <div className="row">
                {
                    (isResultsFiltered) ?
                        <>
                            <h3 className="col-sm-12">Filtered Results for {searchPhrase}</h3>
                            {
                                (filteredResults.length > 0) ?
                                    filteredResults.map((value, index) => {
                                        let img;
                                        value.imageUrl !== undefined ? img = value.imageUrl : img = 'https://via.placeholder.com/446x520'
                                        return <Gitreposite key={index}
                                            name={value.name}
                                            watchers_count={value.watchers_count}
                                            avatar_url={value.owner.avatar_url}
                                            id={value.id}
                                        />
                                    }) :
                                    <div>No Results</div>
                            }
                        </> :
                        <>
                            {
                                (repoResults !== undefined) ?
                                    repoResults.map((value, index) => {
                                        let img;
                                        value.imageUrl !== undefined ? img = value.imageUrl : img = 'https://via.placeholder.com/446x520'
                                        return <Gitreposite key={index}
                                            name={value.name}
                                            watchers_count={value.watchers_count}
                                            avatar_url={value.owner.avatar_url}
                                            id={value.id}
                                        />
                                    }) :
                                    <div>No Data for Repos yet</div>
                            }
                        </>
                }
            </div>
        </div>
    )
}