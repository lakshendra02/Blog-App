import React, { useState } from "react";
import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import BlogList from "../components/Home/BlogList";
import { blogList } from "../config/data";
 
const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchSubmit = event=>{
        event.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults=()=>{
        const allBlogs = blogList;
        const filterBlogs = allBlogs.filter((blog) => 
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );

        setBlogs(filterBlogs);
    }

    const handleClearSearch = ()=>{
        setBlogs(blogList);
        setSearchKey('');
    }

    return (
        <div>
            <Header />
            
            <SearchBar 
            value={searchKey} 
            clearSearch={handleClearSearch}
            formSubmit={handleSearchSubmit} 
            handleSearchKey={e=>setSearchKey(e.target.value)}
            />

            <BlogList blogs={blogs} />
        </div>
    );
};
 
export default Home;