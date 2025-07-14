require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let localDB = require('./blogsData.js')

// custom middleware
const IDvalidator = (req, res, next) => {
    const blogID = req.params.id
    if (!blogID || isNaN(blogID)) {
        return res.status(400).json({
            message: "invalid request! ID is required."
        })
    }
    next()
}

app.get('/', (req, res) => {
    res.status(200).json({
        message: "ok!!!"
    })
})


app.post('/create_blog', (req, res) => {
    const { content, author } = req.body

    const blog = {
        id: localDB.length + 1,
        author: author,
        content: content,
        date_added: new Date().toLocaleDateString('en-US')
    }

    localDB.push(blog)
    res.status(201).json({
        message: "Blog Created Successfully!",
        content: blog,
    })
})

app.get('/get_blogs', (req, res) => {

    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || localDB.length

    const startIndex = (page - 1) * limit
    const lastIndex = startIndex + limit

    const paginatedBlog = localDB.slice(startIndex, lastIndex)

    res.status(200).json({
        message: "Fetches all blog successfully!",
        time: new Date().toLocaleTimeString(),
        content: paginatedBlog
    })
})


app.get('/get_blog/:id', IDvalidator, (req, res) => {
    const blogID = req.params.id

    if (!blogID) return res.status(400).json({
        message: "invalid request, please try again."
    })

    const foundBlog = localDB.find(b => b.id === parseInt(blogID))

    if (!foundBlog) return res.status(404).json({
        message: "Blog not found!"
    })

    res.status(200).json({
        message: "Blog found successfully!",
        time: new Date().toLocaleDateString(),
        content: foundBlog
    })
})

// delete a blog
app.delete('/delete_blog/:id', IDvalidator, (req, res) => {
    const blogID = parseInt(req.params.id)

    const findBlog = localDB.find(b => b.id === blogID)

    if (!findBlog) {
        return res.status(404).json({
            message: "Blog not found."
        });
    }

    localDB = localDB.filter(d => d.id !== blogID)

    res.status(200).json({
        message: "deleted this blog!",
        time: new Date().toLocaleTimeString(),
        content: findBlog,
    })
})

app.put('/update_blog/:id', IDvalidator, (req, res) => {
    const blogID = parseInt(req.params.id)

    const { id, author, content } = req.body

    const findBlogIndex = localDB.findIndex(b => b.id === blogID)

    if (findBlogIndex === -1) {
        return res.status(404).json({
            message: "Blog not found."
        });
    }

    localDB[findBlogIndex] = {
        ...localDB[findBlogIndex], 
        author,
        content,
        time_modified: new Date().toLocaleTimeString()
    };

    res.status(200).json({
        content: localDB
    })

})


app.listen(PORT, () => {
    console.log(`The server is live at: http://localhost:${PORT}`)
})

