---
title: ShopAddress - GraphQL Admin
description: An address for a shop.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAddress'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAddress.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Address

object

An address for a shop.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the company or organization.

* coordinates​Validated

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the address coordinates are valid.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the country.

* country​Code​V2

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The two-letter code for the country of the address.

  For example, US.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A formatted version of the address, customized by the provided arguments.

  * with​Company

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether to include the company in the formatted address.

  ***

* formatted​Area

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A comma-separated list of the values for city, province, and country.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* latitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The latitude coordinate of the address.

* longitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The longitude coordinate of the address.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A phone number associated with the address.

  Formatted using E.164 standard. For example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alphanumeric code for the region.

  For example, ON.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

### Deprecated fields

* country​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

* name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

### Fields with this object

* [Shop.shopAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.shopAddress)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## ShopAddress Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
