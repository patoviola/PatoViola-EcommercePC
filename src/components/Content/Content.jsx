import React from 'react'
import Card from '../Card/Card'
import pcGamer from '../../assetes/img/pcGamer.jpg'

function Content() {

  return (
    <main className='d-flex justify-content-evenly p-5'>
        <Card
        img={pcGamer}
        title={'Intel I5 10ma Gen Hd 1tb Ddr4 4gb Led 19 Gamer'}
        info={'La mejor PC para iniciarse en el mundo Gamer'}
        textButton={'Comprar'}/>
        <Card
        img={pcGamer}
        title={'SuperCompu3000'}
        info={'Mejor que la anterior xD'}
        textButton={'La Quiero'}
        />
        <Card
        img={pcGamer}
        title={'SuperCompu4000'}
        info={'Mejor que las 2 anteriores xD'}
        textButton={'Messi'}
        />
        <Card
        img={pcGamer}
        title={'SuperCompu10000'}
        info={'La mas pro de todas'}
        textButton={'La llevo'}
        />
    </main>
  )
}

export default Content