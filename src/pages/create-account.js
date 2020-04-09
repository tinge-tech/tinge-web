/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link as GatsbyLink, navigate } from "gatsby"
import { useContext } from "react"
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
  useToast,
} from "@chakra-ui/core"
import { Formik, Field, Form } from "formik"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Container from "../components/container"
import Logo from "../components/logo"

const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        id
      }
    }
  }
`

const CreateAccount = () => {
  const toast = useToast()
  const [createUser] = useMutation(CREATE_ACCOUNT, {
    onCompleted: ({ createUser }) => {
      toast({
        title: "Account Created",
        description:
          "We just created your account, please confirm by clicking on the verification link in the email we sent you.",
        status: "success",
        duration: 4500,
        isClosable: true,
      })
    },
    onError: error => {
      toast({
        title: "Problem Creating Account",
        description: error.message.includes("duplicate key")
          ? "That username or email already exists. You may need to create a new account or try logging in."
          : "There was a problem signing you in, if you keep having problems please contact us.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      })
    },
  })

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
        <Heading fontSize="3xl" mb={2}>
          Create an account
        </Heading>
        <Text mb={6} color="gray.500" maxWidth={480} textAlign="center">
          Get a personalized color palette with your own colors and start
          finding personalized recommendations. Save favorites and keep track of
          what looks best on you.
        </Text>
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
              const data = await createUser({
                variables: {
                  name: values.name,
                  username: values.username,
                  email: values.email,
                  password: values.password,
                },
              })
              actions.setSubmitting(false)
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      mb={2}
                      isRequired
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input {...field} id="username" placeholder="username" />
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
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
                        placeholder="email"
                        type="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field
                  name="password"
                  validate={value => {
                    if (value.length <= 8) {
                      return "Your password needs to be 8 characters or longer"
                    }
                    return undefined
                  }}
                >
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
                        placeholder="password"
                        type="password"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field
                  name="agree"
                  validate={value =>
                    value ? undefined : `Please accept the terms`
                  }
                >
                  {({ field, form }) => (
                    <FormControl
                      mb={2}
                      isRequired
                      isInvalid={
                        form.errors.agree &&
                        form.submitCount > 0 &&
                        !form.values.agree
                      }
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
                  Create Account
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Text mt={2} color="gray.500">
          Already have an account?{" "}
          <Link color="blue.600" to="/signin" as={GatsbyLink}>
            Sign in
          </Link>{" "}
          instead.
        </Text>
      </Flex>
    </Container>
  )
}

export default CreateAccount
