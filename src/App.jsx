

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import Footer from './components/Footer'; // <- cuando quieras activarlo, descomentá

function App() {
  return (
    <div className="site">
      {/* HEADER fijo arriba */}
      <NavBar />

      {/* CONTENIDO */}
      <ItemListContainer greeting="Bienvenidos a la mejor ferretería del país" />

      {/* FOOTER (opcional, para el futuro)
      <Footer />
      */}
    </div>
  );
}

export default App;

  /*const usuario = {
    name: 'Juan',
    age: "30",
    color: "#639dd3ff"
  };


  function isUserPaymentOK() {
    //......
    return "Todo ok ";
  }

  const sectionStyle = {
    backgroundColor: usuario.color,
    padding: '20px',
    border: '5px',
    borderColor: "Black",
  }

   


    <>
      { <div style={{backgroundColor: usuario.color}}> 

      <section style={sectionStyle} >
      <h1>Hola Mundo </h1>
      <h2>Bienvenidos { usuario.name } a tu dashboard </h2>
      <p>Hola { usuario.name } tienen {usuario.age} años</p>

      <div className="card">
        <p>
          El estado del pago de tu servicio esta {isUserPaymentOK()}
        </p>
      </div>
      <hr/>
      <h2>Componentes</h2>
      <div className="flex-row">
        
      
      //props
      <Items title="Tornillos" price={180.25} img="https://blog.laminasyaceros.com/hs-fs/hubfs/laminasyacerostonillos-4.jpg?width=256&name=laminasyacerostonillos-4.jpg"/>
      <Items title="Tuercas" price={200.20} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_tR-wnjRje1ixIEPegWgxs5n3g5TrtaMHE03N9eN6V2enbNdHdVUI_fr8_Nd0ZSNfHo&usqp=CAU"/>
      <Items title="Clavos" price={124.00} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO-VLmlEXG1g2aolUN2zjWKPSXX94AbjJ_A&s"/>
      </div>
      
      </section> 
    </>
  )
}
export default App */
