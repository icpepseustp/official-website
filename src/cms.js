import CMS from "netlify-cms-app"

import "@fontsource/libre-baskerville"
import "@fontsource/montserrat"
import "@fontsource/press-start-2p"
import "@fontsource/raleway"
import "@fontsource/recursive"

import "prismjs/themes/prism.css"
import "./styles/global.css"
import "./styles/blog-style.css"

import BlogPostPreview from "./templates/BlogPostPreview"
import EventPreview from "./templates/EventPreview"

CMS.registerPreviewTemplate("blog", BlogPostPreview)
CMS.registerPreviewTemplate("events", EventPreview)
