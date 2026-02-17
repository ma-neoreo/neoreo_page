import Header from './components/Header'
import CompanyIntro from './components/CompanyIntro'
import ProductPreview from './components/ProductPreview'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <CompanyIntro />
        <ProductPreview />
      </main>
      <Footer />
    </div>
  )
}
