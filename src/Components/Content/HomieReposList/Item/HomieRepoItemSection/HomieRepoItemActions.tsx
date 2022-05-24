import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ForkIcon } from '../../../../../Icons/ForkIcon'
import { BalanceIcon } from '../../../../../Icons/BalanceIcon'
import { HomieLanguageItem } from '../../../../LanguageItem.tsx/HomieLanguageItem'
import { LanguagesColorSchemasData } from '../../../LanguagesColorSchemasData'
import { Space, Typography } from 'antd'
import { StarIcon } from '../../../../../Icons/StarIcon'

const { Text } = Typography

interface HomieRepoItemActionsProps {
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

export const HomieRepoItemActions: FC<HomieRepoItemActionsProps> = (item) => {
  return (
    <Space size={[20, 5]} wrap>
      {item.language && LanguageItem(item)}
      {item.stars > 0 && StarsItem(item)}
      {item.forks > 0 && ForksItem(item)}
      {item.license_type && LicenseItem(item)}
      {item.last_update && <Text>{`Updated on ${item.last_update}`}</Text>}
    </Space>
  )
}

const LanguageItem = (item: HomieRepoItemActionsProps) => {
  return (
    <Link to={{ pathname: item.language_url }} type="text" target="_blank">
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

const StarsItem = (item: HomieRepoItemActionsProps) => {
  return (
    <Link to={{ pathname: item.stars_url }} type="text" target="_blank">
      <StarIcon text={item.stars} />
    </Link>
  )
}

const ForksItem = (item: HomieRepoItemActionsProps) => {
  return (
    <Link to={{ pathname: item.forks_url }} type="text" target="_blank">
      <ForkIcon text={item.forks} />
    </Link>
  )
}

const LicenseItem = ({
  license_type = '',
  license_url = ''
}: HomieRepoItemActionsProps) => {
  return (
    <Link to={{ pathname: license_url }} type="text" target="_blank">
      <BalanceIcon text={license_type} />
    </Link>
  )
}
