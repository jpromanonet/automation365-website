import LanguageSelector from './languageSelector'
import Switcher from './switcher'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className="w-full py-8 text-center  items-center justify-center dark:text-slate-300">
      <div className="block ">
        <Switcher />
        <LanguageSelector />
      </div>
      <footer className="py-4">&copy; Juan P. Romano - 2023</footer>
    </div>
  )
}
