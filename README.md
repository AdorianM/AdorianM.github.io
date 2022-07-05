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
</FancyContainer>
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
Currently, the strategy is that components will be strict. This means that a predefined component should be used in the intended way.
For example, if we have the component TextImage which shows an image with a heading and a paragraph then we would do something like:

```mdx
<TextImage>
    ## The cool headline
    The even cooler text describing the above specified cool headline
    ![Alt Text](https://picsum.photos/500/169)
</TextImage>
```

This component would render like this:

![image](https://user-images.githubusercontent.com/67052082/177423121-608886a5-bc30-4e8f-9dfc-879fc1d126a8.png)

If other types of data are provided, let's say, two images, more paragraphs, etc, then the component **will not work** as expected and will still only show exactly one h2, one p and one image.

TODO: currently the only way to link images through markdown in MDX seems to be by referencing external links or the link towards the public folder. In the case we want to reference the local file `/src/assets/1.jpg` then we would have to change the markdown for `![Alt Text](/src/assets/1.jpg)` into `<img src="/src/assets/1.jpg" alt="Alt Text" />`. Find a workaround for this.

### Content

- **Articles** - MDX files that can contain any markdown or JSX content. The name **must be** a dashed version of the title specified in gallery.json
- **Fonts** - Fonts folder. Should probably be moved to Assets.
- **Gallery** - Should probably remove the folder and only include the json file. Stores information about each article which is used to print a gallery item.
  Example: 
  ```json
  [ 
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
    }
  ]
  ```

### SCSS

Contains scss for the components. Currently the design is responsive with desktop-first, mobile-last. I want to try Tailwind and also to implement some kind of theming system.

### Pages

Currently there is a Gallery page, containing all the articles specified in `gallery.json` and an Article page which renders a MDX file as an article.

### App.tsx

Contains routing for every gallery filter and article.
