export const Title = ({ text }) => {
  return (
    <h2 className="
      text-[3rem]
      md:text-4xl 
      font-serif
      tracking-wide
      text-center
      text-ps-white
      md:p-6
      md:rounded-2xl
    "
    id="wood-texture"
    >
      { text }
    </h2>
  )
}

export const Subtitle = ({ text }) => {
  return (
    <p className="
      px-0.5
      text-[0.95rem]
      text-center
      md:text-lg
      italic 
      opacity-90
    ">
      {text}
    </p>
  )
}