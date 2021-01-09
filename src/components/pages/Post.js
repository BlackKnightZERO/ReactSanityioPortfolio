import React, {useState, useEffect} from 'react';
import sanityClient from '../../client.js';
import { Link } from 'react-router-dom';

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
        }[0]`).then((data) => setPost(data))
            .catch(console.error);
    }

    return (
        <main className="bg-green-100 main-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Blog Posts Page
                </h1>
                <h2 className="text-lg text-greay-600 flex justify-center mb-12">
                    Welcome to my blog posts..
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                            <img 
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt} 
                            className="w-full h-full rounded-r object-cover absolute"
                            />
                            
                            <span className="block relative h-full flex justify-end items-end
                            pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg front-blog px-3 py-4 bg-red-700 rext-red-100 bg-opacity-75">
                                   {post.title} 
                                </h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    
                </div>
            </section>
        </main>
    );
}

export default Post;