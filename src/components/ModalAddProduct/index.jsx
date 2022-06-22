import { Modal } from '../Modal'

import './styles.css'

export function ModalAddProduct({ isOpen, setIsOpen }) {
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
        <label htmlFor="titulo">Título</label>
        <input type='text' id='titulo' maxLength={100} placeholder='Digite um título' required/>

        <label htmlFor="valorUnit">Valor Unit</label>
        <input type='number' id='valorUnit' maxLength={100} placeholder={12.90} required/>

        <label htmlFor="categoria">Categoria</label>
        <input type='text' id='categoria' maxLength={100} placeholder='Digite um nome para a categoria' required/>

        <label htmlFor="fornecedor">Fornecedor(a)</label>
        <input type='text' id='fornecedor' placeholder='Digite o nome do fornecedor(a)' required/>

        <label htmlFor="linlImagem">Link da Imagem</label>
        <input type='text' id='linkImagem' placeholder='Cole aqui o link da imagem' />

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