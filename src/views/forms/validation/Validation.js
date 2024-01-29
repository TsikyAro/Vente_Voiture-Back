import React, { useState } from 'react'
// import imageCompression from 'browser-image-compression'
// import pako from 'pako'
import './Validation.css'
import { DataView } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import useObject from 'src/hooks/object';
import myphoto from '../../../assets/images/sary.jpg';
import DateDifferenceComponent from 'src/element/Difference';
import Dialogue from 'src/element/Dialogue';
const Validation = () => {
    const [products] = useObject("annonce");
    console.log(products);
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     let data = localStorage.getItem("products");
    //     if(data){
    //         data = JSON.parse(data);
    //         setProducts(data);
    //         console.log(data);

    //     }else{
    //         getProduct();
    //         console.log("atooooo");
    //     }
    // }, []);
   
    
    // const getProduct=()=>{
    //     const valeur = UtiliserObject("annonce");
    //     valeur.then(response=>{
    //         console.log("eeeeeeeeeeeeeeeeeeeeeeeee");
    //         console.log(response);
    //         setProducts(response);
    //         localStorage.setItem("products",JSON.stringify(response));
    //     } );
    // };
//   const images =[
//       {"image":saryImage,"category":"vetement","name":"Casquette","price": "15000"},
//       {"image":sary1Image,"category":"vetement","name":"Chaussure","price": "16000"},
//       {"image":saryImage,"category":"vetement","name":" Bas","price": "19000"},  
//   ]
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState('');
  const sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
  ];
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
                            <Dialogue product={product}></Dialogue>
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