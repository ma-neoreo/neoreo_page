import Header from './components/Header'
import CompanyIntro from './components/CompanyIntro'
import ProductPreview from './components/ProductPreview'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
        <CompanyIntro />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  )
}

