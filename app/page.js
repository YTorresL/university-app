import { Sample } from "@/components/Icons/page"
import { Button } from "@/components/button/page"
import { Header } from "@/components/header/page"

const benefits = [
  {
    title: "Visa 100% garantizada",
  },
  {
    title: "Admisión confirmada",
  },
  {
    title: "Alojamiento garantizado",
  },
  {
    title: "Seguro de viaje y médico",
  },
  {
    title: "Asesoría personalizada",
  },
  { title: "Acompañamiento en todo el proceso" },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[32rem] bg-[url('/banner2.jpg')] w-full">
          <div className="w-[90%] lg:w-[60%] mx-auto h-full flex flex-col justify-center items-center">
            <p className="text-white uppercase text-sm underline-offset-4 underline tracking-wide font-medium">
              Universidades
            </p>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center text-white">
              SGMU Universidad Médica de Saratov: Ubicación, facultades e
              instalaciones
            </h1>
            <div className="w-full flex justify-center">
              <Button
                title="Mas información"
                styles="bg-white hover:bg-gray-50 text-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="py-24">
          <div className="w-[90%] lg:w-[60%] mx-auto mb-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-500">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-center my-5 text-lg leading-6">
              Décadas de experiencia, personal altamente calificado y convenios
              exclusivos, nos permiten garantizar educación de excelencia en las
              20 mejores universidades rusas.
            </p>
          </div>
          <div className="w-[90%] lg:w-[60%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((item, index) => (
                <div className="border border-blue-500 py-6 px-8" key={index}>
                  <Sample className="w-16 h-16 mx-auto my-6" fill="#3B82F6" />
                  <h3 className="text-base font-semibold uppercase text-center leading-5 tracking-wide">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-24"></div>
      </main>
    </>
  )
}
