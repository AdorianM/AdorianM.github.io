import path from "path"
import fs from 'fs'
import React from "react"
import yaml from 'js-yaml'
import {unified} from 'unified'
import {VFile} from 'vfile'
import ReactMarkdown from 'react-markdown'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remakrParseFrontmatter from 'remark-parse-frontmatter'

const unifiedRemarkProcessor = unified().
    use(remarkParse).
    use(remarkFrontmatter).
    use(remakrParseFrontmatter)

interface FrontMatter {
    title: string
    date: string
    category: string
}

const getFrontMatter = (markdown): FrontMatter => {
    // const content = fs.readFileSync(markdown)
    const mdFile = new VFile(markdown)
    const data = unifiedRemarkProcessor.parse(mdFile)
    if(data.children[0].type === 'yaml') {
      return yaml.loadAll(data.children[0].value)[0] as FrontMatter
    }
    return {title: 'default', date: 'default', category: 'default'}
}

const Article = (props) => {

    return (
        <article className="content-panel doodle">
            <div className="article-content">
                <ReactMarkdown remarkPlugins={[remarkFrontmatter]}>
                  {props.markdown}
                </ReactMarkdown>
            </div>
        </article>
    )
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

const getStaticPaths = async () => {
    const files = fs.readdirSync(postsDirectory)
    const paths = files.map(file => {
        const readFile = fs.readFileSync(path.join(postsDirectory, file)) // Really poor solution.
        const frontMatter = getFrontMatter(readFile)
        return {
          params: {
            category: frontMatter.category,
            slug: file.replace('.mdx', '')
          }
        }
    })
  
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