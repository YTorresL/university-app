import Image from "next/image"
import Link from "next/link"
import { Button } from "../button/page"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Universidades", href: "/universidades" },
  { name: "Carreras", href: "/carreras" },
  { name: "Precios", href: "/precios" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  return (
    <header className="p-2">
      <div className="flex items-center justify-between h-20 w-[95%] mx-auto">
        <Link href="/" className="h-16">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </Link>
        <nav>
          <ul className="flex items-center">
            {navigation.map((item) => (
              <li key={item.name} className="ml-7">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            <li className="ml-7">
              <Link href="/asesoria">
                <Button
                  title="Asesorias"
                  styles="bg-blue-500 hover:bg-blue-700 text-white"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
