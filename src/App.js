import React from 'react'
import BlogList from './BlogList'
import Footer from './Footer'
import Header from './Header'
//stylesheet
import "./Style.css"

function App(){
    return(
        <div>
            <Header />
            <BlogList />
            <div className="buttonContainer">
                <button>OLDER POSTS <span className="arrow">&#8594;</span></button>
            </div>
            <Footer />
        </div>
    )
}

export default App