import React from 'react';

const PostPreview = ({ _id, image }) => <li className="col-6 justify-content-between mt-5">
	<a href={`/post/${_id}`}>
		<img className="img-fluid" src={image} />
	</a>
</li>

export default PostPreview;