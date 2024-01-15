import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Product_list from "./pages/product_list/Product_list";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import './root.css'
import Blog from "./pages/blog/Blog";
export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Product_list />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}