---
title: pointOfSaleDevicePaymentSessionClose - GraphQL Admin
description: Closes a point of sale device payment session.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionClose
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionClose.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# point​Of​Sale​Device​Payment​Session​Close

mutation

Requires `write_cash_tracking` access scope.

Closes a point of sale device payment session.

## Arguments

* balance

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The counted cash drawer balance when the session was closed.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note entered when the session was closed.

* point​Of​Sale​Device​Payment​Session​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The point of sale device payment session to be closed.

* reason​Code​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The reason code for closing the session.

* staff​Member​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The staff member who closed the session.

* time

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  When the session was closed. Defaults to the current time.

***

## Point​Of​Sale​Device​Payment​Session​Close​Payload returns

* point​Of​Sale​Device​Payment​Session

  [Point​Of​Sale​Device​Payment​Session](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  The closed point of sale device payment session.

* user​Errors

  [\[Point​Of​Sale​Device​Payment​Session​Close​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionCloseUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### pointOfSaleDevicePaymentSessionClose reference
