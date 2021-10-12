import React from 'react'
import BlogPost from './BlogPost'
import blogData from './blogData'

function BlogList(){

   const blogDataComponent = blogData.map(blog => <BlogPost 
        key={blog.date} 
        title={blog.title} 
        subTitle={blog.subTitle} 
        author={blog.author}
        date={blog.date} />)

    return(
        <div className="blogListContainer">
            {blogDataComponent}
            
        </div>
    )
}

export default BlogList