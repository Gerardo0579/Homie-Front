import { GithubIcon } from '../../Icons/GithubIcon'

interface FooterItemsProps {
  Content: JSX.Element | string
  siteUrl: string
}

export const FooterItems: FooterItemsProps[] = [
  {
    Content: <GithubIcon text={'© 2022 GitHub, Inc.'} />,
    siteUrl:
      'https://docs.github.com/en/github/site-policy/github-terms-of-service'
  },
  {
    Content: 'Terms',
    siteUrl:
      'https://docs.github.com/en/github/site-policy/github-terms-of-service'
  },
  {
    Content: 'Privacy',
    siteUrl:
      'https://docs.github.com/en/github/site-policy/github-privacy-statement'
  },
  { Content: 'Security', siteUrl: 'https://github.com/security' },
  { Content: 'Status', siteUrl: 'https://www.githubstatus.com/' },
  { Content: 'Docs', siteUrl: 'https://docs.github.com' },
  {
    Content: 'Contact GitHub',
    siteUrl: 'https://support.github.com?tags=dotcom-footer'
  },
  { Content: 'Pricing', siteUrl: 'https://github.com/pricing' },
  { Content: 'API', siteUrl: 'https://docs.github.com' },
  { Content: 'Training', siteUrl: 'https://services.github.com' },
  { Content: 'Blog', siteUrl: 'https://github.blog' },
  { Content: 'About', siteUrl: 'https://github.com/about' }
]
