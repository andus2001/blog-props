import React from "react"



function BlogPost(props){
    
    return(
        <div className="blogs">
            <div className="blogTitle">
                <h1 >{props.title}</h1>
                <h2 >{props.subTitle}</h2> 
            </div>
                 
           <p>Posted by: <span classList="author"><i>{props.author}</i></span> on {props.date}</p>
           
        </div>
    )
}

export default BlogPost