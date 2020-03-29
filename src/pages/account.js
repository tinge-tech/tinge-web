/** @jsx jsx */
import { jsx } from "@emotion/core"
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

import Container from "../components/container"

const Account = () => (
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
          Account
        </Heading>
        <Text fontSize="xl" mb={2}>
          Username
        </Text>
        <div>
          <Button>Logout</Button>
        </div>
      </Stack>
    </Grid>
  </Container>
)

export default Account
