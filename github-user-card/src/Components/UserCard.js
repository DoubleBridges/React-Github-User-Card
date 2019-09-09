import React from 'react';
import { Card } from 'semantic-ui-react'

const UserCard = (props) => {

  const data = props.userData

  const extra = (
    <p>Followers: {data.followers}</p>
  )

  return (
    <Card
      header={data.login}
      image={data.avatar_url}
      meta={data.name}
      description={data.bio}
      extra={extra}
    />

  )
}

export default UserCard