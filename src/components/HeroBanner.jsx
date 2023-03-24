/* eslint-disable react/jsx-props-no-spreading */
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { object, shape, string } from "prop-types"

function getTimeValueInSeconds(value) {
  if (Number(value).toString() === value) {
    return value
  }

  const {
    2: hours = "0",
    4: minutes = "0",
    6: seconds = "0",
  } = value.match(/((\d*)h)?((\d*)m)?((\d*)s)?/)

  return String((Number(hours) * 60 + Number(minutes)) * 60 + Number(seconds))
}

function getIframeSrc(url) {
  const { host, pathname, searchParams } = new URL(url)

  const id = host === "youtu.be" ? pathname.slice(1) : searchParams.get("v")

  const src = new URL(`https://www.youtube-nocookie.com/embed/${id}`)

  ;[
    ["autoplay", "1"],
    ["rel", "0"],
    ["controls", "0"],
    ["modestbranding", "1"],
    ["fs", "0"],
  ].forEach(([name, value]) => {
    src.searchParams.set(name, value)
  })

  searchParams.forEach((value, name) => {
    if (name === "v") return

    if (name === "t") {
      src.searchParams.append("start", getTimeValueInSeconds(value))
    } else {
      src.searchParams.append(name, value)
    }
  })

  return src.toString()
}

function HeroBanner({ data, ...rest }) {
  const { url, src, alt } = data

  if (url) {
    const allowed = [
      "accelerometer",
      "autoplay",
      "clipboard-write",
      "encrypted-media",
      "gyroscope",
      "picture-in-picture",
      "web-share",
    ]

    return (
      <div {...rest}>
        <iframe
          title={alt}
          src={getIframeSrc(url)}
          allow={allowed.join(";")}
          className="aspect-video w-full border-0"
        />
      </div>
    )
  }

  if (src.childImageSharp) {
    return <GatsbyImage image={getImage(src)} alt={alt} {...rest} />
  }

  // fallback when format is unsupported
  return <img src={src.publicURL} alt={alt} {...rest} />
}

HeroBanner.propTypes = {
  data: shape({
    url: string,
    src: object,
    alt: string.isRequired,
  }).isRequired,
}

export default HeroBanner
