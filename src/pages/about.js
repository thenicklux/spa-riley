import React from "react"
import Img from 'gatsby-image'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const About = ({data}) => (

  <Layout>
    <SEO title="About Me" />

    <div className="columns" style={{marginBottom: "2em"}}>
      <div className="column" style={{padding: 0}}>
        <Img 
          fluid={data.portrait.childImageSharp.fluid} 
          style={{
            height: "100%",
            border: "10px solid #2f3e46"
          }} 
        />
      </div>
      <div className="column has-text-centered has-text-white" style={{backgroundColor: "#2f3e46", padding: 0}}>
        <div style={{padding: "2em"}}>
          <h1>Riley White</h1>

          <p>My name is Riley and I am the proud owner of Spa Riley. I grew up in Chagrin Falls and have spent time in other places but felt being here would be the right setting for my business. Growing up I experienced acne as a teen and often felt like going to an esthetician was embarassing.</p>

          <p>My goal is to provide a safe sanctuary where clients feel comfortable and are able to trust me with their skin journey. I believe our skins health is both impacted by outside and inside factors, so I like to get to know my clients and come up with a home care routine that works with their lifestyle. Whether you are experiencing acne, loss of elasticity, hyperpigmentation or other skin concerns, I am here to help!</p>

          <p>Outside of the spa, I spend more time than I'd like to admit, talking to my two dogs. I look at taking the time to come to the spa as carving out a little time for yourself, which is very important.</p>

          <p>Book your first service and lets get started to making you feel as fabulous as you really are!</p>
          
        </div>
      </div>
    </div>
  
  </Layout>

)

export default About

// 08.29.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    portrait: file(relativePath: {eq: "portrait.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`