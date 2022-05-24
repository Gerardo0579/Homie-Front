import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { FooterItems } from './FooterItems'

export const HomieFooter: FC = () => {
  return (
    <div className={styles.footerWraper}>
      {FooterItems.map((item) => (
        <Link
          key={item.Key}
          className={styles.footerLink}
          to={{ pathname: item.siteUrl }}
          type="text"
          target="_blank">
          {item.Content}
        </Link>
      ))}
    </div>
  )
}
