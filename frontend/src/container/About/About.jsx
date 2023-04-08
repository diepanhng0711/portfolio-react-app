import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './About.scss'
import { urlFor, client } from '../../client'

// const abouts = [
//   {
//     title: 'HUST Student',
//     description: `I'm currently a 4th-year HUST Student`,
//     imgUrl: images.about01
//   },
//   {
//     title: 'Game Developer',
//     description: `I'm now studying for becoming a potential and creative Game Developer`,
//     imgUrl: images.about02
//   },
//   {
//     title: 'Web Developer',
//     description: `I used to be a Web Developer`,
//     imgUrl: images.about03
//   }
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
  }, []);

  console.log(abouts)

  return (
    <React.Fragment>
      <h2 className="head-text">
        Stay <span>Hungry</span>, Stay <span>Foolish</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default About