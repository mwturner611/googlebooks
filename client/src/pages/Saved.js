import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/Api";
import Header from "../components/Header";
import Description from "../components/Description";
import Results from "../components/Results";


function Saved(){
const [books, setBooks] = useState([])

// load books and store them in setbooks
useEffect(() => {
    loadBooks()
}, [])

function loadBooks(){
    API.getBooks()
        .then(res => 
            setBooks(res.data)
        )
        .catch(err => console.log(err));
};

function deleteBook(id) {
    API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
};



return (

    <div>
        <Header/>
        <Description/>
        <div className="Container-fluid">
          {books.map (book => (
            <Results
            imageLinks ={book.image}
            infoLink={book.link}
            title={book.title}
            authors={book.authors}
            description={book.description}
            Button={() => (
              <button onClick={() => deleteBook(book._id)} type="button" className="btn btn-danger">Delete</button>
            )}
            />
          ))}
        
        </div>
        </div>
)


}

export default Saved;