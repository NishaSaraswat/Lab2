import React from 'react'
import { useGlobalContext } from '../../context/NewsContext'
import {
    StoriesContainer,
    StoryCard,
    StoryInfo,
    StoryLinks
  } from '../styles/Stories.styles'


function Stories() {
 
    const {hits, isLoading, removePost} = useGlobalContext();

    if(isLoading){
        return(
            <h1> Loading.....</h1>
    )
    }
    
  return (
    <StoriesContainer>
    <h2>Tech News Posts</h2>
    {hits.map((curPost, index)=>{
        const {title, author, objectID, url, num_comments} = curPost;
        return(
            <StoryCard key={objectID}>
                <h2>{title}</h2>
                <StoryInfo>
                    By <span>{author}</span> | <span>{num_comments} </span>comments
                </StoryInfo>
                <StoryLinks>
                    <a href={url} target='_blank'> Read More </a>
                    <a href='#' onClick={()=>removePost(objectID)}>Remove</a>
                </StoryLinks>
            </StoryCard>
        )
    })}
   </StoriesContainer>
  )
}

export default Stories