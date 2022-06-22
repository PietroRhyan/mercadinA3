import { Modal } from '../Modal'

import './styles.css'

export function ModalAddProviders({ isOpen, setIsOpen }) {
  function cleanForms() {
    const forms = document.querySelectorAll('input')

    forms.forEach((form) => {
      form.value = ''
    })
  }

  // const handleSubmit = async (event) => {
  //   const titulo = event.target.titulo.value
  //   const autor = event.target.autor.value
  //   const editora = event.target.editora.value
  //   const linkLivro = event.target.linkLivro.value
  //   const linkImagem = event.target.linkImagem.value

  //   await api.post('/cadastro_livros', {
  //     titulo,
  //     autor,
  //     editora,
  //     "link": linkLivro,
  //     "linkimagem": linkImagem,
  //   })

  //   setIsOpen()
  // }

  return(
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form action="" onSubmit={() => {}} className='modalForm'>
        <label htmlFor="titulo">Nome</label>
        <input type='text' id='titulo' maxLength={100} placeholder='Digite um título' required/>

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