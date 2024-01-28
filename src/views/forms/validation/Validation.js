import React, { useEffect, useState } from 'react'
// import imageCompression from 'browser-image-compression'
// import pako from 'pako'
import './Validation.css'
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import UtiliserObject from 'src/hooks/object';
import myphoto from '../../../assets/images/sary.jpg';
import { Dialog } from 'primereact/dialog';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { Galleria } from 'primereact/galleria';
import saryImage from '../../../assets/images/sary.jpg';
import sary1Image from '../../../assets/images/sary2.jpg';
import DateDifferenceComponent from 'src/element/Difference';


const Validation = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("products");
        if(data){
            data = JSON.parse(data);
            setProducts(data);
            console.log(data);

        }else{
            getProduct();
            console.log("atooooo");
        }
    }, []);
   
    
    const getProduct=()=>{
        const valeur = UtiliserObject("annonce");
        valeur.then(response=>{
            console.log("eeeeeeeeeeeeeeeeeeeeeeeee");
            console.log(response);
            setProducts(response);
            localStorage.setItem("products",JSON.stringify(response));
        } );
    };
  const images =[
      {"image":saryImage,"category":"vetement","name":"Casquette","price": "15000"},
      {"image":sary1Image,"category":"vetement","name":"Chaussure","price": "16000"},
      {"image":saryImage,"category":"vetement","name":" Bas","price": "19000"},  
  ]
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState('');
  const sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
  ];
  const itemTemplates = (item) => {
    return <img src={item.image} alt="hu" style={{ width: '100%', display: 'block' }} />;
  };
  const onSortChange = (event) => {
      const value = event.value;

      if (value.indexOf('!') === 0) {
          setSortOrder(-1);
          setSortField(value.substring(1, value.length));
          setSortKey(value);
      } else {
          setSortOrder(1);
          setSortField(value);
          setSortKey(value);
      }
  };

  const header = () => {
      return <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} className="w-full sm:w-14rem" />;
  };
  const headerElement = (product)=>{
    return(
      <div className="inline-flex align-items-center justify-content-center gap-2">
          {/* <Avatar image={myphoto}  shape="circle" /> */}
          <Avatar image={myphoto} className="mr-2" size="xlarge" shape="circle" />
          <span className="font-bold white-space-nowrap">{product.personne.nom} {product.personne.prenoms}</span>
      </div>
    );
  };
 
  const [visible, setVisible] = useState(false);
  const [idAnnonce,setIdAnnonce] = useState();
  const OnClickButton =(idAnnonces)=>{
    setIdAnnonce(idAnnonces)
    console.log(idAnnonces+"id annonce");
    console.log(idAnnonce);
  }
    const footerContent = (idAnnonce) =>{
      return(
        <div>
            <Button label="Valider" icon="pi pi-check" onClick={() => OnClickButton(idAnnonce)} autoFocus />
        </div>
      );
    };

  const itemTemplate = (product, index) => {
    
    return (
          <div className="col-12" key={product.id}>
              <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                  <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={myphoto} alt={product.name} />
                  <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                      <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                          <div className="text-1xl  font-bold text-400">{product.personne.nom} {product.personne.prenoms}</div>
                          <div className="text-2xl font-bold text-900">{product.voiture.marque.nom} : {product.voiture.modele.nom}</div>
                          <div className="text-1xl  font-bold text-400"><DateDifferenceComponent product={product}></DateDifferenceComponent></div>
                        
                      </div>
                      <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                          <span className="text-2xl font-semibold">${product.voiture.detailsVoiture.prix}</span>
                          <div className="card flex justify-content-center">
                          <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                          <Dialog header={()=>headerElement(product)} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={()=>footerContent(product.id)}>
                          <div className="flex flex-column md:flex-row">
                            <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5" id="galerie">
                                  <Galleria value={images} style={{ Width: '700px' }} showThumbnails={false} showIndicators item={itemTemplates} />
                                  {/* <Galeries images={images}></Galeries> */}
                            </div>
                            <div className="w-full md:w-2">
                                <Divider layout="vertical" className="hidden md:flex">
                                    <b></b>
                                </Divider>
                            </div>
                            <div >
                                <h1>{product.voiture.marque.nom} : {product.voiture.modele.nom}</h1>
                                <div className="text-700">Conssomation : {product.voiture.detailsVoiture.consommation} à 10 litre</div>
                                <div className="text-700">Etat-interieur : {product.voiture.detailsVoiture.etat_interieur}/10</div>
                                <div className="text-700">Etat-exterieur : {product.voiture.detailsVoiture.etat_exterieur}/10</div>
                                <div className="text-700">Kilometrage: {product.voiture.detailsVoiture.kilometrage} km</div>
                                <div className="text-700">Nombre de Place: {product.voiture.detailsVoiture.nbplaces }</div>
                                <div className="text-700">Nombre de Porte: {product.voiture.detailsVoiture.nbportes } portes</div>
                                <div className="text-700">Transmission: {product.voiture.detailsVoiture.transmission.nom }</div>
                                <div className="text-700">Carburant: {product.voiture.detailsVoiture.carburant.nom }</div>
                            </div>
                            </div>
                          </Dialog>
                      </div> 
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  const listTemplate = (items) => {

    // console.log("erere");
    // console.log(items);


      if (!items || items.length === 0) return null;

      let list = items.map((product, index) => {
          return itemTemplate(product, index);
      });

      return <div className="grid grid-nogutter">{list}</div>;
  };

  return (
      <div className="card">
        {/* <h1>coucouuu</h1> */}
          <DataView value={products} listTemplate={() => listTemplate(products)} header={header()} sortField={sortField} sortOrder={sortOrder} />
      </div>
  )
}
export default Validation