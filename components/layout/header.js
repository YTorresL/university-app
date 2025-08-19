"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Facebook, Instagram, Menu, Youtube } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#why-choose-us", label: "Por qué" },
    { href: "#study-options", label: "Estudios" },
    { href: "#universidades", label: "Universidades" },
    { href: "#precios", label: "Precios" },
    { href: "#processes", label: "Procesos" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="bg-white/50 shadow-sm border-b sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-600">StudyRussia</div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social + Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="bg-blue-600 h-10 w-10 flex items-center justify-center rounded-full text-white hover:bg-blue-700 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="bg-blue-600 h-10 w-10 flex items-center justify-center rounded-full text-white hover:bg-blue-700 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="bg-blue-600 h-10 w-10 flex items-center justify-center rounded-full text-white hover:bg-blue-700 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button className="lg:hidden" variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="space-y-4 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block text-gray-800 text-lg hover:text-blue-600 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
