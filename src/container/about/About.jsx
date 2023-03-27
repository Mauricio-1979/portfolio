import React, { useEffect, useState} from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   {title: 'MERN Stack', description: 'I am a good web developer.', imgUrl: images.mern},
//   {title: 'MEAN Stack', description: 'I am a good web developer.', imgUrl: images.mean},
//   {title: 'PERN Stack', description: 'I am a good web developer.', imgUrl: images.about03},
//   {title: 'Java Spring Boot', description: 'I am a good web developer.', imgUrl: images.about04}
// ]

function About() {

const [abouts, setAbouts] = useState([]);

useEffect(() => {
  const query = '*[_type == "abouts"]';

  client.fetch(query).then((data) => {
    setAbouts(data);
  })
},[])

  return (
    <>
      <h2 className='head-text'>the environments I work with<br />
      </h2>
      <div className='app__profile'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <a href={about.url} target="_blank" rel='noopener noreferrer'>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
            </a>
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

//export default AppWrapper(About, 'about')

export default AppWrapper(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  );