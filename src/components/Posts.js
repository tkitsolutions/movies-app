import React from 'react'
import { useQuery } from 'react-query'
import FetchPosts from './FetchPosts'
import { BiMessageRounded } from 'react-icons/bi';
import { BsAirplaneEngines } from 'react-icons/bs';
import { PiCornersOutLight } from 'react-icons/pi';

const Posts = () => {
    const resp=useQuery("posts",FetchPosts);

    if(resp.isLoading) {
        console.log('Files are Loading...')
    }
    else if(resp.isError){
        console.log('there is an error in fetching file')
    }
    else{ 
        
        console.log('Files are Loaded Successfully!')
        
        return (
    <div>
        {
            resp.data?.map((post,index)=>{
                    return <li key={index}>{post.title}</li>;
            })
        }
    </div>
  )}
}

export default Posts