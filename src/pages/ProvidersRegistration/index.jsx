import { useEffect, useState } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalAddProviders } from '../../components/ModalAddProviders';
import { ModalEditProviders } from '../../components/ModalEditProviders';

import api from '../../services/api';

import './styles.css'

export function ProvidersRegistration() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  const [providers, setProviders] = useState([])
  
  useEffect(() => {
    async function getProviders() {
      const response = await api.get('/fornecedor')
      setProviders(response.data)
    }

    console.log(providers)
    getProviders()
  }, [])

  async function handleDeleteProvider(id) {
    await api.delete(`/delete_fornecedor?id=${id}`, {
    })

    const recountProviders = providers.filter(provider => provider.id !== id)
    setProviders(recountProviders)
  }

  function handleModalIsOpen() {
    setModalIsOpen(!modalIsOpen)
  }

  function handleEditModalIsOpen() {
    setEditModalIsOpen(!editModalIsOpen)
  }

  function sendReferenceId(id) {
    handleEditModalIsOpen()
    localStorage.setItem('@idReferenceToUpdateProvider', id)
  }

  return (
    <>
      <Header />
      <ModalAddProviders
        isOpen={modalIsOpen}
        setIsOpen={handleModalIsOpen}
      />
      <ModalEditProviders
        isOpen={editModalIsOpen}
        setIsOpen={handleEditModalIsOpen}
      />

      <div className="container">
        <div className="topContent">
          <h1 className='title'>Cadastro de fornecedores</h1>
          <p className='addProviders' onClick={handleModalIsOpen}>
            <FiPlus /> Novo Fornecedor
          </p>
        </div>

        <div className="tableContent">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>CNPJ</th>
                <th>Telefone</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.nome}</td>
                  <td>{provider.email}</td>
                  <td>{provider.cnpj}</td>
                  <td>{provider.telefone}</td>
                  <td className="edit">
                    <FiEdit
                      size={20}
                      onClick={() => sendReferenceId(provider.id)}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  </td>
                  <td className="delete">
                    <FiTrash
                      size={20}
                      onClick={() => handleDeleteProvider(provider.id)}
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