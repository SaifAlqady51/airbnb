import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './App.css';



function App() {
  const cards = data.map(item => {
    return(
      <Card 
        key={item.id}
        {...item}
      />
    )

  })

  return (
    <div className="App">
      <Nav />
      <Hero />

      <section className='card'>
        {cards}

      </section>


    </div>
  );

}

export default App;
