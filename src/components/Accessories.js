import React, { useState, useRef } from "react";
import "../styles/test.css";

export default function Accessories() {
  const books = [
    {
      author: "Chinua Achebe",
      country: "Nigeria",
      language: "English",
      pages: 209,
      title: "Things Fall Apart",
      year: 1958,
    },
    {
      author: "Dante Alighieri",
      country: "Italy",
      language: "Italian",
      pages: 928,
      title: "The Divine Comedy",
      year: 1315,
    },
  ];

  const author = useRef();
  const title = useRef();
  const country = useRef();
  const language = useRef();
  const year = useRef();
  let book;
  const search = () => {
    book.filter((book) => book.year);
  };

  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <div className="row">
            <label>author</label>
            <input
              ref={author}
              onChange={search}
              type="text"
              className="author"
            />
          </div>
          <div className="row">
            <label>title</label>
            <input
              ref={title}
              onChange={search}
              type="text"
              className="title"
            />
          </div>
          <div className="row">
            <label>country</label>
            <input
              ref={country}
              onChange={search}
              type="text"
              className="country"
            />
          </div>
          <div className="row">
            <label>language</label>
            <input
              ref={language}
              onChange={search}
              type="text"
              className="language"
            />
          </div>
          <div className="row">
            <label>year</label>
            <input ref={year} onChange={search} type="text" className="year" />
          </div>
        </div>
        <div>
          {book.map((item) => (
            <li>{item.year}</li>
          ))}
        </div>
        {/* <h1>Hello {book && book.author}</h1> */}
        {/* <div className="book">
          <div className="line">
            <small className="key">author</small>
            <small className="value">{book.author}</small>
          </div>
          <div className="line">
            <small className="key">country</small>
            <small className="value">{book.country}</small>
          </div>
          <div className="line">
            <small className="key">language</small>
            <small className="value">{book.language}</small>
          </div>
          <div className="line">
            <small className="key">pages</small>
            <small className="value">{book.pages}</small>
          </div>
          <div className="line">
            <small className="key">title</small>
            <small className="value">{book.title}</small>
          </div>
          <div className="line">
            <small className="key">year</small>
            <small className="value">{book.year}</small>
          </div>
        </div> */}
      </div>
    </>
  );
}
