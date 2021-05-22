import React from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

const Home = () => {
	return (
		<>
			<section id="header" className="d-flex align-items-center">
				<div className="container-fluid nav bg" >
  					<div className=''>
  						<div className="">
  							<div className="">
  								<p className="lpfir">
  									<strong>An Invitation To Take The Next Step On Your 
  									Transformational Parenting Journey</strong>
								</p>
								<h1 className="mv-type--headline3 mt-8" style={{color: 'white',textAlign: "center"}}>
								<strong>Join A Global Family Of Passionate Parents, As We 
								Uplift Each Other Through Knowledge & Love</strong></h1>
								<h2 className="mv-type--subheadline5 mt-8" style={{color: 'white',textAlign: "center"}}>Claim your 7 days of FREE access
								 to the Little Humans membership community, plus our entire library of trainings .
								 </h2>
								 <div className="App-video">
								 <ReactPlayer url='https://www.youtube.com/embed/2cj-QGRtPWE'/>
								 </div>
  							</div>
  						</div>
  					</div>
  				</div> 			
			</section>
		</>
		);
};

export default Home;