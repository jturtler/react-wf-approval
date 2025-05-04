// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainBody from './components/MainBody'

function App() {

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <MainBody />
      <Footer />
    </div>
  )
}

export default App
