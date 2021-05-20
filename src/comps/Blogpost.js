import React from 'react'

export default function Blogpost(props) {

    let time = new Date();
    let postDate = new Date(props.postDate);
    let elapsedDays = time.getTime() - postDate.getTime();
    let displayTime = Math.ceil(elapsedDays / (86400000));



    return (
        <div>
            <div className="card mt-3">
                <div className="card-header">
                    <em>{props.genre}</em>
  </div>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <hr width='20%' />
                    <div className="card-text">
                    {props.content.map(el => 
                    <p>{el}</p>)}
                    </div>
                </div>
                <div className="card-footer text-muted">
                    
                    Posted {displayTime} days ago.
  </div>
            </div>

        </div>
    )
}
