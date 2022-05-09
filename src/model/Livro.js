import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id:{type:String},
        titulo:{type:String, required:true},
        Autor:{type:String, required:true},
        idioma:{type:String, required:true},
        paginnas:{type:Number}
    }
);
                                  //Banco de dados que criei, e se não criei,vai criar automatico o que colocar aqui.
const livros = mongoose.model('livros',livroSchema)
                                           //lista com os parâemtros que estou pedindo.
export default livros