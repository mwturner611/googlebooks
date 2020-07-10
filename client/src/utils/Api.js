import axios from "axios";

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
    }
};