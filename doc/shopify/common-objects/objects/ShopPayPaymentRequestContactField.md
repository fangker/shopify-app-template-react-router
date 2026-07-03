---
title: ShopPayPaymentRequestContactField - GraphQL Admin
description: Represents a contact field for a Shop Pay payment request.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestContactField
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestContactField.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shop​Pay​Payment​Request​Contact​Field

object

Represents a contact field for a Shop Pay payment request.

## Fields

* address1

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The first address line of the contact field.

* address2

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The second address line of the contact field.

* city

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The city of the contact field.

* company​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The company name of the contact field.

* country​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The country of the contact field.

* email

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The email of the contact field.

* first​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The first name of the contact field.

* last​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The last name of the contact field.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The phone number of the contact field.

* postal​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The postal code of the contact field.

* province​Code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The province of the contact field.

***

## Map

### Fields with this object

* [ShopPayPaymentRequest.shippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.shippingAddress)
