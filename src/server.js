const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')


const routes = require('./routes')

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-yhegu.mongodb.net:27017,cluster0-shard-00-01-yhegu.mongodb.net:27017,cluster0-shard-00-02-yhegu.mongodb.net:27017/omnistack9?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333);