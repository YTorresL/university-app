import Image from "next/image"
import Link from "next/link"
import { Button } from "../button/page"
import { Menu } from "../Icons/page"

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
          <Menu className="lg:hidden w-9 h-9 -mt-1" fill="#3B82F6" />
          <ul className="lg:flex items-center hidden">
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
