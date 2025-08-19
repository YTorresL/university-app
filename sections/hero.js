import { Button } from "@/components/ui/button"
import { ArrowRight, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 overflow-hidden"
    >
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <div className="w-11/12 mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-1">
            <Globe className="h-4 w-4" />
            <span>NOSOTROS NOS ENCARGAMOS DE TODO</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Te Ayudamos en la{" "}
            <span className="text-blue-600">Gestión y Trámites</span> necesarios
            para <span className="text-blue-600">Estudiar en Rusia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Décadas de experiencia, personal altamente calificado y convenios
            exclusivos nos permiten garantizar educación de excelencia.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            Más información
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
