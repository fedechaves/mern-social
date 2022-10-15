import React from 'react';

export default function PostPreview({ _id, image }) {
	return (
		<li className="col-6 justify-content-between mt-5">
			<a href={`/post/${_id}`}>
				<img className="img-fluid" src={image} />
			</a>
		</li>
	)
}