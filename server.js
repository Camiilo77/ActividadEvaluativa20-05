import express from 'express'

const app=new express
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App corriendo en http://localhost:${PORT}`);
});
