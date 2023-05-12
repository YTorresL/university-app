import Link from "next/link"

export function Button({ title, styles, link }) {
  return (
    <Link href={link}>
      <button className={`font-medium py-2 px-4 rounded ${styles}`}>
        {title}
      </button>
    </Link>
  )
}
