---
title: AbandonedCheckoutLineItemComponent - GraphQL Admin
description: The list of line item components that belong to a line item.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Abandoned​Checkout​Line​Item​Component

object

Requires `read_orders` access scope. Also: The user must have manage\_abandoned\_checkouts permission. When called by Shopify POS, the user must have the view\_abandoned\_checkouts retail permission.

The list of line item components that belong to a line item.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The variant image associated with the line item component. NULL if the variant associated doesn't have an image.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the line item component.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Title of the line item component.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the variant.

***

## Map

### Fields with this object

* [AbandonedCheckoutLineItem.components](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.components)
