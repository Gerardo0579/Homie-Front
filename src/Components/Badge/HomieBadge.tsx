import React, { FC } from 'react'
import styles from './HomieBadge.module.css'

interface HomieBadgeProps {
  content: string | number
  backgroundColor: string
  borderColor: string
  fontColor: string
}

export const HomieBadge: FC<HomieBadgeProps> = ({
  content,
  backgroundColor,
  borderColor,
  fontColor
}) => {
  return (
    <div
      style={{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        color: fontColor
      }}
      className={styles.badgeTypeRepo}>
      {content}
    </div>
  )
}
