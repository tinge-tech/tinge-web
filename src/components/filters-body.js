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
  Icon,
  RadioButtonGroup,
  Stack,
  Switch,
  Tooltip,
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
      height="44px !important"
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
  const filtersData = useStaticQuery(graphql`
    query AllFiltersDataQuery {
      allCategory {
        nodes {
          id
          name
          categoryId
        }
      }
      allRetailer(
        filter: {
          clothingItems: { elemMatch: { imgUrl: { regex: "/.*/", ne: null } } }
        }
      ) {
        nodes {
          id
          name
          retailerId
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
      <ColorFilters
        key={colorClearKey}
        setFilter={setFilter}
        filterColors={filters.colors}
      />
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
        {filtersData.allCategory.nodes.map(category => (
          <Checkbox key={category.id} value={category.categoryId} data-category>
            {category.name}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Heading as="h3" fontWeight="medium" fontSize="lg" my={4} mb={2}>
        <Flex align="center">
          Verified by TINGE{" "}
          <Tooltip
            hasArrow
            label="Items verified by Tinge have passed a review for quality and fit to assure they are the proper colors, and fit body shapes."
            placement="top"
          >
            <Icon color="gray.300" name="question" marginLeft={2} />
          </Tooltip>
        </Flex>
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
      <Flex align="flex-start" justify="space-between" mt={4} mb={2}>
        <Heading as="h3" fontWeight="medium" fontSize="lg">
          Retailers
        </Heading>
        <Button
          leftIcon="small-close"
          size="xs"
          variant="ghost"
          variantColor="blue"
          onClick={() => setFilter(`retailers`, [])}
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
        value={filters.retailers}
        onChange={val => setFilter(`retailers`, val)}
      >
        {filtersData.allRetailer.nodes.map(retailer => (
          <Checkbox key={retailer.id} value={retailer.retailerId} data-category>
            {retailer.name}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Flex>
  )
}

export default FiltersBody
