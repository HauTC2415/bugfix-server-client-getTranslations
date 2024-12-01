'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function NavItems({
  menuItems,
  className
}: {
  menuItems: { title: string; href: string }[]
  className?: string
}) {
  const path = usePathname()
  return (
    <>
      {menuItems.map((item) => (
        <>
          <Link
            href={item.href}
            key={item.href}
            className={`${className} relative ${item.href === path ? 'hover:text-foreground' : 'text-muted-foreground'}`}
          >
            {item.href === path && (
              <motion.span
                color='primary'
                initial={{ y: '-100%', opacity: 1 }}
                animate={{ y: 0 }}
                transition={{ type: 'tween', duration: 0.3 }}
                layoutId='underLine'
                className='absolute left-0 top-full h-[2px] bg-primary w-full'
              />
            )}
            {item.title}
          </Link>
        </>
      ))}
    </>
  )
}
