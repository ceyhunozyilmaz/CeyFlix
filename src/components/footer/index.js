import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with by&nbsp;
      <Link href='https://www.linkedin.com/in/ceyhun-ozy%C4%B1lmaz/' target='_blank' >
        Ceyhun Özyılmaz
        </Link>
    </footer>
  )
}

export default Footer