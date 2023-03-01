'use client'

import { CSSProperties, FC } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const styleActive: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
};

interface Props {
  text: string;
  href: string;
}


export const ActiveLink: FC<Props> = ({ href, text }) => {
  const pathname = usePathname();
  return (
    <span style={pathname === href ? styleActive : undefined}>
      <Link id={href} href={href}>
        { text }
      </Link>
    </span>
  )
}
