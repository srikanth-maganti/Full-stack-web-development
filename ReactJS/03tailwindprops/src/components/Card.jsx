
import React from 'react';
function Card({username="unknown",post="software dev"})
{
    return(
        <div>
                <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div className="pt-6 space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quod.
                    </p>
                    </blockquote>
                    <figcaption className="font-m">
                    <div>
                       {username}
                       {/* {username|| "unknown"} => not scalable*/}
                    </div>
                    <div>
                        {post}
                    </div>
                    </figcaption>
                </div>
                </figure>

        </div>
    )
}

export default Card;