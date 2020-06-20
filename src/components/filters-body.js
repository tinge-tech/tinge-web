/** @jsx jsx */
import { jsx } from "theme-ui"
import { forwardRef, useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormLabel,
  Heading,
  RadioButtonGroup,
  Stack,
  Switch,
} from "@chakra-ui/core"

import {
  Apple,
  Pencil,
  Inverted,
  Pear,
  Rectangle,
  Hourglass,
} from "../icons/body-types"
import Verified from "../icons/verified-badge"
import { FiltersContext } from "../context/filters-context"
import { ColorFilters } from "../components/colors"
import ColorListFromIds from "../components/color-list-from-ids"

const CustomBodyTypeRadio = forwardRef((props, ref) => {
  const { _isChecked, isDisabled, value, isSelected, children, ...rest } = props

  return (
    <Button
      ref={ref}
      variantColor={isSelected ? "blue" : "gray"}
      aria-checked={isSelected}
      role="radio"
      isDisabled={isDisabled}
      py="1"
      fontWeight="medium"
      justifyContent="flex-start"
      css={{ height: `100%` }}
      {...rest}
    >
      {children}
    </Button>
  )
})

const FiltersBody = ({ ...props }) => {
  const { filters, setFilter } = useContext(FiltersContext)
  const [colorClearKey, setColorClearKey] = useState(0)
  const categoriesData = useStaticQuery(graphql`
    query AllCategoriesQuery {
      allCategory {
        nodes {
          id
          name
        }
      }
    }
  `)

  return (
    <Flex direction="column" {...props}>
      <Flex align="flex-start" justify="space-between">
        <Heading as="h3" fontWeight="medium" fontSize="lg" mb={2}>
          Body Shape
        </Heading>
        <Button
          leftIcon="small-close"
          size="xs"
          variant="ghost"
          variantColor="blue"
          onClick={() => setFilter(`bodyType`, null)}
        >
          Clear
        </Button>
      </Flex>
      <RadioButtonGroup
        defaultValue="rad2"
        onChange={val => setFilter(`bodyType`, val)}
        gridGap="4"
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridTemplateRows: `auto`,
        }}
      >
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `IT`}
          leftIcon={Inverted}
          value="IT"
          tabIndex={-1}
        >
          Triangle
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `A`}
          leftIcon={Apple}
          value="A"
          tabIndex={-1}
        >
          Apple
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `P`}
          leftIcon={Pear}
          value="P"
          tabIndex={-1}
        >
          Pear
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `H`}
          leftIcon={Hourglass}
          value="H"
          tabIndex={-1}
        >
          Hourglass
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `PE`}
          leftIcon={Pencil}
          value="PE"
          tabIndex={-1}
        >
          Pencil
        </CustomBodyTypeRadio>
        <CustomBodyTypeRadio
          isSelected={filters.bodyType === `R`}
          leftIcon={Rectangle}
          value="R"
          tabIndex={-1}
        >
          Rectangle
        </CustomBodyTypeRadio>
      </RadioButtonGroup>
      <Flex align="flex-start" justify="space-between" mt={4} mb={2}>
        <Stack isInline spacing="2">
          <Box>
            <Heading as="h3" fontWeight="medium" fontSize="lg">
              Colors
            </Heading>
          </Box>
          <ColorListFromIds colorIds={filters.colors} max={5} />
        </Stack>
        <Button
          leftIcon="small-close"
          size="xs"
          variant="ghost"
          variantColor="blue"
          onClick={() => {
            setColorClearKey(colorClearKey + 1)
            setFilter(`colors`, [])
          }}
        >
          Clear
        </Button>
      </Flex>
      <ColorFilters key={colorClearKey} setFilter={setFilter} />
      <Flex align="flex-start" justify="space-between" mt={4} mb={2}>
        <Heading as="h3" fontWeight="medium" fontSize="lg">
          Categories
        </Heading>
        <Button
          leftIcon="small-close"
          size="xs"
          variant="ghost"
          variantColor="blue"
          onClick={() => setFilter(`categories`, [])}
        >
          Clear
        </Button>
      </Flex>
      <CheckboxGroup
        variantColor="blue"
        css={{
          display: `grid`,
          gridColumnGap: "4",
          gridTemplateColumns: [`1fr 1fr`],
        }}
        value={filters.categories}
        onChange={val => setFilter(`categories`, val)}
      >
        {categoriesData.allCategory.nodes.map(category => (
          <Checkbox value={category.id} data-category>
            {category.name}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Heading as="h3" fontWeight="medium" fontSize="lg" my={4} mb={2}>
        Verified by TINGE
      </Heading>
      <Stack direction="row" align="center">
        <Verified small />
        <FormLabel
          htmlFor="email-alerts"
          css={{
            position: "absolute",
            height: 1,
            width: 1,
            overflow: "hidden",
          }}
        >
          Verified by TINGE
        </FormLabel>
        <Switch
          ml={1}
          css={{ display: `flex` }}
          value={filters.verified}
          onChange={event => setFilter(`verified`, event.target.checked)}
        />
      </Stack>
      {/* <Heading as="h3" fontWeight="medium" fontSize="lg" mt={4} mb={2}>
        Brand
      </Heading>
      <CheckboxGroup
        variantColor="blue"
        defaultValue={["amazon"]}
        css={{
          display: `grid`,
          gridColumnGap: "4",
          gridTemplateColumns: [`1fr 1fr`],
        }}
      >
        <Checkbox value="amazon">Amazon</Checkbox>
        <Checkbox value="sasuke">American Eagle</Checkbox>
        <Checkbox value="kakashi">Athleta</Checkbox>
        <Checkbox value="kakai">Gap</Checkbox>
        <Checkbox value="kahi">H&M</Checkbox>
        <Checkbox value="kakahi">Lululemon</Checkbox>
        <Checkbox value="ki">Marmot</Checkbox>
        <Checkbox value="k">North Face</Checkbox>
      </CheckboxGroup> */}
    </Flex>
  )
}

export default FiltersBody
