const ContactUsHero = () => {
  return (
    <section className="bg-[var(--secondary-color)]">
      <div className="my_container py-16 md:py-24">
        <article className="grid lg:grid-cols-12 items-center text-white">
          <div className="col-span-9">
            <h1 className="text-4xl md:text-5xl leading-snug md:leading-snug lg:text-6xl lg:leading-snug pr-10 font-bold">
              Feel free to contact us.
            </h1>
            <p className="md:text-lg leading-8 mt-6 w-11/12">
              Feel free to contact us for a consultation or to learn more about
              how we can elevate your digital presence.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactUsHero;
