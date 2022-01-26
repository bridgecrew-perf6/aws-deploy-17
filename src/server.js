const express = require("express")

const app = express()
app.use(express.json())

const data = [
  {
    "id":1,
    "title":"le petit prince",
    "price":125
  }
]

app.get("/", (req, res) => {
  return res.status(200).send("<h1>ola</h1>")
})

app.get("/book", (req, res) => {
  return res.status(200).json({
    "books":data
  })
})

app.get("/book/:id", (req, res) => {
  const {id} = req.params

  data.forEach(book => {
    if (book.id === parseInt(id)){
      return res.status(200).json({
        "book":book
      })
    }
  })

  return res.status(404).json({
    "data":"no book"
  })
})

app.post("/book", (req, res) => {
  const {title, price} = req.body

  const newBook = {
    id: data.length + 1,
    title: title,
    price: price
  }

  data.push(newBook)

  return res.status(201).json({"data": newBook})

})

app.listen(3333, () => {
  console.log("server running 🚀")
})
