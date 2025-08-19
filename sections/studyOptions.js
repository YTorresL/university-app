import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award, Trophy } from "lucide-react"

const options = [
  { icon: BookOpen, title: "Pregrado", description: "Programas de licenciatura en diversas áreas" },
  { icon: GraduationCap, title: "Posgrado", description: "Especializaciones y diplomados" },
  { icon: Award, title: "Maestrías", description: "Programas de maestría reconocidos internacionalmente" },
  { icon: Trophy, title: "Doctorado", description: "Programas de doctorado de alto nivel académico" },
]

export function StudyOptions() {
  return (
    <section className="py-20 bg-gray-50" id="study-options">
      <div className="w-11/12 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">EN RUSIA PUEDES ESTUDIAR</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tienes la oportunidad de estudiar en las mejores universidades de Rusia, con programas de pregrado,
            posgrado, maestrías y doctorado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <option.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-normal">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
