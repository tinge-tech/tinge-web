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
  useToast,
} from "@chakra-ui/core"
import { Formik, Field, Form } from "formik"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Container from "../components/container"
import Logo from "../components/logo"

const REQUEST_PASSWORD_RESET_MUTATION = gql`
  mutation {
    requestPasswordReset(email: "asdftest@getnada.com") {
      success
    }
  }
`

const ForgotPassword = () => {
  const toast = useToast()
  const [requestPasswordReset] = useMutation(REQUEST_PASSWORD_RESET_MUTATION)

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
              const success = await requestPasswordReset(values.email)
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
                // as a precaution we should still set the toast as a security measure so
                // automated form stuffing can't check for a success message
                toast({
                  title: "Reset Link Sent",
                  description:
                    "Please click on the link the email you received to enter a new password.",
                  status: "success",
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
