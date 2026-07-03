---
title: LocationSuggestedAddress - GraphQL Admin
description: Represents a suggested address for a location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSuggestedAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSuggestedAddress.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Location​Suggested​Address

object

Represents a suggested address for a location.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the suggested address.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the suggested address.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city of the suggested address.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The country of the suggested address.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  The country code of the suggested address.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A formatted version of the suggested address.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province of the suggested address.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code for the province, state, or district of the suggested address.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ZIP code of the suggested address.

***

## Map

### Fields with this object

* [Location.suggestedAddresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.suggestedAddresses)
