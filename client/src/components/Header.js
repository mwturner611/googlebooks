import React from "react";


function Header() {
    return(
        <div>
            <nav className="navbar navbar-light" style={{backgroundColor:'#e3f2fd'}}>
  <a className="navbar-brand" href="/">GoogleBooks</a>
    
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active align-middle" href="/">Search</a>
      <a className="nav-item nav-link align-middle" href="/saved">Saved Books</a>
      
    </div>
  </div>
</nav>
</div>
    );
}

export default Header;