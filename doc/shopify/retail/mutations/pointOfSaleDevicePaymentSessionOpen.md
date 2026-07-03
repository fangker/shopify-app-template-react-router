---
title: pointOfSaleDevicePaymentSessionOpen - GraphQL Admin
description: Opens a point of sale device payment session.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionOpen
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionOpen.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# point​Of​Sale​Device​Payment​Session​Open

mutation

Requires `write_cash_tracking` access scope.

Opens a point of sale device payment session.

## Arguments

* balance

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The counted cash drawer balance when the session was opened.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note entered when the session was opened.

* point​Of​Sale​Device​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The point of sale device to which this session belongs.

* reason​Code​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The reason code for the session opening.

* staff​Member​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The staff member who opened the session.

* time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The time the session was opened. Defaults to the current time.

***

## Point​Of​Sale​Device​Payment​Session​Open​Payload returns

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The created point of sale device payment session.

* user​Errors

  [\[Point​Of​Sale​Device​Payment​Session​Open​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionOpenUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### pointOfSaleDevicePaymentSessionOpen reference
