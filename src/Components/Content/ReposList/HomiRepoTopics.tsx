import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd'
import { HomieBadge } from '../../Badge/HomieBadge'

interface HomieRepoTopicsProps {
  topics: string[]
}

export const HomieRepoTopics: FC<HomieRepoTopicsProps> = (topics) => {
  return (
    <Space>
      {topics.topics &&
        topics.topics.map((topic) => {
          return <HomieRepoTopic topic={topic} />
        })}
    </Space>
  )
}

interface HomieRepoTopicProps {
  topic: string
}
const HomieRepoTopic = ({ topic }: HomieRepoTopicProps) => {
  const topicUrl = buildTopicURL(topic)
  return (
    <Link key={topic} to={topicUrl} type="text">
      <HomieBadge content={topic} />
    </Link>
  )
}

const buildTopicURL = (topic: string) => {
  const base_url = 'https://github.com/topics/'
  return `${base_url}${topic.toLowerCase}`
}
