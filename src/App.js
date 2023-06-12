import React, { useEffect, useState } from 'react'

import CustomDataGrid from './components/CustomDataGrid'
import Header from './components/Header'
import AccountAddModal from './components/AccountAddModal'

function App() {
  // ekranda gosterilecek veri
  const [accounts, setAccounts] = useState([])

  // modal state i
  const [isModalOpen, setIsModalOpen] = useState(false)

  // form state
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  // form input handle
  const handleLink = (linkInput) => {
    setLink(linkInput)
  }
  const handleName = (nameInput) => {
    setName(nameInput)
  }
  const handleDescription = (descriptionInput) => {
    setDescription(descriptionInput)
  }

  // modal goster - kapat
  const handleModalShow = () => {
    setIsModalOpen(true)
  }
  const handleClose = () => {
    setIsModalOpen(false)
  }

  // eklenen verileri kaydet
  const handleSave = () => {
    const newAccount = {
      link: link,
      name: name,
      description: description
    }
    const updatedAccounts = [...accounts, newAccount]
    localStorage.setItem('accounts', JSON.stringify(updatedAccounts))
    setAccounts(updatedAccounts)
    setIsModalOpen(false)

    // kullanicinin girdigi verileri sifirla
    setLink('')
    setName('')
    setDescription('')
  }

  useEffect(() => {
    const accountsInLocal = JSON.parse(localStorage.getItem('accounts'))

    const fetchAccounts = async () => {
      try {
        // https://example.com/api/v1/accounts --> GET
        const response = await fetch('sampleAccounts.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        const data = await response.json()
        setAccounts(data)
      } catch (error) {
        console.log('Error fetching accounts:', error)
      }
    }

    if (accountsInLocal) {
      setAccounts(accountsInLocal)
    } else {
      fetchAccounts()
    }
  }, [])

  return (
    <div className="App">
      <Header />

      <CustomDataGrid accounts={accounts} handleModalShow={handleModalShow} />

      {isModalOpen && (
        <AccountAddModal
          // modal input degeri
          link={link}
          name={name}
          description={description}
          // modal input handler
          handleLink={handleLink}
          handleName={handleName}
          handleDescription={handleDescription}
          // modal kapatma
          handleClose={handleClose}
          // veriyi kaydetme
          handleSave={handleSave}
        />
      )}
    </div>
  )
}

export default App
