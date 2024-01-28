import React,{useState} from 'react'
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
import useAddObject from 'src/hooks/addObject';
const FormControl = () => {
  const [nom,setNom]=useState();
  const [pourcentage_commission,setPourcentage_commission]=useState();
  const OnClickButton = ()=>{
  const data ={
    nom,
    pourcentage_commission
  }
  useAddObject("bouquet",data);
   console.log(data);
 }
  return (
  <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardBody>
          <h3>Insertion Comission</h3>
          <DocsExample href="forms/floating-labels">
            <CFormFloating className="mb-3">
              <CRow className="my-3">
                <CCol md>
                  <CFormFloating>
                    <CFormInput
                      type="text"
                      id="floatingInputGrid"
                      placeholder="Nom Comission"
                      value={nom} onChange={(e)=>{setNom(e.target.value)}}
                    />
                    <CFormLabel htmlFor="floatingInputGrid">Nom Comission</CFormLabel>
                  </CFormFloating>
                </CCol>
              </CRow>
              <CRow className="my-3">
                <CCol md>
                  <CFormFloating>
                    <CFormInput
                      type="text"
                      id="floatingInputGrid"
                      placeholder="Montant Comission"
                      value={pourcentage_commission} onChange={(e)=>{setPourcentage_commission(e.target.value)}}
                    />
                    <CFormLabel htmlFor="floatingInputGrid">Montant Comission</CFormLabel>
                  </CFormFloating>
                </CCol>
              </CRow>
              <CButton type="submit" className="mb-5" onClick={()=>{OnClickButton()}}>
                Inserer
              </CButton>
            </CFormFloating>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default FormControl
