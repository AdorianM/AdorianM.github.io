import path from "path"
import fs from 'fs'
import React from "react"

const Article = (props) => {

    console.log("props: ")
    console.log(props)

    // The markdown is not rendered yet. It is just read. :(. We need to render it.

    return (
        <article className="content-panel doodle">
            <div className="article-content">
                {props.markdown}
            </div>
        </article>
    )
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

const getStaticPaths = async () => {
    const files = fs.readdirSync(postsDirectory)
    const paths = files.map(filename => ({
      params: {
        category: "math",
        slug: filename.replace('.mdx', '')
      }
    }))
  
    return {
      paths,
      fallback: false
    }
  }

const getStaticProps = async (context) => {
    // Get external data
    const slug = context.params.slug
    const markdown = fs.readFileSync(path.join(postsDirectory, slug + '.mdx'), 'utf-8')
    // Send data as props to the page
    return {
        props: {
            slug,
            markdown
        }
    }
}

export { getStaticPaths, getStaticProps }
export default Article