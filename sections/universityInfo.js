"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building, Users } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const SUGGESTED_UNIVERSITIES = [
  {
    name: "UF Universidad Financiera de Rusia",
    description:
      "La Universidad Financiera del Gobierno de la Federación Rusa (UF) o simplemente 'Universidad Financiera de Rusia', es considerada el centro de formación 'más relevante' en el ámbito financiero/empresarial.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/МГУ%2C_вид_с_воздуха.jpg",
  },
  {
    name: "UF Universidad Financiera de Rusia",
    description:
      "La Universidad Financiera del Gobierno de la Federación Rusa (UF) o simplemente 'Universidad Financiera de Rusia', es considerada el centro de formación 'más relevante' en el ámbito financiero/empresarial.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/МГУ%2C_вид_с_воздуха.jpg",
  },
]

export function UniversityInfo() {
  return (
    <section id="universidades" className="py-20 bg-white">
      <div className="w-11/12 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            UNIVERSIDADES
          </h2>
        </div>
        <Carousel
          className="w-full max-w-4xl mx-auto"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {SUGGESTED_UNIVERSITIES.map((university, index) => (
              <CarouselItem key={index}>
                <Card className="shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {university.name}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {university.description}
                        </p>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center space-x-3">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">
                              Ubicación privilegiada
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Building className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">
                              Instalaciones modernas
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700">
                              Facultades especializadas
                            </span>
                          </div>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Más información
                        </Button>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/МГУ%2C_вид_с_воздуха.jpg"
                          alt="Universidad Financiera de Rusia"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
