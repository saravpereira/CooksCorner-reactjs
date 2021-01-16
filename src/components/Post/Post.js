import React from 'react';
import Aux from '../../hoc/Aux/Aux'

import './Post.css';

const post = (props) => (

    <Aux>

        <section id="one" className="wrapper style1">
				<div className="inner">
					<article className="feature left">
						<span className="image"><img src={props.imageURL} alt="" /></span>
						<div className="content">
							<h2>{props.name}</h2>
							<p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                            <button className="button alt" onClick={props.readMore}>More</button>
						</div>
					</article>
				
				</div>
			</section>

    </Aux>    
    );
    

    

export default post;