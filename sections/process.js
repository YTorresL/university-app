import { Card, CardContent } from "@/components/ui/card"
import { FileText, Shield, Plane } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Inscripción",
    description:
      "Inscríbete on-line o en nuestras oficinas en tu país de residencia.",
  },
  {
    number: "2",
    icon: Shield,
    title: "Seguridad y Confianza",
    description:
      "Te garantizamos: emisión de la carta de invitación para el ingreso a la Federación Rusa.",
  },
  {
    number: "3",
    icon: Plane,
    title: "Visa",
    description: "Te ayudamos a tramitar la visa de estudiante.",
  },
]

export function Process() {
  return (
    <section className="py-20 bg-white" id="processes">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo es el proceso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Décadas de experiencia, personal altamente calificado y convenios
            exclusivos, nos permiten garantizar educación de excelencia en las
            20 mejores universidades rusas.
          </p>
        </div>
        <div className="flex mx-auto justify-center flex-col lg:flex-row gap-8 lg:gap-0 items-center">
          {steps.map((step, index) => (
            <>
              <Card className="hover:shadow-lg transition-shadow duration-300 w-80 relative">
                <CardContent className="p-8 space-x-3 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <div className="absolute top-4 right-16 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-normal">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="items-center justify-center lg:flex hidden">
                  <div className="w-8 h-0.5 bg-blue-200"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
