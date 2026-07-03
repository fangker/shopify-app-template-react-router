---
title: BusinessEntityAddress - GraphQL Admin
description: Represents the address of a merchant's Business Entity.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntityAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntityAddress.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Business​Entity​Address

object

Represents the address of a merchant's Business Entity.

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

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-null

  The country code of the merchant's Business Entity.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The zip or postal code of the address.

***

## Map

### Fields with this object

* [BusinessEntity.address](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity#field-BusinessEntity.fields.address)
