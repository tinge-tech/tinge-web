/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Button,
  Checkbox,
  Heading,
  Link,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/core"
import { Formik, Field, Form } from "formik"

import Container from "../components/container"
import Logo from "../components/logo"

const Register = () => (
  <Container>
    <Flex
      my={24}
      css={{ minHeight: `50vh` }}
      align="center"
      justify="flex-start"
      direction="column"
    >
      <Logo />
      <Heading fontSize="3xl" mb={2}>
        Sign up for an account
      </Heading>
      <Text mb={6} color="gray.500" maxWidth={480} textAlign="center">
        Get a personalized color palette with your own colors and start finding
        personalized recommendations. Save favorites and keep track of what
        looks best on you.
      </Text>
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
              <Field name="agree">
                {({ field, form }) => (
                  <FormControl
                    mb={2}
                    isInvalid={form.errors.agree && form.touched.agree}
                  >
                    <Checkbox
                      {...field}
                      id="agree"
                      size="sm"
                      variantColor="yellow"
                    >
                      I agree to the terms and conditions
                    </Checkbox>
                    <FormErrorMessage>{form.errors.agree}</FormErrorMessage>
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
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Text mt={2} color="gray.500">
        Already have an account?{" "}
        <Link color="blue.600" to="/login" as={GatsbyLink}>
          Sign in
        </Link>{" "}
        instead.
      </Text>
    </Flex>
  </Container>
)

export default Register
