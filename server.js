const express = require('express')
const path = require('path')
const app = express()
let port = 8080

if (process.env.NODE_ENV !== 'production') {
    port = 3000
}

app.use(express.static(__dirname))

// TODO: move all site content into a public directory outside of the app's root folder
// app.use(express.static(path.join(__dirname, 'public')))

// ========================================================
// ROUTES
// ========================================================

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// Regex routes for the dashboard allows the server to properly handle 404 pages while the client handles other routes
app.get(/^\/dashboard\/\b(?:billing|activity|settings)\b(?:\/(?=$))?$/i, (req, res) => {

    // Stripe trailing slash on non-directory pages in the dashboard folder so the static middleware doesn't try to serve it
    if (req.url.endsWith('/') && (req.url !== '/dashboard/' || req.url !== '/dashboard') ) {
        res.redirect(301, req.url.substr(0, req.url.length - 1))
    }

    // Routes all paths that are set from the dashboard directory to the main index page
    res.sendFile(path.join(__dirname, '/dashboard/index.html'))
})

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '/signin/index.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/signup/index.html'))
})

app.get('/forgottenpassword', (req, res) => {
    res.sendFile(path.join(__dirname, '/forgottenpassword/index.html'))
})

// ========================================================
// ERROR PAGES
// ========================================================

// Handle 404 errors
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '/error-pages/404.html'))
});
   
// Handle 500 errors
app.use(function(error, req, res, next) {
    res.status(500).sendFile(path.join(__dirname, '/error-pages/500.html'))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})