export function Button({ title, styles }) {
  return (
    <button className={`font-medium py-2 px-4 rounded ${styles}`}>
      {title}
    </button>
  )
}
