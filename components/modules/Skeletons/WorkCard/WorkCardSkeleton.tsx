import { Container, Skeleton } from '@mantine/core'
import React from 'react'

const WorkCardSkeleton = () => {
  return (
    <Container size={1280}>

      <Skeleton radius={"md"} animate={true} mt={120} h={250} >

      </Skeleton>

    </Container>

  )
}

export default WorkCardSkeleton