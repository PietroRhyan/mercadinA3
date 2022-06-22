import { useEffect, useState } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalAddProviders } from '../../components/ModalAddProviders';
import { ModalEditProviders } from '../../components/ModalEditProviders';

import './styles.css'

export function ProvidersRegistration() {
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
              <tr>
                <td>Nome</td>
                <td>email@gmail.com</td>
                <td>XX.XXX.XXX/0001-XX</td>
                <td>(XX) XXXXX-XXXX</td>
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