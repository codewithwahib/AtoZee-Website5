import Products from './lowvoltageswitchgearpanels'
// import TopBar from '@/app/Components/topbar' // Lowercase filename as per your structure
import Navbar from '@/app/Components/navbar' // Lowercase filename
// Note: Your folder structure doesn't show a footer.tsx - you'll need to create this
import Footer from '@/app/Components/footer' 
// import DistributionBoards from './lowvoltageswitchgeardistributionboards'
import MediumVoltage from './mediumvoltageswitchgear'
// import Stainless from './stainlesssteelstructure' // Fixed typo from original
import Empty from './typetestedpanels'
import Cable from './cabletraysandladder'
import ContactBar from '../Components/topbar'
import ScrollToTopButton from '../Components/scroll';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* <TopBar /> */}
      <ContactBar/>
      <Navbar />
      <div className="flex-grow">
        <Products />
        {/* <DistributionBoards /> */}
        {/* <Stainless /> */}
        <Empty /> 
        <MediumVoltage />
        <Cable />
      </div>
      <ScrollToTopButton/>
      <Footer />
    </main>
  )
}