import './App.css'
import PageCard from './PageCard'
import HomeLink from './HomeLink'

function App() {

  return (
    <>

<HomeLink/>

      {/* Text */}
      <div className="text-center mx-auto">
        <h1 className="mt-24">Welcome to Accessibible Demonstrations</h1>
        <div className='mt-12'>
          <p className='mt-4'>This set of pages will cover all kinds of common barriers people experience on the web.</p>
          <p className='mt-4'>Each page will consist of simple explanations of the topic, demonstrations so you can step into the shoes
            of somebody running into that particular barrier, as well as code samples to provide concrete suggestions for
            preventing these issues in the first place.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4 mt-12">
        <PageCard name="Keyboard" iconPath="./assets/keyboardIcon.png" iconAlt='Keyboard Icon from Icons8.com' />
        <PageCard name="Color Contrast" iconPath="./assets/contrastIcon.png" iconAlt='Color Contrast Icon from Icons8.com' />
      </div>
    </>
  )
}

export default App
