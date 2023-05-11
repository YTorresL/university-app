import { Button } from "@/components/button/page"
import { Header } from "@/components/header/page"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[30rem] bg-[url('/banner2.jpg')] w-full">
          <div className="w-[60%] mx-auto h-full flex flex-col justify-center items-center">
            <p className="text-white uppercase text-sm underline-offset-4 underline tracking-wide font-medium">
              Universidades
            </p>
            <h1 className="text-4xl font-bold text-center text-white">
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
      </main>
    </>
  )
}
