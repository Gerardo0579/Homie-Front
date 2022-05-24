import { Menu } from 'antd'
import React, { FC } from 'react'
import { MenuItems, MenuItemProps } from './menuItems'
import styles from './HomieHeader.module.css'

export const HomieHeader: FC = () => {
  return (
    <>
      <Menu
        className={styles.menuBar}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}>
        {MenuItems.map((item: MenuItemProps) => {
          return (
            <Menu.Item
              disabled={item.isDisabled}
              className={styles.menuItem}
              key={item.Key}>
              {item.Icon}
            </Menu.Item>
          )
        })}
      </Menu>
    </>
  )
}
