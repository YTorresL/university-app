import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    program: "Maestría en Finanzas",
    content:
      "La experiencia ha sido increíble. El apoyo constante del equipo me ayudó a adaptarme rápidamente a la vida universitaria en Rusia.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    program: "Ingeniería Informática",
    content:
      "Gracias al acompañamiento personalizado, pude enfocarme completamente en mis estudios sin preocuparme por los trámites.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    program: "Medicina",
    content:
      "El proceso fue muy transparente y eficiente. Cumplieron con todo lo prometido y más. Totalmente recomendado.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      id="testimonials"
    >
      <div className="wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="w-11/12 mx-auto px-4 z-30 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonios RU
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Décadas de experiencia, personal altamente calificado y convenios
            exclusivos, nos permiten garantizar educación de excelencia en las
            20 mejores universidades rusas.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6 mx-auto">
                  <Quote className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-center leading-normal">
                  {testimonial.content}
                </p>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.program}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Más información
          </Button>
        </div>
      </div>
    </section>
  )
}
