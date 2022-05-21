import React, { FC } from 'react'
import styles from './HomieBadge.module.css'

interface HomieBadgeProps {
  content: string | number
}

export const HomieBadge: FC<HomieBadgeProps> = ({ content }) => {
  return <div className={styles.badgeTypeRepo}>{content}</div>
}
