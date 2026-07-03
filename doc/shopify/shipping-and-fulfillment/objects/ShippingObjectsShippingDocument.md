---
title: ShippingObjectsShippingDocument - GraphQL Admin
description: Represents a shipping document.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingObjectsShippingDocument
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingObjectsShippingDocument.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Shipping​Objects​Shipping​Document

object

Requires `read_shipping` access scope or `read_orders` access scope.

Represents a shipping document.

## Fields

* document​Type

  [Shipping​Document​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingDocumentType)

  non-null

  The type of the shipping document.

* format

  [Shipping​Enums​File​Format](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShippingEnumsFileFormat)

  File format of the shipping document.

* printed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The last time the document was printed.

* shipping​Label​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The shipping label associated with the shipping document.

* url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  URL of the shipping document.

***

## Map

### Fields with this object

* [ShippingLabel.shippingDocuments](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLabel#field-ShippingLabel.fields.shippingDocuments)
