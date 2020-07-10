import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/Api";

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
    <div>It's the Saved Books page!</div>
)


}

export default Saved;