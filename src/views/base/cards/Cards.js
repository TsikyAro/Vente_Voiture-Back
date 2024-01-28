import React from 'react'
import {
  CCard,
  CCardBody,
  CButton,
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

// import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h3>Insertion Categorie Voiture</h3>
            <DocsExample href="forms/floating-labels">
              <CFormFloating className="mb-3">
                <CRow className="my-3">
                  <CCol md>
                    <CFormFloating>
                      <CFormInput
                        type="email"
                        id="floatingInputGrid"
                        placeholder="Nombre de Place"
                      />
                      <CFormLabel htmlFor="floatingInputGrid">Nombre de Place</CFormLabel>
                    </CFormFloating>
                  </CCol>
                </CRow>
                <CRow className="my-3">
                  <CCol md>
                    <CFormFloating>
                      <CFormInput
                        type="email"
                        id="floatingInputGrid"
                        placeholder="Poids du Voiture"
                      />
                      <CFormLabel htmlFor="floatingInputGrid">Poids du Voiture</CFormLabel>
                    </CFormFloating>
                  </CCol>
                </CRow>
                <CButton type="submit" className="mb-5">
                  Envoyer
                </CButton>
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
