import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import React from 'react'

import styles from './Header.module.scss'
import Nav from './Nav/Nav'

import Container from '../../ui/Container/Container'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link className={styles.logo} href={'/'}>
            <Image src="/logo1.png" alt={'logo'} width={150} height={75} />
          </Link>
          <Nav />
        </div>
      </Container>
    </header>
  )
}
export default React.memo(Header)
