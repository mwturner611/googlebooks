import React from "react";


function Search() {
    return(
        <form>
        
        <div class="form-group">
          <label for="booksearch">Enter Book Titles below</label>
          <input type="title" class="form-control" id="exampleInputPassword1" placeholder="Harry Potter"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
}

export default Search;