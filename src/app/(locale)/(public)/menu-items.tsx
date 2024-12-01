'use client'
import { getTranslations } from 'next-intl/server'
import NavItems from './nav-items'

export default function Navigation({ className }: { className?: string }) {
  const t = getTranslations('Menu')

  // const menuItems = [
  //   { title: t('Home'), href: '/' },
  //   { title: t('About'), href: '/about' },
  //   { title: t('Contact'), href: '/term-of-service' },
  //   { title: t('Login'), href: '/login' }
  // ]

  //todo:  menuItems tmp, remove after fixed use of getTranslations, pls
  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/term-of-service' },
    { title: 'Login', href: '/login' }
  ]

  return <NavItems menuItems={menuItems} className={className} />
}
