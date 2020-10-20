import React from 'react';

const Gitreposite = ({id, name, avatar_url, watchers_count  }) => {
    return (
        <>
           <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <hr/>
                    <h3><img src="https://img.icons8.com/material-outlined/30/000000/id-verified.png" alt="icon"/> {id}</h3>
                    <h3><img src="https://img.icons8.com/ios-glyphs/30/000000/visible.png" alt="icon"/> {watchers_count}</h3>
                    <img src={avatar_url} alt={name} className="img-fluid"></img>
                    <br />
                </div>
            </div>
        </div>
        </>
    )
}

export default Gitreposite;