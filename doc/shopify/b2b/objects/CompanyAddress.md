---
title: CompanyAddress - GraphQL Admin
description: Represents a billing or shipping address for a company location.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyAddress.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Company​Address

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Represents a billing or shipping address for a company location.

## Fields

* address1

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the city, district, village, or town.

* company​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the company.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the country.

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The two-letter code for the country of the address. For example, US.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was created.

* first​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first name of the recipient.

* formatted​Address

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The formatted version of the address.

  * with​Company​Name

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether to include the company name in the formatted address.

  * with​Name

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the recipient's name in the formatted address.

  ***

* formatted​Area

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A comma-separated list of the values for city, province, and country.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The last name of the recipient.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique phone number for the customer. Formatted using E.164 standard. For example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* recipient

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The identity of the recipient e.g. 'Receiving Department'.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was last updated.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

* zone​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The alphanumeric code for the region. For example, ON.

***

## Map

### Fields with this object

* [CompanyLocation.billingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.billingAddress)
* [CompanyLocation.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.shippingAddress)

***

## Mutations

* [company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

  mutation

  Updates an address on a company location.

  * address

    [Company​Address​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyAddressInput)

    required

    ### Arguments

    The input fields to use to update the address.

  * address​Types

    [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyAddressType)

    required

    The list of address types on the location to update.

  * location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the company location to update addresses on.

  ***

***

## CompanyAddress Mutations

### Mutated by

* [company​Location​Assign​Address](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignAddress)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CompanyAddress Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
