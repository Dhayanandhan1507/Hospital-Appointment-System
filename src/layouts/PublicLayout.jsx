import { Outlet,useLocation } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function PublicLayout(){
 const loc=useLocation();return <><Navbar/><AnimatePresence mode="wait"><motion.main key={loc.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.25}}><Outlet/></motion.main></AnimatePresence><Footer/></>
}
