export function Titles({ title, paragraph, titleStyle }) {
  return (
    <div className="w-[90%] lg:w-[50%] mx-auto mb-10">
      <h2
        className={`text-3xl lg:text-4xl font-bold text-center text-blue-500 ${titleStyle}`}
      >
        {title}
      </h2>
      <p className="text-center my-5 leading-6 text-gray-700">{paragraph}</p>
    </div>
  )
}
