import ControlHeader from '../../components/ControlHeader/ControlHeader'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/Header/Header'
import PropertyList from '../../components/PropertyList/PropertyList'
import './home.css'

export default function Home() {
  return (
    <>
      <Header />
      <ControlHeader controls />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browser by property type</h1>
        <PropertyList />
      </div>
    </>
  )
}
