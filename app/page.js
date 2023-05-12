import { AppLayout } from "@/components/AppLayout/page"
import { Footer } from "@/components/Footer/page"
import { Sample } from "@/components/Icons/page"
import { Button } from "@/components/button/page"
import { Header } from "@/components/header/page"
import { Titles } from "@/components/titles/page"
import Image from "next/image"

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

const prices = [
  {
    title: "Preuniversitario",
    price: "570",
  },
  {
    title: "Licenciaturas y Carreras",
    price: "800",
  },
  {
    title: "Maestrías",
    price: "1000",
  },
]

const step = [
  {
    id: 1,
    title: "Inscripción",
    description:
      "Inscríbete on-line o en nuestras oficinas en tu país de residencia.",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-blue-700 py-2 absolute right-0 left-0">
        <p className="w-full text-center text-white">
          ¿Te preocupa el idioma? El primer año aprenderás el idioma ruso desde
          cero
        </p>
      </div>
      <main>
        <div className="h-[33rem] bg-[url('/banner2.jpg')] w-full bg-no-repeat bg-cover bg-center">
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
                link="/"
              />
            </div>
          </div>
        </div>
        <AppLayout styles="bg-gray-50">
          <Titles
            title="¿Por qué elegirnos?"
            paragraph="Décadas de experiencia, personal altamente calificado y conveniosexclusivos, nos permiten garantizar educación de excelencia en las 20 mejores universidades rusas."
            titleStyle=""
          />
          <div className="w-[90%] lg:w-[60%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((item, index) => (
                <div className="border border-blue-500 py-6 px-8" key={index}>
                  <Sample className="w-16 h-16 mx-auto my-6" fill="#3B82F6" />
                  <h3 className="text-base font-semibold uppercase text-center leading-5 tracking-wide text-gray-700">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </AppLayout>
        <AppLayout>
          <Titles
            title="En Rusia puedes estudiar"
            paragraph="Tienes la oportunidad de estudiar en las mejores universidades de Rusia, con programas de pregrado, posgrado, maestrías y doctorado."
            titleStyle="uppercase"
          />
          <div className="flex items-center flex-col md:flex-row w-[90%] mx-auto">
            <div className="h-96 w-96">
              <Image
                src="/banner2.jpg"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:ml-6 w-full md:w-[60%]">
              <p className="text-black uppercase text-sm underline-offset-4 underline tracking-wide font-medium mb-3 mt-4 md:mt-0">
                Universidades
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-500">
                UF Universidad Financiera de Rusia: Ubicación, facultades e
                instalaciones
              </h2>
              <p className="my-5 leading-6 text-gray-700">
                La Universidad Financiera del Gobierno de la Federación Rusa
                (UF) o simplemente “Universidad Financiera de Rusia”, es
                considerada el centro de formación “más relevante” en el ámbito
                financiero/empresarial.
              </p>
              <Button
                title="Mas información"
                styles="bg-blue-500 hover:bg-blue-700 text-white"
                link="/"
              />
            </div>
          </div>
        </AppLayout>
        <AppLayout styles="bg-gray-50">
          <Titles
            title="Precios por semestre desde"
            paragraph="Tienes la oportunidad de estudiar en las mejores universidades de Rusia, con programas de pregrado, posgrado, maestrías y doctorado."
            titleStyle=""
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] lg:w-[65%] mx-auto">
            {prices.map((item, index) => (
              <div class="text-center" key={index}>
                <div class="px-6 py-4 rounded shadow bg-white">
                  <h1 class="mb-2 text-gray-400 text-lg">{item.title}</h1>
                  <div class="flex items-center justify-center my-10">
                    <span class="text-2xl -mt-8">$</span>
                    <span class="text-6xl">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              title="Mas información"
              styles="bg-blue-500 hover:bg-blue-700 text-white"
              link="/"
            />
          </div>
        </AppLayout>
        <AppLayout>
          <Titles
            title="¿Cómo es el proceso?"
            paragraph="Décadas de experiencia, personal altamente calificado y convenios exclusivos, nos permiten garantizar educación de excelencia en las 20 mejores universidades rusas."
            titleStyle=""
          />
          <div className="w-[50%] mx-auto">
            {step.map((item, index) => (
              <div className="flex mt-5" key={index}>
                <div>
                  <div className="rounded-full bg-blue-700 font-extrabold px-2 py-1 text-white">
                    {item.id}
                  </div>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-blue-500">
                    {item.title}
                  </h2>
                  <p className="my-2 leading-6 text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AppLayout>
        <AppLayout styles="bg-gray-50 text-center">
          <Titles
            title="Top 10 de las mejores universidades"
            paragraph="Rusia es considerada uno de los países más educados del mundo por la OCDE, contando con universidades reconocidas en Europa y a nivel mundial."
            titleStyle=""
          />
          <Button
            title="Mas información"
            styles="bg-blue-500 hover:bg-blue-700 text-white"
            link="/"
          />
        </AppLayout>
        <AppLayout styles="text-center">
          <Titles
            title="Testimonios RU"
            paragraph="Décadas de experiencia, personal altamente calificado y convenios exclusivos, nos permiten garantizar educación de excelencia en las 20 mejores universidades rusas."
            titleStyle=""
          />
          <div className="w-[90%] lg:w-[60%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5"></div>
          </div>
          <Button
            title="Mas información"
            styles="bg-blue-500 hover:bg-blue-700 text-white"
            link="/"
          />
        </AppLayout>
        <AppLayout styles="bg-gray-50 text-center">
          <Titles
            title="Contacto"
            paragraph="Rusia es considerada uno de los países más educados del mundo por la OCDE, contando con universidades reconocidas en Europa y a nivel mundial."
            titleStyle=""
          />
        </AppLayout>
        <Footer />
      </main>
    </>
  )
}
