import React from 'react'
import { NavegationsDots, SocialMedia } from '../components';

const AppWrapper = (Components, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className='app__wrapper app__flex' >
            <Components/>

            <div className='copyright' >
                <p className='p-text' >@2022 Mauricio Bo</p>
                <p className='p-text' >All rights reserved</p>
            </div>
        </div>
        <NavegationsDots active={idName} />
    </div>
  )
}

export default AppWrapper;