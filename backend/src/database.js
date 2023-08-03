const mongoose = require('mongoose')

// Forma 1 de conectarse localmente
// mongoose.connect('mongodb://localhost/angular-auth',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(db => console.log('Database is connected'))
//     .catch(error => console.log(error))

// Forma 2 de conectarse directamente a la nube
// mongoose.connect('',{})
//     .then(db => console.log('Database is connected'))
//     .catch(error => console.log(error))

// Forma 3 de conectarse directamente a la nube
const MONGODB_URL = ''

try {
    mongoose.connect(MONGODB_URL);
    
    mongoose.connection.on("connected", () => {
        console.log("Mongoose is connected");
    });
    
    mongoose.connection.on("disconnected", () => {
        console.log("Mongoose is disconnected");
    });
} catch (error) {
    console.error(error);
}
