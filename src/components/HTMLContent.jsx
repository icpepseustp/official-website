/* eslint-disable react/prop-types */
import "../styles/blog-style.css"
import ScrollToTop from "./ScrollTop"

function HtmlContent({ post }) {
  return (
    <div className="global-wrapper">
      <main>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="title-header">
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className="date-header">{post.frontmatter.date}</p>
          </div>
          <ScrollToTop showBelow={250} />
          <section
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <div>
            <p>
              Author:{" "}
              {post.frontmatter.author
                ? post.frontmatter.author
                : "ICpEP.SE - USTP"}
              <br />
              Date Published: {post.frontmatter.date}
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}

export default HtmlContent
