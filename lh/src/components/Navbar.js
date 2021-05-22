import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
  	<>
  		<div className="container-fluid nav bg">
  			<div className='row'>
  				<div className="col-3 mx-auto">
  					<nav className="navba navbar-expand-lg navbar-light">
  						<div className="container-fluid d-flex bd-highlight mb-2">
    						<NavLink activeClassName="menu"  className="navbar-brand mr-auto p-2" to="/home">
    							<img src="https://static.mindvalley.com/public/assets/2020/04/lh_logo_2020.svg" alt="" 
    							width="170" height="80" class="d-inline-block align-text-top"/>
    						</NavLink>
       						<div className="collapse navbar-collapse" id="navbarSupportedContent">
      							<ul className="navbar-nav ml-6">
        							<li className="nav-item px-md-5 p-2">
          								<NavLink activeClassName="menu" className="nav-link" 
          								to="/support" style={{color: 'white'}}>Support</NavLink>
        							</li>
        							<li className="nav-item px-md-1 p-2">
          								<NavLink activeClassName="menu" className="nav-link" 
          								to="/login" style={{color: 'white'}}>Login</NavLink>
        							</li>
      							</ul>
    						</div>
  						</div>
					</nav>
  				</div>
  			</div>
  		</div>
    </>
  );
};

export default Navbar;