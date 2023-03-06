import { content } from "../Content";

function Hireme(): JSX.Element {
  const { Hireme } = content;

  return (
    <section id="hireme" className="min-fit w-full">
      <div className="md:container px-2 pt-14 w-full justify-center">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className=" w-full flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-down"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-5">{Hireme.para}</p>
            <br />
            <button className="btn dark:text-dark_primary">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hireme;
