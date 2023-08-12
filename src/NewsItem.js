import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div className='d-flex justify-content-end position-absolute end-0'>
                    <span className='badge rounded-pill bg-danger' >{source}</span>
                </div>
                <img src={!imageUrl ? "https://www.gannett-cdn.com/presto/2022/08/11/USAT/36384061-7b3e-457b-b76a-0b948ba7e92b-AP_Election_2020_Pennsylvania_Vote_Counting.jpg?crop=2599,1462,x0,y93&width=660&height=370&format=pjpg&auto=webp" : imageUrl} className="card-img-top" alt="show news" style={{ height: '33vh' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
