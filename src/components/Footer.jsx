import { StaticImage } from "gatsby-plugin-image"

function Footer() {
  return (
    <footer className="relative mt-10 overflow-x-clip bg-[url('../../static/media/footer-bg.svg')] bg-cover bg-no-repeat pb-8 pt-16 md:mt-12 md:pt-24 lg:mt-16 xl:pt-40">
      <div className="absolute -right-20 bottom-28 -z-50 max-w-[16rem] md:bottom-20 xl:max-w-sm">
        <StaticImage src="../../static/media/icon.png" alt="JoeBot" />
      </div>

      <main className="container max-w-6xl gap-4 px-4 md:flex md:px-8 xl:gap-6 xl:px-0">
        <div className="mb-4 max-w-[6rem] md:mb-0 xl:max-w-[8rem]">
          <StaticImage
            src="../../static/media/icpepse-logo.png"
            alt="ICPEP.SE USTP Logo"
          />
        </div>

        <div className="flex flex-col justify-end text-xs md:text-sm xl:text-base">
          <div className="font-montserrat">
            <p className="font-bold">
              Institute of Computer Engineers of the Philippines
            </p>
            <p>University of Science and Technology of Southern Philippines</p>
            <small>&copy; Cagayan de Oro 2022</small>
          </div>
        </div>
      </main>
    </footer>
  )
}

export default Footer
