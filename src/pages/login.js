/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/core"
import { Formik, Field, Form } from "formik"

import Container from "../components/container"
import Logo from "../components/logo"

const SignIn = () => (
  <Container>
    <Flex
      my={24}
      css={{ minHeight: `50vh` }}
      align="center"
      justify="flex-start"
      direction="column"
    >
      <Logo />
      <Heading fontSize="3xl" mb={6}>
        Sign in to your account
      </Heading>
      <Box p={10} borderRadius={4} borderColor="gray.200" borderWidth={1}>
        <Formik
          initialValues={{ email: "kyle@gill.com", password: "password" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    mb={2}
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input {...field} id="email" placeholder="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    mb={2}
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      {...field}
                      id="password"
                      placeholder="password"
                      type="password"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                variantColor="yellow"
                isLoading={isSubmitting}
                type="submit"
                css={{
                  width: `100%`,
                }}
              >
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Text mt={2} color="gray.500">
        Don't have an account?{" "}
        <Link color="blue.600" to="/register" as={GatsbyLink}>
          Sign up
        </Link>{" "}
        for one instead.
      </Text>
    </Flex>
  </Container>
)

export default SignIn