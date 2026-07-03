---
title: pointOfSaleDevicePaymentSessionAdjust - GraphQL Admin
description: Adds an adjustment to a point of sale device payment session.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionAdjust
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionAdjust.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# point​Of​Sale​Device​Payment​Session​Adjust

mutation

Requires `write_cash_tracking` access scope.

Adds an adjustment to a point of sale device payment session.

## Arguments

* cash

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The amount of cash being added or removed.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note entered when the adjustment was made.

* point​Of​Sale​Device​Payment​Session​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The point of sale device payment session to be adjusted.

* reason​Code​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The reason code for the adjustment.

* staff​Member​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The staff member who made the adjustment.

* time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time when the adjustment was made. Defaults to the current time.

***

## Point​Of​Sale​Device​Payment​Session​Adjust​Payload returns

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The adjusted point of sale device payment session.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### pointOfSaleDevicePaymentSessionAdjust reference
