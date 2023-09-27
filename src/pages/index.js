import { useTheme } from 'next-themes'

export default function Home() {
  const {theme, setTheme} = useTheme();

  return (
    <>
      <h1>The Next.js App</h1>
      <div className='button_container'>
        <button className='light_button' onClick={()=> setTheme('light')}>Light Mode</button>
        <button className='dark_button' onClick={()=> setTheme('dark')}>Dark Mode</button>
      </div>
    </>
  )
}
