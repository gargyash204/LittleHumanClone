import React from 'react';
import '../App.css';
import { Link } from 'react-scroll'

const Sse = () => {
	return(
		<>
  				<div className="navbar col-xs-7 mt-5 mb-4">
     		      <Link activeClassName="actscr" to="group_1" spy={true} smooth={true} duration={500} delay={10}>
  					Why This Program
				  </Link>
				  <Link activeClassName="actscr"  to="group_2" spy={true} smooth={true} duration={500} delay={10}>
					   Meet Your Trainers
				  </Link> 
				  <Link activeClassName="actscr"  to="group_3" spy={true} smooth={true} duration={500} delay={10}>
					   What You'll Learn
				  </Link>
				  <Link activeClassName="actscr"  to="group_4" spy={true} smooth={true} duration={500} delay={10}>
					   Membership Information
				  </Link>
				  <Link activeClassName="actscr"  to="group_5" spy={true} smooth={true} duration={500} delay={10}>
					   What Parents Say
				  </Link>
				  <Link activeClassName="actscr"  to="group_6" spy={true} smooth={true} duration={500} delay={10}>
					   Become A Member
				  </Link>
				  <Link activeClassName="actscr"  to="group_7" spy={true} smooth={true} duration={500} delay={10}>
					   FAQs
				  </Link>
    		   </div>
		</>
	);
};

export default Sse;