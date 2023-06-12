import React from 'react'
import '../assets/styles/modal.css'

const AccountAddComponent = ({
  // modal input alanlari
  link,
  name,
  description,
  // modal input handler
  handleLink,
  handleName,
  handleDescription,
  // modal goster/gizle
  handleClose,
  handleSave
}) => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body modal-container">
              {/* X kapatma ikonu */}
              <div className="close-icon-container">
                <div className="close-icon" onClick={handleClose}>
                  +
                </div>
              </div>

              {/* Link */}
              <div className="form-group">
                <label htmlFor="social-link">Sosyal Medya Linki</label>
                <input
                  id="social-link"
                  type="text"
                  className="form-control"
                  value={link}
                  onChange={(e) => handleLink(e.target.value)}
                />
              </div>

              {/* Ad */}
              <div className="form-group">
                <label htmlFor="social-name">Sosyal Medya Adı</label>
                <input
                  id="social-name"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => handleName(e.target.value)}
                />
              </div>

              {/* Aciklama */}
              <div className="form-group">
                <label htmlFor="social-description">Açıklama</label>
                <input
                  id="social-description"
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => handleDescription(e.target.value)}
                />
              </div>
            </div>

            {/* Vazgec ve Kaydet butonlari */}
            <div className="modal-footer">
              <button
                className="btn btn-primary cancel-button"
                onClick={handleClose}
              >
                Vazgeç
              </button>
              <button
                className="btn btn-primary save-button"
                onClick={handleSave}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountAddComponent
