import React from 'react';
import { createContext, useState } from "react";
import blogdata from "../data/blogdata";

export const BlogContext = createContext();

export const BlogProvider = props => {
       const [blog,setBlog] = useState(blogdata);
    return (
        <BlogContext.Provider value={[blog,setBlog]}>
             {props.children}
        </BlogContext.Provider>
    )
}