import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>
        Вітаю !
        <br />
        <span> Ви потрапили на початок розробки сайта Сергія! 🎉🎉🎉</span>
      </h1>
      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
