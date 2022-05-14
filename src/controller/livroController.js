//importação do 'model' do objeto livro.
import livros from "../model/Livro.js";

class LivroController {

    static listarLivros = (req,res) => {
        livros.find()
        .populate('autor')
        .exec((err,livros) => {
            res.status(200).json(livros)
        })   
    }

    //listar por ID.
    static listarLivroPorId = (req,res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor','nome')
        .exec((err,livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado!`})
            } else{
                res.status(200).send(livros);
            } 
        })
    }

    //Cadastro do Livro
    static cadastrarLivro = (req,res) => {
        let livro = new livros(req.body)

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro! `})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    //atualizar um livro
    static atualizarLivro = (req,res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id,{$set:req.body},(err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            }else{
                res.status(500).send({message: `${err.message} - não atualizado!` })
            }
        })
    }

    //excluir Livro
    static excluirLivro = (req,res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id,(err) => {
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso!'})
            }else{
                res.status(500).send({message: `${err.message} - não excluido!`})
            }
        })
    }

    static listarLivroPorIdioma = (req,res) => {
        const idioma = req.query.idioma
        
        livros.find({'idioma': idioma},{},(err,livros) => {
            if(!err){
                res.status(200).send(livros)
            }else{
                res.status(500).send(err.message)
            }
        })
    }
}

export default LivroController