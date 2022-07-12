import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function BlogPage() {
  return (
    <main className="container max-w-6xl divide-y-2 divide-black">
      <section className="flex flex-col divide-y-2 divide-black lg:my-6 lg:flex-row lg:divide-x-2 lg:divide-y-0 lg:px-6">
        <div className="relative flex shrink items-center justify-center lg:py-3 lg:pr-8">
          <StaticImage
            src="../images/blog/featured.jpg"
            alt="featured"
            objectFit="cover"
          />
          <div className="absolute bottom-1.5 right-1.5 rounded-sm bg-white p-1.5 px-3 lg:bottom-8 lg:right-12">
            <p className="mb-0.5 text-xs uppercase text-gray-700 lg:mb-0 lg:text-base">
              announcement
            </p>
            <h1 className="max-w-[16rem] font-libre font-extrabold lg:max-w-sm lg:text-xl">
              Meet the new ICpEP.SE officers for A.Y. 2020-2021
            </h1>

            <div className="flex text-right">
              <Link
                to="/blog#read-more"
                className="ml-auto flex items-center gap-x-2 font-montserrat text-sm font-medium lg:text-base"
              >
                Read More
                <span>
                  <HiOutlineArrowNarrowRight className="h-full w-6 text-zinc-700" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <article className="grow pl-4 pb-6 pt-4 pr-4 font-montserrat lg:pr-0 lg:pt-3 lg:pl-8">
          <h2 className="mb-3 text-lg font-extrabold lg:mb-5 lg:text-3xl">
            Upcoming Events
          </h2>
          <div className="upcoming-events flex flex-col gap-y-7 pl-6 pt-4 lg:gap-y-8">
            {[1, 2, 3].map((v) => (
              <div
                key={v}
                className="relative -z-20 flex min-w-max border-2 border-black bg-[#efe9e1] px-6 py-2 font-normal"
              >
                <div className="relative flex items-center justify-center border-2 border-black bg-primary">
                  <strong className="py-5 px-1 text-center font-PS2P text-sm uppercase lg:text-lg">
                    <div className="-mb-0.5 lg:-mb-2">20-30</div>
                    <div>Feb</div>
                  </strong>
                </div>
                <article className="text-xs lg:text-base">
                  <h3 className="font-libre text-base font-bold lg:mb-1.5 lg:text-lg">
                    ICpEP General Assembly
                  </h3>
                  <p className="leading-5">Performance Art Theater</p>
                  <time dateTime="PT5H">1:00pm - 5:00pm</time>
                </article>
                <div className="absolute bottom-1 right-1 h-5 w-5 bg-secondary"></div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="flex">
        <div>PIC</div>
        <div>UPCOMING</div>
      </section>
      <section className="flex">
        <div>PIC</div>
        <div>UPCOMING</div>
      </section>
    </main>
  )
}

export default BlogPage
