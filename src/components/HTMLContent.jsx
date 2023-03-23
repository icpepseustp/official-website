/* eslint-disable react/prop-types */
import "../styles/blog-style.css"
import ScrollToTop from "./ScrollTop"

function HtmlContent({ post }) {
  const { frontmatter, html } = post

  return (
    <div className="global-wrapper">
      <main>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="title-header">
            <h1 itemProp="headline">{frontmatter.title}</h1>
            <p className="date-header">{frontmatter.date}</p>
          </div>
          <ScrollToTop showBelow={250} />
          <section
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
            itemProp="articleBody"
          />
          <div>
            <p>
              Author:{" "}
              {frontmatter.author ? frontmatter.author : "ICpEP.SE - USTP"}
              <br />
              Date Published: {frontmatter.date}
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

export default HtmlContent
