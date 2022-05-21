import { Menu } from 'antd'
import React, { FC } from 'react'
import { menuItems, MenuItemsType } from './menuItems'

export const HomieHeader: FC = () => {
  return (
    <>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        {menuItems.map((item: MenuItemsType) => {
          return <Menu.Item key={item.Title}>{item.Title}</Menu.Item>
        })}
      </Menu>
    </>
  )
}
