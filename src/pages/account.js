/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import {
  Avatar,
  AvatarBadge,
  Button,
  Heading,
  Flex,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  Text,
} from "@chakra-ui/core"
import gql from "graphql-tag"
import ContentLoader from "react-content-loader"

import Container from "../components/container"
import ClientOnly from "../components/client-only"
import { AuthContext } from "../context/auth-context"

const USER_INFO = gql`
  query UserInfo {
    me {
      id
      email
      username
    }
  }
`

const Account = () => {
  const { data, loading } = useQuery(USER_INFO)
  const { logout } = useContext(AuthContext)

  console.log({ data, loading })

  return (
    <Container css={{ flex: 1, margin: `0 auto` }}>
      <Grid
        mt={6}
        gridTemplateAreas={[
          `"details" "content"`,
          `"details" "content"`,
          `"details content ."`,
        ]}
        gridTemplateColumns={[
          `1fr`,
          `1fr`,
          `minmax(150px, 1fr) 420px minmax(150px, 1fr)`,
        ]}
      >
        <Flex
          p={3}
          gridArea="details"
          direction={["row", "row", "column"]}
          align="center"
        >
          <Avatar size="xl">
            <AvatarBadge size="1.25em" bg="green.500" />
          </Avatar>
          <Stat p={3}>
            <StatLabel>Favorites</StatLabel>
            <StatNumber>0</StatNumber>
          </Stat>
        </Flex>
        <Stack gridArea="content" direction="column">
          <Heading fontSize="3xl" mt={5} mb={2}>
            <ClientOnly
              loading={loading}
              placeholder={
                <ContentLoader width={200} height={37}>
                  <rect x="0" y="0" ry="4" rx="4" width="200" height="37" />
                </ContentLoader>
              }
            >
              {data?.me?.email}
            </ClientOnly>
          </Heading>
          <Text fontSize="xl" mb={2}>
            <ClientOnly
              loading={loading}
              placeholder={
                <ContentLoader width={140} height={30}>
                  <rect x="0" y="0" ry="4" rx="4" width="120" height="30" />
                </ContentLoader>
              }
            >
              {data?.me?.username}
            </ClientOnly>
          </Text>
          <div>
            <Button onClick={() => logout()}>Logout</Button>
          </div>
        </Stack>
      </Grid>
    </Container>
  )
}

export default Account
