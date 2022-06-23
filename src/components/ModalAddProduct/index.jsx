import { useEffect, useState } from 'react'
import { Modal } from '../Modal'

import api from '../../services/api'

import './styles.css'

export function ModalAddProduct({ isOpen, setIsOpen }) {
  const [providers, setProviders] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getInfo() {
      let response = await api.get('/fornecedor', {})
      setProviders(response.data)

      response = await api.get('/categoria', {})
      setCategories(response.data)
    }

    getInfo()
  }, [])

  function cleanForms() {
    const forms = document.querySelectorAll('input')

    forms.forEach((form) => {
      form.value = ''
    })
  }

  const handleSubmit = async (event) => {
    const nome = event.target.titulo.value
    const valor = event.target.valorUnit.value
    const quantidade = event.target.quantidade.value
    const IDcategoria = event.target.categoria.value
    const IDfornecedor = event.target.fornecedor.value
    const link = event.target.linkImagem.value

    await api.post('/cadastro_produtos', {
      nome,
      valor,
      quantidade,
      IDcategoria,
      IDfornecedor,
      link,
    })

    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form action="" onSubmit={handleSubmit} className='modalForm'>
        <label htmlFor="titulo">Título</label>
        <input type='text' id='titulo' maxLength={100} placeholder='Digite um título' required />

        <label htmlFor="valorUnit">Valor Unit.</label>
        <input type='number' id='valorUnit' placeholder='400 = 4,50' required />

        <label htmlFor="quantidade">Quantidade</label>
        <input type='number' id='quantidade' placeholder='Digite a quantidade' required />

        <label htmlFor="categoria">Categoria</label>
        <select name='categoria' id='categoria'>
        {categories.map((category) => (
          <option  key={category.id} value={category.id}>{category.categoria}</option>
        ))}
        </select>

        <label htmlFor="fornecedor">Fornecedor(a)</label>
        <select name='fornecedor' id='fornecedor' >
        {providers.map((provider) => (
          <option key={provider.id} value={provider.id}>{provider.nome}</option>
        ))}
        </select>

      <label htmlFor="linkImagem">Link da Imagem</label>
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
    </Modal >
  )
}