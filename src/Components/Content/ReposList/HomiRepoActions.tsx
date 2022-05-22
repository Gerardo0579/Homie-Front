import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ForkIcon } from '../../../Icons/ForkIcon'
import { BalanceIcon } from '../../../Icons/BalanceIcon'
import { HomieLanguageItem } from '../../LanguageItem.tsx/HomieLanguageItem'
import { LanguagesColorSchemasData } from '../LanguagesColorSchemasData'
import { Space, Typography } from 'antd'
import { StarIcon } from '../../../Icons/StarIcon'

const { Text } = Typography

interface HomieRepoActionsProps {
  language: string
  language_url: string
  stars: number
  stars_url: string
  forks: number
  forks_url: string
  license_type?: string
  license_url?: string
  last_update: string
}

export const HomieRepoActions: FC<HomieRepoActionsProps> = (item) => {
  return (
    <Space>
      {item.language && LanguageItem(item)}
      {item.stars > 0 && StarsItem(item)}
      {item.forks > 0 && ForksItem(item)}
      {item.license_type && LicenseItem(item)}
      {item.last_update && <Text>{`Updated on ${item.last_update}`}</Text>}
    </Space>
  )
}

const LanguageItem = (item: HomieRepoActionsProps) => {
  return (
    <Link to={item.language_url} type="text">
      <HomieLanguageItem
        Content={item.language}
        CircleColor={GetLangaugeColor(item.language)}
      />
    </Link>
  )
}

const GetLangaugeColor = (language: string): string => {
  const langColor = LanguagesColorSchemasData.filter(
    (langColor) =>
      langColor.Language.toLowerCase() === language?.toLocaleLowerCase()
  )

  if (langColor?.length === 0) return 'grey'
  else return langColor[0].Color
}

const StarsItem = (item: HomieRepoActionsProps) => {
  return (
    <Link to={item.stars_url} type="text">
      <StarIcon text={item.stars} />
    </Link>
  )
}

const ForksItem = (item: HomieRepoActionsProps) => {
  return (
    <Link to={item.forks_url} type="text">
      <ForkIcon text={item.forks} />
    </Link>
  )
}

const LicenseItem = ({
  license_type = '',
  license_url = ''
}: HomieRepoActionsProps) => {
  return (
    <Link to={license_url} type="text">
      <BalanceIcon text={license_type} />
    </Link>
  )
}
