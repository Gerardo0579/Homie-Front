import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd'
import { HomieBadge } from '../../../../Badge/HomieBadge'

interface HomieRepoItemTopicsProps {
  topics?: string[]
}

export const HomieRepoItemTopics: FC<HomieRepoItemTopicsProps> = ({
  topics
}) => {
  return (
    <Space size={[10, 5]} wrap>
      {topics &&
        topics.map((topic) => {
          return <HomieRepoItemTopic key={topic} topic={topic} />
        })}
    </Space>
  )
}

interface HomieRepoItemTopicProps {
  topic: string
}
const HomieRepoItemTopic = ({ topic }: HomieRepoItemTopicProps) => {
  const topicUrl = buildTopicURL(topic)
  return (
    <Link key={topic} to={{ pathname: topicUrl }} type="text" target="_blank">
      <HomieBadge
        borderColor="#fff"
        backgroundColor="#ddf4ff"
        fontColor="#0960da"
        content={topic}
      />
    </Link>
  )
}

const buildTopicURL = (topic: string) => {
  const base_url = 'https://github.com/topics/'
  return `${base_url}${topic.toLowerCase}`
}
