import mongoose from "mongoose";

//mongoose.connect('mongodb+srv://aulaAluraNode:1234@cluster-alura.mg0fu.mongodb.net/DataBase-Aula-Alura?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://aulaAluraNode:<password>@cluster-alura.mg0fu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

let db = mongoose.connection

export default db;