---
title: pointOfSaleDevicePaymentSessionCount - GraphQL Admin
description: Records a mid-session cash count for a point of sale device payment session.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionCount
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionCount.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# point​Of​Sale​Device​Payment​Session​Count

mutation

Requires `write_cash_tracking` access scope.

Records a mid-session cash count for a point of sale device payment session.

## Arguments

* balance

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The counted cash drawer balance.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note entered when the count was performed.

* point​Of​Sale​Device​Payment​Session​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The point of sale device payment session to record a count for.

* reason​Code​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The reason code for the count.

* staff​Member​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The staff member who performed the count.

* time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  When the count was performed. Defaults to the current time.

***

## Point​Of​Sale​Device​Payment​Session​Count​Payload returns

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The point of sale device payment session after recording the count.

* user​Errors

  [\[Point​Of​Sale​Device​Payment​Session​Count​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionCountUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### pointOfSaleDevicePaymentSessionCount reference
