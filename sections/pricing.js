import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    title: "Preuniversitario",
    price: "$570",
    period: "por semestre",
    features: ["Preparación académica", "Curso de idioma ruso", "Orientación cultural", "Soporte académico"],
  },
  {
    title: "Licenciaturas y Carreras",
    price: "$800",
    period: "por semestre",
    features: [
      "Programas de pregrado",
      "Múltiples especialidades",
      "Certificación internacional",
      "Prácticas profesionales",
    ],
    popular: true,
  },
  {
    title: "Maestrías",
    price: "$1000",
    period: "por semestre",
    features: ["Programas de posgrado", "Investigación avanzada", "Tesis dirigida", "Networking internacional"],
  },
]

export function Pricing() {
  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Precios por semestre desde</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tienes la oportunidad de estudiar en las mejores universidades de Rusia, con programas de pregrado,
            posgrado, maestrías y doctorado.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-blue-500 shadow-xl" : "shadow-lg"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Más Popular</span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">{plan.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"}`}
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
