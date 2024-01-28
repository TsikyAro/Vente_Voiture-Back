// const jsonData = [
  //   {
  //     userName: 'Moe Almaw',
  //     userPhoto: '../../../assets/images/sary.jpg',
  //     postTime: '3 days ago',
  //     postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //     postImage: 'path/to/image1.jpg',
  //     buttons: [{ label: 'Button 1' }, { label: 'Button 2' }],
  //   },
  //   {
  //     userName: 'Tsiky Aro',
  //     userPhoto: '../../../assets/images/sary.jpg',
  //     postTime: '1 days ago',
  //     postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
  //     postImage: 'path/to/image1.jpg',
  //     buttons: [{ label: 'Button 1' }, { label: 'Button 2' }],
  //   },
  //   // ... Autres objets du tableau
  // ]
  // const [base64Image, setBase64Image] = useState('')
  // const [compressedData, setCompressedData] = useState('')
  // const [decompressedData, setdecompressedData] = useState('')
  // const displayImageDimensions = (file) => {
  //   const dimensions = imageSize(file)
  //   console.log('Image Dimensions:', dimensions)
  // }
  // const handleImageChange = async (e) => {
  //   const file = e.target.files[0]

  //   if (file) {
  //     const options = {
  //       maxSizeMB: 1,
  //       maxWidthOrHeight: 900,
  //       quality: 0.5,
  //     }
  //     try {
  //       const compressedFile = await imageCompression(file, options)
  //       const base64String = await convertToBase64(compressedFile)
  //       const compressedData = pako.gzip(base64String, { to: 'string' })
  //       console.log(compressedData)
  //       setBase64Image(base64String)
  //       const decompressedData = pako.ungzip(compressedData, { to: 'string' })
  //       setdecompressedData(decompressedData)
  //       console.log('Texte décompressé :', decompressedData)
  //     } catch (error) {
  //       console.error('Error compressing image:', error)
  //     }
  //   }
  // }

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.onload = () => resolve(reader.result.split(',')[1])
  //     reader.onerror = (error) => reject(error)
  //     reader.readAsDataURL(file)
  //   })
  // }
  // return (
  //   <div className="container">
  //     {jsonData.map((postData, index) => (
  //       <div key={index} className="post">
  //         <div className="post--row post--user flex align-items-center">
  //           <img
  //             className="avatar"
  //             src={`data:image/jpeg;base64,${base64Image}`}
  //             alt={postData.userName}
  //           />
  //           <div className="name-title">
  //             <div className="name">{postData.userName}</div>
  //             <div className="time">{postData.postTime}</div>
  //           </div>
  //         </div>
  //         <p className="post--row post--text">{postData.postText}</p>
  //         <div className="post--row post--image">
  //           <img src={`data:image/jpeg;base64,${decompressedData}`} alt="Compressed" />
  //         </div>
  //         <div className="d-grid gap-2 col-6 mx-auto my-3">
  //           {postData.buttons.map((button, buttonIndex) => (
  //             <CButton key={buttonIndex} color="secondary">
  //               {button.label}
  //             </CButton>
  //           ))}
  //         </div>
  //       </div>
  //     ))}
  //     <div>
  //       <input type="file" onChange={handleImageChange} />
  //       {base64Image && (
  //         <div>
  //           <img src={`data:image/jpeg;base64,${base64Image}`} alt="Compressed" />
  //           <p>Compressed Image (Base64)</p>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // )