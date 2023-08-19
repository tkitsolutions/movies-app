import axios from 'axios'
import React from 'react'

const FetchPosts = async() => {
  
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
}

export default FetchPosts