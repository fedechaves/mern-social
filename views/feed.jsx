import React from 'react';
import Main from './components/Main.jsx';

export default function Feed(props) {
	return (
		<Main>
			<div class="container">
				<div class="row justify-content-center mt-5">
					<ul class="row list-unstyled">
						{props.posts.map(post =>
							<li className="col-6 justify-content-between mt-5">
								<a href={`/post/${post._id}`}>
									<img class="img-fluid" src={post.image} />
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</Main>
	)
}