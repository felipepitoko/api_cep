import axios from 'axios'

class ConsultaCepService{
    async consultar(cep){
        try{
            const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/xml/`)
                .then(response => {
                    if (response.status == 200) return response.data
                    else return null
                })
            
            return endereco
        }
        catch(error){
            console.log(error)
            return null
        }
    }
}

export default new ConsultaCepService()