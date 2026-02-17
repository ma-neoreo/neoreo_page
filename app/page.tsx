import Header from './components/Header'
import CompanyIntro from './components/CompanyIntro'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafc] text-navy overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <CompanyIntro />
      </main>
      <Footer />
    </div>
  )
}
