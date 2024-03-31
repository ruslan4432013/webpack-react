import { useState } from "react";
import s from './app.module.scss'
import { Link, Outlet } from "react-router-dom";
import freePng from '@/shared/assets/free.png'
import catJpg from '@/shared/assets/cat.jpg'
import CatSvg from '@/shared/assets/menu.svg'

export const App = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount(prev => prev + 1)

  if (__ENV__ === 'development') {
    // addDevtools()
  }

  return (
    <div data-testId={'AppTestId'}>
      <h1>PLATFORM = {__PLATFORM__}</h1>
      <h2>ENV = {__ENV__}s</h2>
      <img width={50} height={50} src={freePng} alt='free'/>
      <img width={50} height={50} src={catJpg} alt='free'/>
      <CatSvg width={50} height={50}/>
      <div><Link to={'/about'}>About</Link></div>
      <div><Link to={'/shop'}>Shop</Link></div>
      <h6 className={s.value}>
        {count}
      </h6>
      <button className={s.button} onClick={increment}>
        <span>inc</span>
      </button>
      <Outlet/>
    </div>
  )
}
