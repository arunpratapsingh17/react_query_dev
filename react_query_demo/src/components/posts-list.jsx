import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { fetchPosts } from '../api/api';

const PostsList = () => {
    const { 
        data:posts,
        isLoading, 
        isError, 
        status, 
        error
    } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts
      });
    
    console.log("debugger ", posts, status)
  return (
    <div>PostsList
        <div>
            {isLoading && <p>...loading</p>}
            {isError && <p>{error?.message}</p>}
            {posts?.map((post) => (
                <div>
                    TITLE - {post.title}
                </div>
            ))}
        </div>
    </div>
  )
}

export default PostsList