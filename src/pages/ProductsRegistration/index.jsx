import { useEffect, useState } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalAddProduct } from '../../components/ModalAddProduct';
import { ModalEditProduct } from '../../components/ModalEditProduct';

import './styles.css'

export function ProductsRegistration() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  function handleModalIsOpen() {
    setModalIsOpen(!modalIsOpen)
  }

  function handleEditModalIsOpen() {
    setEditModalIsOpen(!editModalIsOpen)
  }

  // function sendReferenceId(id) {
  //   handleEditModalIsOpen()
  //   localStorage.setItem('@idReferenceToUpdate', id)
  // }

  // function shortLink(link) {
  //   let formatLink = link.slice(0, 27)
  //   formatLink = formatLink.split('')
  //   formatLink.push('...')

  //   return formatLink
  // }

  return (
    <>
      <Header />
      <ModalAddProduct
        isOpen={modalIsOpen}
        setIsOpen={handleModalIsOpen}
      />
      <ModalEditProduct
        isOpen={editModalIsOpen}
        setIsOpen={handleEditModalIsOpen}
      />

      <div className="container">
        <div className="topContent">
          <h1 className='title'>Cadastro de produtos</h1>
          <p className='addProduct' onClick={handleModalIsOpen}>
            <FiPlus /> Novo Produto
          </p>
        </div>

        <div className="tableContent">
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Título</th>
                <th>Valor Unit.</th>
                <th>Categoria</th>
                <th>Fornecedor(a)</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='staticInfo'>Imagem enviada</td>
                <td>Título</td>
                <td>R$ 10,00</td>
                <td>Categoria</td>
                <td>Fornecedor(a)</td>
                <td className="edit">
                  <FiEdit
                    size={20}
                    onClick={handleEditModalIsOpen}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </td>
                <td className="delete">
                  <FiTrash
                    size={20}
                    onClick={() => {}}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}