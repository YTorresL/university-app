import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer class="bg-blue-500">
      <div class="mx-auto w-[85%] p-4 py-6 lg:py-20">
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5 w-full place-content-center">
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={50}
              className="w-16 mb-4"
            />
            <span class="text-sm text-gray-200 sm:text-center dark:text-gray-400">
              © 2023 Marca™. All Rights Reserved.
            </span>
          </div>
          <div>
            <h2 class="mb-6 text-lg font-bold text-white">Resources</h2>
            <ul class="text-base text-gray-200 dark:text-gray-400 font-semibold">
              <li class="mb-4">
                <Link href="/" class="hover:underline">
                  Blog empresas
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/" class="hover:underline">
                  Seguridad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-lg font-bold text-white">Follow us</h2>
            <ul class="text-base text-gray-200 dark:text-gray-400 font-semibold">
              <li class="mb-4">
                <Link href="/" class="hover:underline">
                  Trabaja con nosotros
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/" class="hover:underline">
                  Seguridad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-lg font-bold text-white">Legal</h2>
            <ul class="text-base text-gray-200 dark:text-gray-400 font-semibold">
              <li class="mb-4">
                <Link href="/" class="hover:underline">
                  Seguridad
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/" class="hover:underline">
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
