/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext, useState } from "react"
import { Link as GatsbyLink, navigate } from "gatsby"
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
  useToast,
} from "@chakra-ui/core"
import { Formik, Field, Form } from "formik"

import { AuthContext } from "../context/auth-context"
import Container from "../components/container"
import Logo from "../components/logo"

const SignIn = () => {
  const { login, isAuthenticated } = useContext(AuthContext)
  const [submitted, setSubmitted] = useState(false)
  const toast = useToast()

  if (isAuthenticated && !submitted) {
    navigate(`/account`)
    toast({
      title: "Already Signed In",
      description:
        "You are already signed in, you can logout from your profile and sign in if you would like to sign in to a different account.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    })
  }

  return (
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
        <Box
          p={10}
          backgroundColor="white"
          borderRadius="md"
          borderColor="gray.200"
          borderWidth={1}
          minWidth={[320, 320, 420]}
        >
          <Formik
            initialValues={{}}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true)
              setSubmitted(true)
              const success = await login(values.email, values.password)
              if (success) {
                // navigate occurs in the success from context
              } else {
                toast({
                  title: "Problem Signing In",
                  description:
                    "Hmm, that email and password didn't match any user. Please try again or reset your password.",
                  status: "warning",
                  duration: 3000,
                  isClosable: true,
                })
              }
              actions.setSubmitting(false)
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      mb={2}
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        id="email"
                        placeholder="you@email.com"
                        autoComplete="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      mb={2}
                      isRequired
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...field}
                        id="password"
                        placeholder="········"
                        type="password"
                        autoComplete="current-password"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  mb={1}
                  variantColor="yellow"
                  isLoading={isSubmitting}
                  type="submit"
                  css={{
                    width: `100%`,
                  }}
                >
                  Sign in
                </Button>
                <Link
                  mt={4}
                  color="blue.600"
                  to="/forgot-password"
                  as={GatsbyLink}
                  fontSize="sm"
                >
                  Forgot your password?
                </Link>
              </Form>
            )}
          </Formik>
        </Box>
        <Text mt={2} color="gray.500">
          Don't have an account?{" "}
          <Link color="blue.600" to="/create-account" as={GatsbyLink}>
            Create an account
          </Link>{" "}
          instead.
        </Text>
      </Flex>
    </Container>
  )
}

export default SignIn
