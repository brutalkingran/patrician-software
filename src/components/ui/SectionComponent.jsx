const SectionComponent = ({ children, id }) => {
  return (
    <section className="mt-5 flex flex-col mx-auto justify-center md:w-4/6" id={id}>
      {children}
    </section>
  )
}

export default SectionComponent