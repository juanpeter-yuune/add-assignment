import React from 'react';
const Navigation = () =>{
    return(
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-3">
          <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ALL TYPES
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                    <a class="nav-link active"  href="#">Popular Products</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Low Price</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">High Price</a>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PRICES
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navigation;