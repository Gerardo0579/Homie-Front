import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ForkIcon } from '../../../../../Icons/ForkIcon'
import { BalanceIcon } from '../../../../../Icons/BalanceIcon'
import { HomieLanguageItem } from '../../../../../Components/HomieLanguageItem.tsx/HomieLanguageItem'
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
      {item.language && (
        <LanguageItem content={item.language} url={item.language_url} />
      )}

      {item.stars > 0 && (
        <StarsItem content={item.stars} url={item.stars_url} />
      )}

      {item.forks > 0 && (
        <ForksItem content={item.forks} url={item.forks_url} />
      )}

      {item.license_type && (
        <LicenseItem content={item.license_type} url={item.license_url || ''} />
      )}
      {item.last_update && (
        <Text data-testid="actionLink">{`Updated on ${item.last_update}`}</Text>
      )}
    </Space>
  )
}

interface LinkItemProps {
  url: string
  Icon: JSX.Element
}
const LinkItem: FC<LinkItemProps> = ({ url, Icon }) => {
  return (
    <Link
      data-testid="actionLink"
      to={{ pathname: url }}
      type="text"
      target="_blank">
      {Icon}
    </Link>
  )
}

interface ItemProps {
  url: string
  content: string | number
}
const LicenseItem: FC<ItemProps> = ({ content, url }) => {
  const Icon = <BalanceIcon text={content} />
  return <LinkItem Icon={Icon} url={url} />
}
const ForksItem: FC<ItemProps> = ({ content, url }) => {
  const Icon = <ForkIcon text={content} />
  return <LinkItem Icon={Icon} url={url} />
}
const StarsItem: FC<ItemProps> = ({ content, url }) => {
  const Icon = <StarIcon text={content} />
  return <LinkItem Icon={Icon} url={url} />
}
const LanguageItem: FC<ItemProps> = ({ content, url }) => {
  const Icon = (
    <HomieLanguageItem
      Content={content.toString()}
      CircleColor={GetLangaugeColor(content.toString())}
    />
  )
  return <LinkItem Icon={Icon} url={url} />
}

const GetLangaugeColor = (language: string): string => {
  const langColor = LanguagesColorSchemasData.filter(
    (langColor) =>
      langColor.Language.toLowerCase() === language?.toLocaleLowerCase()
  )

  if (langColor?.length === 0) return 'grey'
  else return langColor[0].Color
}
