---
title: LocationAddress - GraphQL Admin
description: Represents the address of a location.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Location​Address

object

Represents the address of a location.

## Fields

* address1

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The first line of the address for the location.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second line of the address for the location.

* city

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The city of the location.

* country

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The country of the location.

* country​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The country code of the location.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A formatted version of the address for the location.

* latitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The approximate latitude coordinates of the location.

* longitude

  [Float](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

  The approximate longitude coordinates of the location.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number of the location.

* province

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province of the location.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code for the province, state, or district of the address of the location.

* zip

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The ZIP code of the location.

***

## Map

### Fields with this object

* [Location.address](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.address)
* [LocationSnapshot.address](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot#field-LocationSnapshot.fields.address)
