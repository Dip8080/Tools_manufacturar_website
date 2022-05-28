import React from 'react';

const Blog = () => {
    return (
       <div>
            <div>
            <h1 className='text-2xl'>how to increse performence in react app ?</h1>
        <p>
            1.Keeping component state local where necessary
            2.Windowing or list virtualization in React
            3.Lazy loading images in React
        </p>
        </div>

        <div>
            <h1 className='text-2xl'>how does prototypical inheritance work ?</h1>
        <p>
           In programming, we often want to take something and extend it.
For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
Prototypal inheritance is a language feature that helps in that.
        </p>
        </div>
        <div>
            <h1 className='text-2xl'>what is unit test ?</h1>
        <p>
        unit tasting is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected.
        </p>
        </div>
       </div>
    );
};

export default Blog;