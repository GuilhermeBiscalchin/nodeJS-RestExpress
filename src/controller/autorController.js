//importação do 'model' do objeto autor.
import autores from "../model/Autor.js";

class AutorController {

    static listarAutores = (req,res) => {
        autores.find((err,autores) => {
            res.status(200).json(autores)
        })   
    }

    //listar por ID.
    static listarAutorPorId = (req,res) => {
        const id = req.params.id;

        autores.findById(id,(err,autores) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do Autor não localizado!`})
            } else{
                res.status(200).send(autores);
            } 
        })
    }

    //Cadastro do Autor
    static cadastrarAutor = (req,res) => {
        let autor = new autores(req.body)

        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o Autor! `})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    //atualizar um Autor
    static atualizarAutor = (req,res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id,{$set:req.body},(err) => {
            if(!err){
                res.status(200).send({message: 'Autor atualizado com sucesso!'})
            }else{
                res.status(500).send({message: `${err.message} - não atualizado!` })
            }
        })
    }

    //excluir Autor
    static excluirAutor = (req,res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id,(err) => {
            if(!err){
                res.status(200).send({message: 'Autor removido com sucesso!'})
            }else{
                res.status(500).send({message: `${err.message} - não excluido!`})
            }
        })
    }
}

export default AutorController