module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "ANVFORJGRIVDMSLDCSLVNSLDFJNGSDNASDFASNDVOJNSDOCMA14KIRX4381183RC90CSC8",
    api: process.env.NODE_ENV === "production" ? "https://api.12store.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://12store.com" : "http://localhost:8000"
};