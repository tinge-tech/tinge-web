/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import {
  Avatar,
  AvatarBadge,
  Box,
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
import { Helmet } from "react-helmet"

import Container from "../components/container"
import ClientOnly from "../components/client-only"
import { AuthContext } from "../context/auth-context"

const USER_INFO = gql`
  query UserInfo {
    me {
      id
      email
      username
      favorites {
        id
      }
    }
  }
`

const Account = () => {
  const { data, loading } = useQuery(USER_INFO)
  const { logout } = useContext(AuthContext)

  return (
    <Container css={{ flex: 1, margin: `0 auto` }}>
      <Helmet title="Account" />
      <Grid
        my={6}
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
            <StatNumber>{data?.me?.favorites.length}</StatNumber>
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
          <Text fontSize="xl">
            <Stack isInline>
              <Text color="gray.600">Username</Text>
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
            </Stack>
          </Text>
          {/* <Box p={4} borderColor="gray.200" borderWidth={1} borderRadius="sm">
            <Heading as="h3" fontSize="xl">
              Your Palette
            </Heading>
          </Box>
          <Box p={4} borderColor="gray.200" borderWidth={1} borderRadius="sm">
            <Heading as="h3" fontSize="xl">
              Your Body Type
            </Heading>
          </Box> */}
          <Flex
            p={4}
            borderColor="gray.200"
            borderWidth={1}
            borderRadius="sm"
            align="center"
            justify="space-between"
          >
            <Text fontSize="md" color="gray.600">
              Account Actions
            </Text>
            <Button size="sm" onClick={() => logout()}>
              Logout
            </Button>
          </Flex>
          <Stack
            p={4}
            borderColor="gray.200"
            borderWidth={1}
            borderRadius="sm"
            isInline
            align="center"
          >
            <Box>
              <Text fontSize="sm" color="gray.500">
                Schedule a time to meet with an expert to determine your body
                shape
              </Text>
            </Box>
            <a
              href="https://calendly.com/tinge/tinge-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="solid" variantColor="blue">
                Find a Time
              </Button>
            </a>
          </Stack>
        </Stack>
      </Grid>
    </Container>
  )
}

export default Account
