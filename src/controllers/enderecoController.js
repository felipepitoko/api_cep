import consultaCep from "../services/consultaCep.js"

class EnderecoController{
    async consultarCep(req,res){
        try{
            const {cep_desconhecido = null} = req.params

            if(!cep_desconhecido) return res.status(400).json({
                mensagem: 'Favor inserir um cep valido para a busca!',
                cep_desconhecido
            })

            const digitos_validos = cep_desconhecido.replace(/[^0-9]/g,'')

            const endereco = await consultaCep.consultar(digitos_validos)

            if(!endereco) return res.status(404).json({
                mensagem: 'Nao foi encontrada correspondencia para esse CEP!',
                cep_requisitado: cep_desconhecido
            })
            
            res.set('Content-Type', 'text/xml')
            return res.status(200).send(endereco)
        }
        catch(error){
            console.log(error)
            return res.status(500).json({
                mensagem: 'Erro interno ao tratar da requisicao',
                erro: error
            })
        }
    }
}

export default new EnderecoController()