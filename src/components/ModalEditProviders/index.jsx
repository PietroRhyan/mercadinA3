import { Modal } from '../Modal'

import api from '../../services/api'

import './styles.css'

export function ModalEditProviders({ isOpen, setIsOpen }) {  
  function cleanForms() {
    const forms = document.querySelectorAll('input')

    forms.forEach((form) => {
      form.value = ''
    })
  }

  const handleSubmit = async (event) => {
    const nome = event.target.nome.value
    const email = event.target.email.value
    const cnpj = event.target.cnpj.value
    const telefone = event.target.telefone.value

    const idReference = localStorage.getItem('@idReferenceToUpdateProvider')

    await api.put('/update_fornecedor', {
      nome,
      email,
      cnpj,
      telefone,
      "id": idReference,
    })
    
    localStorage.removeItem('@idReferenceToUpdateProvider')
    setIsOpen()
  }

  return(
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form action="" onSubmit={handleSubmit} className='modalForm'>
        <label htmlFor="nome">Nome</label>
        <input type='text' id='nome' maxLength={100} placeholder='Digite um título' required/>

        <label htmlFor="email">E-mail</label>
        <input type='email' id='email' maxLength={100} placeholder='Digite um email' required/>

        <label htmlFor="cnpj">CNPJ</label>
        <input type='text' id='cnpj' maxLength={100} placeholder='XX.XXX.XXX/0001.XX' required/>

        <label htmlFor="telefone">Telefone</label>
        <input type='text' id='telefone' placeholder='XX XXXXX-XXXX' required/>

        <div className='modalButtonGroup'>
          <button type='button' className='cancelButton' onClick={cleanForms}>
            Cancelar
          </button>
          <button type='submit' className='confirmButton'>
            Confirmar
          </button> 
        </div>
      </form>
    </Modal>
  )
}