'use client';

import { Box, Flex, Heading, Img } from '@chakra-ui/react';

function UserCard({ profile }) {
  return profile.login ? (
    <Flex direction='column' justify='center' align='center'>
      <Heading>{profile.login}</Heading>
      <Img src={profile.avatar_url} height='300' width='300' alt='' />
      <Heading>uses Github from</Heading>
      <Box>{profile.date}</Box>
    </Flex>
  ) : (
    <Flex direction='column' justify='center' align='center'>
      <Heading>The website is resting</Heading>
      <Heading>Come back later</Heading>
    </Flex>
  );
}

export default UserCard;
