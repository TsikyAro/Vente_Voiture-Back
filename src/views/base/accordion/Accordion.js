import React, { useState } from 'react'
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

const Accordion = () => {
  const [nom,setNom]=useState();
 const OnClickButton = ()=>{
  const data ={
    nom
  }
  useAddObject("modele",data);
  console.log(data);
 }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h3>Insertion Model Voiture</h3>
            <DocsExample href="forms/floating-labels">
              <CFormFloating className="mb-3">
                <CFormInput type="text" id="floatingInput" placeholder="Nom model voiture" value={nom} onChange={(e)=>{setNom(e.target.value)}}/>
                <CFormLabel htmlFor="floatingInput">Nom model voiture</CFormLabel>
                <CButton type="submit" className="my-3" onClick={()=>{OnClickButton()}}>
                  Valider
                </CButton >
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
