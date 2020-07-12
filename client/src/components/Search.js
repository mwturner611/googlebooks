import React from "react";


function Search(props) {
    return(
        <form>
        
        <div class="form-group">
          <label for="booksearch">Enter Book Titles below</label>
          <input onChange={props.handleInputChange} type="title" class="form-control" id="exampleInputPassword1" placeholder="My next book!"/>
        </div>
        <button onClick={props.handleFormSubmit} type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
}

export default Search;