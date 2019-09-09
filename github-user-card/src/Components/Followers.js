import React from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const FollowersContainer = styled.section`
  width: 800px;
`;

const Followers = (props) => {

  const numOfFollowers = props.followerData.length

  // console.log(numOfFollowers)

  const followers = props.followerData.map(follower => {

    return (
      <Card
        image={follower.avatar_url}
        key={follower.id}
        header={follower.login}
        value={follower.login}
        onClick={() => props.clickHandler(follower.login)}
      />
      
    )
  })

  return (
    <FollowersContainer>
    <Card.Group itemsPerRow={3}>
      {followers}
    </Card.Group>
    </FollowersContainer>
  )
}

export default Followers