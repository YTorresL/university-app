"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Shield,
  Home,
  Heart,
  Users,
  Headphones,
} from "lucide-react"

const benefits = [
  {
    id: "visa",
    icon: CheckCircle,
    title: "VISA 100% GARANTIZADA",
    description: "Garantizamos la obtención de tu visa de estudiante",
    content: `Nuestro equipo especializado cuenta con más de 20 años de experiencia en la gestión de visas estudiantiles para Rusia. Tenemos una tasa de éxito del 100% en la obtención de visas gracias a nuestros convenios directos con las universidades rusas y el conocimiento profundo de todos los requisitos consulares.

    Proceso de visa incluye:
    • Preparación completa de documentación
    • Revisión exhaustiva antes del envío
    • Seguimiento personalizado del proceso
    • Soporte durante toda la gestión
    • Garantía de reembolso en caso de negativa

    Trabajamos directamente con los consulados rusos en México, Colombia y Perú, lo que nos permite agilizar los tiempos y garantizar el éxito en cada aplicación.`,
  },
  {
    id: "admision",
    icon: Shield,
    title: "ADMISIÓN CONFIRMADA",
    description: "Aseguramos tu admisión en las mejores universidades",
    content: `Gracias a nuestros convenios exclusivos con las 20 mejores universidades de Rusia, podemos garantizar tu admisión en la institución y programa de tu elección. Nuestro proceso de admisión es transparente y eficiente.

    Beneficios de admisión:
    • Convenios directos con universidades top
    • Proceso de admisión simplificado
    • Evaluación previa de tu perfil académico
    • Orientación en la selección de carrera
    • Carta de invitación garantizada

    Nuestro equipo académico evalúa tu perfil y te orienta hacia la universidad y programa que mejor se adapte a tus objetivos profesionales, garantizando tu éxito académico desde el primer día.`,
  },
  {
    id: "alojamiento",
    icon: Home,
    title: "ALOJAMIENTO GARANTIZADO",
    description: "Te proporcionamos alojamiento seguro y cómodo",
    content: `Entendemos que encontrar un lugar seguro y cómodo para vivir es fundamental para tu éxito académico. Por eso, garantizamos alojamiento de calidad en todas nuestras universidades aliadas.

    Opciones de alojamiento:
    • Residencias universitarias modernas
    • Apartamentos compartidos supervisados
    • Familias anfitrionas certificadas
    • Apartamentos individuales (disponible)
    • Servicios incluidos (internet, limpieza, seguridad)

    Todos nuestros alojamientos están ubicados cerca del campus universitario, cuentan con todas las comodidades necesarias y están supervisados por nuestro equipo local en Rusia para garantizar tu bienestar y seguridad.`,
  },
  {
    id: "seguro",
    icon: Heart,
    title: "SEGURO DE VIAJE Y MÉDICO",
    description: "Cobertura completa durante tu estancia",
    content: `Tu salud y bienestar son nuestra prioridad. Incluimos un seguro médico y de viaje completo que te protege durante toda tu estancia en Rusia, desde el momento que sales de tu país hasta tu regreso.

    Cobertura del seguro:
    • Atención médica completa en Rusia
    • Emergencias médicas 24/7
    • Medicamentos y tratamientos
    • Repatriación en caso de emergencia
    • Cobertura dental básica
    • Asistencia en idioma español

    Trabajamos con las mejores aseguradoras internacionales para ofrecerte tranquilidad total. Nuestro equipo local en Rusia te asistirá en cualquier situación médica que puedas enfrentar.`,
  },
  {
    id: "asesoria",
    icon: Users,
    title: "ASESORÍA PERSONALIZADA",
    description: "Atención individual para cada estudiante",
    content: `Cada estudiante es único, por eso ofrecemos asesoría completamente personalizada. Desde el primer contacto hasta tu graduación, tendrás un asesor dedicado que conoce tu caso específico.

    Servicios de asesoría:
    • Consultor personal asignado
    • Evaluación de perfil académico
    • Orientación vocacional especializada
    • Planificación de carrera a largo plazo
    • Soporte académico continuo
    • Asesoría para trámites adicionales

    Tu asesor personal te acompañará en cada paso del proceso, desde la selección de universidad hasta la adaptación cultural, asegurando que tengas el apoyo necesario para alcanzar tus objetivos académicos.`,
  },
  {
    id: "acompanamiento",
    icon: Headphones,
    title: "ACOMPAÑAMIENTO EN TODO EL PROCESO",
    description: "Te apoyamos desde el inicio hasta el final",
    content: `Nuestro compromiso contigo no termina cuando llegas a Rusia. Te acompañamos durante todo tu proceso educativo, desde la inscripción inicial hasta tu graduación y más allá.

    Acompañamiento integral:
    • Orientación pre-viaje completa
    • Recepción en el aeropuerto de Moscú
    • Instalación en tu alojamiento
    • Orientación cultural y académica
    • Soporte continuo durante los estudios
    • Asistencia para trámites de graduación

    Contamos con oficinas en Moscú y San Petersburgo con personal que habla español, garantizando que siempre tengas apoyo local cuando lo necesites. Tu éxito es nuestro éxito.`,
  },
]

export function WhyChooseUs() {
  const [selectedBenefit, setSelectedBenefit] = useState(benefits[0])

  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="mx-auto px-4 w-11/12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Décadas de experiencia, personal altamente calificado y convenios
            exclusivos, nos permiten garantizar educación de excelencia en las
            20 mejores universidades rusas.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-1 space-y-3">
            {benefits.map((benefit) => (
              <Card
                key={benefit.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedBenefit.id === benefit.id
                    ? "ring-2 ring-blue-500 shadow-lg bg-blue-50"
                    : "hover:shadow-md"
                }`}
                onClick={() => setSelectedBenefit(benefit)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                        selectedBenefit.id === benefit.id
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-bold text-sm ${
                          selectedBenefit.id === benefit.id
                            ? "text-blue-900"
                            : "text-gray-900"
                        }`}
                      >
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-xl h-full">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl">
                    <selectedBenefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedBenefit.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {selectedBenefit.description}
                    </p>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedBenefit.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
