import './App.css';

function App() {

  const name = 'Ideolino Agostinho' //Criar uma variável e atribuir valor

  const newName = name.toUpperCase() //Transformar o nome em maiúsculo

  const url = 'https://via.placeholder.com/150'

  function sum(a, b){ //Função soma
    return a+b;
  }

  return (
    <div className="App">
        <h2>Alterando o JSX</h2>
        <p>Olá, {name}</p>
        <p>Upper: {newName}</p> 
        <p>Soma: {sum(2, 5)}</p>
        <div>
          <img src={url} alt="Imagem de teste" />
        </div>
    </div>
  );
}

export default App;
