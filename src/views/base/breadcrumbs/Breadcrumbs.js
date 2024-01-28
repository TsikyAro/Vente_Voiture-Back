import React,{ useState }  from 'react'
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

const Breadcrumbs = () => {
  const [nom,setNom]=useState();
  const OnClickButton = ()=>{
   const data ={
     nom
   }
   useAddObject("marque",data);
   console.log(data);
 }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <h3>Insertion Marque Voiture</h3>
            <DocsExample href="forms/floating-labels">
              <CFormFloating className="mb-3">
                <CFormInput type="text" id="floatingInput" placeholder="Nom model voiture"  value={nom} onChange={(e)=>{setNom(e.target.value)}}/>
                <CFormLabel htmlFor="floatingInput">Nom marque voiture</CFormLabel>
                <CButton type="submit" className="mb-5 my-3" onClick={()=>{OnClickButton()}}>
                  Valider
                </CButton>
              </CFormFloating>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
