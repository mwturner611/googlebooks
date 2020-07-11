import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volums?q=";
const APIKEY = "&key=AIzaSyAWGXutqdtVEBkx9bxqgZ5TgfSz888-w84";
const COUNTRY = "&country=US"

export default {
    // Get all books
    getBooks: function() {
        return axios.get("api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    searchBooks: function(search){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=search' + search);
    }
};