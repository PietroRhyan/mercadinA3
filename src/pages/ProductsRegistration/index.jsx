import { useEffect, useState } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalAddProduct } from '../../components/ModalAddProduct';
import { ModalEditProduct } from '../../components/ModalEditProduct';

import api from '../../services/api'

import './styles.css'

export function ProductsRegistration() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)
  
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    async function getProducts() {
      let response = await api.get('/produto')
      setProducts(response.data)
    }

    getProducts()
  }, [])

  async function handleDeleteProducts(id) {
    await api.delete(`/delete_produto?id=${id}`, {
    })

    const recountProducts = products.filter(product => product.id !== id)
    setProducts(recountProducts)
  }

  function handleModalIsOpen() {
    setModalIsOpen(!modalIsOpen)
  }

  function handleEditModalIsOpen() {
    setEditModalIsOpen(!editModalIsOpen)
  }

  function sendReferenceId(id) {
    handleEditModalIsOpen()
    localStorage.setItem('@idReferenceToUpdateProduct', id)
  }

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
                <th>Qntd.</th>
                <th>Categoria</th>
                <th>Fornecedor(a)</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { products.map((product) => (
                <tr key={product.id}>
                  <td className='staticInfo'>Imagem enviada</td>
                  <td>{product.nome}</td>
                  <td>R$ {product.valor}</td>
                  <td>{product.quantidade}</td>
                  <td>{product.id_categoria}</td>
                  <td>{product.id_fornecedor}</td>
                  <td className="edit">
                    <FiEdit
                      size={20}
                      onClick={() => sendReferenceId(product.id)}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </td>
                  <td className="delete">
                    <FiTrash
                      size={20}
                      onClick={() => handleDeleteProducts(product.id)}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}