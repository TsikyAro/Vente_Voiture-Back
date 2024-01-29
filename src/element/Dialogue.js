import React,{useState} from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import { Avatar } from "primereact/avatar";
import myphoto from '../assets/images/sary.jpg';
import { Galleria } from "primereact/galleria";
import saryImage from '../assets/images/sary.jpg';
import sary1Image from '../assets/images/sary2.jpg';
import { Divider } from "primereact/divider";
// import useObject from "src/hooks/object";
export default function Dialogue(product){
    console.log("---------------------------");
    console.log(product.product);
    const images =[
        {"image":saryImage,"category":"vetement","name":"Casquette","price": "15000"},
        {"image":sary1Image,"category":"vetement","name":"Chaussure","price": "16000"},
        {"image":saryImage,"category":"vetement","name":" Bas","price": "19000"},  
    ]
    const itemTemplates = (item) => {
        return <img src={item.image} alt="hu" style={{ width: '100%', display: 'block' }} />;
    };
    const [idAnnonce,setIdAnnonce] = useState();
    console.log(idAnnonce);
    const OnClickButton = (idAnnonces)=>{
        setIdAnnonce(idAnnonces);
        console.log(idAnnonces+"id annonce");
        console.log(idAnnonce);
        // useObject("annonce/validation/"+idAnnonce);
    }
    const [visible, setVisible] = useState(false);
    const headerElement = (product)=>{
        return(
          <div className="inline-flex align-items-center justify-content-center gap-2">
              <Avatar image={myphoto} className="mr-2" size="xlarge" shape="circle" />
              <span className="font-bold white-space-nowrap">{product.product.personne.nom} {product.product.personne.prenoms}</span>
          </div>
        );
      };
      const footerContent = (idAnnonce) =>{
        return(
          <div>
              <Button label="Valider" icon="pi pi-check" onClick={() => OnClickButton(idAnnonce)} autoFocus />
          </div>
        );
      };
    return(
        <>
            <Button label="Voir Detail" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header={()=>headerElement(product)} visible={visible} style={{ width: '50vw' }}  onHide={() => setVisible(false)} footer={()=>footerContent(product.product.id)}>
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
                <h1>{product.product.voiture.marque.nom} : {product.product.voiture.modele.nom}</h1>
                <div className="text-700">Conssomation : {product.product.voiture.detailsVoiture.consommation} à 10 litre</div>
                <div className="text-700">Etat-interieur : {product.product.voiture.detailsVoiture.etat_interieur}/10</div>
                <div className="text-700">Etat-exterieur : {product.product.voiture.detailsVoiture.etat_exterieur}/10</div>
                <div className="text-700">Kilometrage: {product.product.voiture.detailsVoiture.kilometrage} km</div>
                <div className="text-700">Nombre de Place: {product.product.voiture.detailsVoiture.nbplaces }</div>
                <div className="text-700">Nombre de Porte: {product.product.voiture.detailsVoiture.nbportes } portes</div>
                <div className="text-700">Transmission: {product.product.voiture.detailsVoiture.transmission.nom }</div>
                <div className="text-700">Carburant: {product.product.voiture.detailsVoiture.carburant.nom }</div>
                </div>
                </div>
            </Dialog>
        </>
    );
}