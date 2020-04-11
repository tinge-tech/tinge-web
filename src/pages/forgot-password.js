/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useContext } from "react"
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
  useToast,
} from "@chakra-ui/core"
import { Formik, Field, Form } from "formik"

import { AuthContext } from "../context/auth-context"
import Container from "../components/container"
import Logo from "../components/logo"

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext)
  const toast = useToast()

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
          Reset your Password
        </Heading>
        <Box
          p={10}
          borderRadius={4}
          borderColor="gray.200"
          borderWidth={1}
          minWidth={[320, 320, 420]}
        >
          <Formik
            initialValues={{}}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true)
              const success = true
              // const success = await login(values.email, values.password)
              if (success) {
                toast({
                  title: "Reset Link Sent",
                  description:
                    "Please click on the link the email you received to enter a new password.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              } else {
                // no need to do anything on failure, maybe say an email is sent when it's not
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
                  Send Reset Link
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Text mt={2} color="gray.500">
          Return to{" "}
          <Link color="blue.600" to="/signin" as={GatsbyLink}>
            sign in
          </Link>{" "}
          instead.
        </Text>
      </Flex>
    </Container>
  )
}

export default ForgotPassword
