import { app } from './app.js'

// settings
app.set('port', process.env.PORT || 5000)
app.set('json spaces', 2)
console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 5000}`)


app.listen(app.get('port'))