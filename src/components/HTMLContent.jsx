import { arrayOf, object, shape, string } from "prop-types"
import "../styles/blog-style.css"
import ScrollToTop from "./ScrollTop"

function resolveAuthors(authors) {
  const _ = authors.map(
    ({ fullName, role }) => `${fullName}${role ? `, ${role}` : ""}`
  )

  if (_.length === 1) return _[0]
  if (_.length === 2) return _.join(" & ")

  return _.join(", ")
}

function HTMLContent({ post }) {
  const { title, date, authors, html } = post

  return (
    <div className="global-wrapper">
      <main>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="title-header">
            <h1 itemProp="headline">{title}</h1>
            <p className="date-header">{date}</p>
          </div>

          <ScrollToTop showBelow={300} />

          <section
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
            itemProp="articleBody"
          />

          <div>
            <p>
              Written by:{" "}
              {authors.length > 0 ? resolveAuthors(authors) : "ICpEP.SE - USTP"}
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

HTMLContent.propTypes = {
  post: shape({
    title: string.isRequired,
    date: string.isRequired,
    authors: arrayOf(object).isRequired,
    html: string.isRequired,
  }).isRequired,
}

export default HTMLContent
