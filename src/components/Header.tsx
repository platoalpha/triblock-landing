'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import Image from 'next/image'
import LogoImage from '@/images/logo.png'

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Image
                alt="TriblockHR & Payroll"
                src={LogoImage}
                className="mx-auto h-15 w-full"
                width={250}
                height={100}
                unoptimized={true}
              />
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
