import React from 'react'
import Card from '../Card/Card'
import pcGamer from '../../assetes/img/pcGamer.jpg'

function Content() {

  return (
    <main className='d-flex flex-wrap w-100 justify-content-evenly'>
        <Card
        img={pcGamer}
        title={'SuperCompu3000'}
        info={'Mejor que la anterior xD'}
        />
        <Card
        img={pcGamer}
        title={'SuperCompu4000'}
        info={'Mejor que las 2 anteriores xD'}
        />
        <Card
        img={pcGamer}
        title={'SuperCompu10000'}
        info={'La mas pro de todas'}
        />
    </main>
  )
}

export default Content