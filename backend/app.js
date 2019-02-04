const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Aceess-Control-Allow-Header", "Origin, X-Requested-with, Content-type, Accept");
  res.setHeader("Acess-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/posts',(req, res, next) => {
  const posts = [
    { id: "bhalchandra",
    title: "First server-side post",
    content: "This is coming from the baroda's richest couple"},
    { id: "kuntalTapan",
    title: "Second server-side post",
    content: "This is coming from the Kuntal maharaja's server "},
    { id: "KuntalJyoti",
    title: "Third server-side post",
    content: "This is coming from the serve"},
    { id: "KuntalVenuji",
    title: "Fourth server-side post",
    content: "This is coming from the serve"}
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});


module.exports = app;
