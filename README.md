# MDX based website

## Introduction

This is a concept of a website that is fully customizable with JSX components and Markdown through the magic of MDX.
MDX allows a markdown file to contain JSX elements.

For example, a markdown file could contain something like this:

```mdx
# H1
<FancyContainer>
  A paragraph
  
  Another paragraph
</FancyContainer
```

## Structure
Currently, the structure is not perfectly defined, but the React application contains the following hierarchy:

```
src/
├─ components/
|  ├─ component.tsx
├─ content/
│  ├─ articles/
│  │  ├─ article-1.mdx
│  ├─ fonts/
│  │  ├─ font1.tff
│  ├─ gallery/
│  │  ├─ gallery.json
├─ scss/
│  ├─ style-1.scss
├─ pages/
|  ├─ some-page.tsx
App.tsx
App.css
```

### Components

Here are defined any special components that can be used in pages, mdx articles or other components.

### Content

- **Articles** - MDX files that can contain any markdown or JSX content. The name **must be** a dashed version of the title specified in gallery.json
- **Fonts** - Fonts folder. Should probably be moved to Assets.
- **Gallery** - Should probably remove the folder and only include the json file. Stores information about each article which is used to print a gallery item.
  Example: 
  ```json
  {
      "id":1,
      "title":"Tech",
      "description":"Check out my design projects",
      "imagePath":"https://picsum.photos/300/350",
      "type":"tech"
    },
    {
      "id":2,
      "title":"cat maths",
      "description":"Math is cool!",
      "imagePath":"https://picsum.photos/300/350",
      "type":"math"
    },
  ```

### SCSS

Contains scss for the components. Currently the design is responsive with desktop-first, mobile-last. I want to try Tailwind and also to implement some kind of theming system.

### Pages

Currently there is a Gallery page, containing all the articles specified in `gallery.json` and an Article page which renders a MDX file as an article.

### App.tsx

Contains routing for every gallery filter and article.
