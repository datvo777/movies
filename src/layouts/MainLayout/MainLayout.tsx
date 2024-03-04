import Footer from '../../components/Footer'
import Header from '../../components/Header'

interface Props {
  readonly children?: React.ReactNode
}
function MainLayout({children}: Props) {
  return (
    <div>
      <Header></Header>
      {children}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default MainLayout