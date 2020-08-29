/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
import { Link as GatsbyLink } from "gatsby"
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
  Tooltip,
} from "@chakra-ui/core"
import gql from "graphql-tag"
import ContentLoader from "react-content-loader"
import { Helmet } from "react-helmet"

import Container from "../components/container"
import ClientOnly from "../components/client-only"
import { AuthContext } from "../context/auth-context"
import {
  Apple,
  Pencil,
  Inverted,
  Pear,
  Rectangle,
  Hourglass,
} from "../icons/body-types"

const iconImgs = {
  "Inverted Triangle": <Inverted width={20} />,
  Apple: <Apple width={20} />,
  Pear: <Pear width={20} />,
  Hourglass: <Hourglass width={20} />,
  Pencil: <Pencil width={20} />,
  Rectangle: <Rectangle width={20} />,
}

const USER_INFO = gql`
  query UserInfo {
    me {
      id
      email
      username
      traitSet {
        id
        bodyType {
          id
          name
        }
      }
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
          <Flex
            p={4}
            borderColor="gray.200"
            borderWidth={1}
            borderRadius="sm"
            align="center"
            justify="space-between"
          >
            <Grid
              gridTemplateColumns="32px auto"
              gridGap={2}
              fontSize="md"
              color="gray.600"
            >
              <Flex
                key={data?.me?.traitSet.bodyType.id}
                align="center"
                justify="center"
                bg="gray.100"
                borderWidth="1.5px"
                borderColor="white"
                borderRadius={99}
                maxHeight="32px"
                maxWidth="32px"
              >
                <Tooltip
                  label={data?.me?.traitSet.bodyType.name}
                  placement="top"
                  hasArrow={true}
                  zIndex={999999}
                >
                  <div>{iconImgs[data?.me?.traitSet.bodyType.name]}</div>
                </Tooltip>
              </Flex>
              <Flex align="center">
                <Text fontWeight="bold" marginRight={1}>
                  {data?.me?.traitSet.bodyType.name ?? ""}
                </Text>
                Body Shape
              </Flex>
            </Grid>
            <Button
              as={GatsbyLink}
              variantColor="blue"
              size="sm"
              to="/body-quiz/intro"
            >
              Take Quiz
            </Button>
          </Flex>
        </Stack>
      </Grid>
    </Container>
  )
}

export default Account
