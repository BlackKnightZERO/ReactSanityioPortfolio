import React, {useState, useEffect} from 'react';
import sanityClient from '../../Client.js';

function Post() {

    const [postData, setPost] = useState(null);

    useEffect = () => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data) => setPost(data))
            .catch(console.error);
    }

    return (
        <div>
            <h1>Post</h1>
        </div>
    );
}

export default Post;