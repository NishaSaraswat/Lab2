import React from 'react'
import { useGlobalContext } from '../../context'


function Stories() {
 
    const {hits, isLoading} = useGlobalContext();

    if(isLoading){
        return(
            <h1> Loading.....</h1>
    )
    }
    
  return (
    <>
    <h2>Tech News Posts</h2>
    {hits.map((curPost, index)=>{
        const {title, author, objectID, url, num_comments} = curPost;
        return(
            <div key={index}>
                <h2>{curPost.title}</h2>
                <p>
                    By <span>{author}</span> | <span>{num_comments} comments</span>
                </p>
                <div>
                    <a href={url} target='_blank'> Read More </a>
                    <a href='#'>Remove</a>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default Stories