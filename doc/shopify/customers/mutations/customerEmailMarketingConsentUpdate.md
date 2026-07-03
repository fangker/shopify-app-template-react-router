---
title: customerEmailMarketingConsentUpdate - GraphQL Admin
description: >-
  Updates a
  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s
  email marketing consent information. The customer must have an email address

  to update their consent. Records the [marketing
  state](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingState)

  (such as subscribed, pending, unsubscribed), [opt-in
  level](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingOptInLevel),

  and when and where the customer gave or withdrew consent.


  Only three values are accepted as input: SUBSCRIBED, UNSUBSCRIBED, and
  PENDING.

  NOT_SUBSCRIBED, REDACTED, and INVALID cannot be set via this mutation; they
  are

  read-only or internally-set states.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerEmailMarketingConsentUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# customer​Email​Marketing​Consent​Update

mutation

Requires `write_customers` access scope.

Updates a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s email marketing consent information. The customer must have an email address to update their consent. Records the [marketing state](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingState) (such as subscribed, pending, unsubscribed), [opt-in level](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-marketingOptInLevel), and when and where the customer gave or withdrew consent.

Only three values are accepted as input: SUBSCRIBED, UNSUBSCRIBED, and PENDING. NOT\_SUBSCRIBED, REDACTED, and INVALID cannot be set via this mutation; they are read-only or internally-set states.

## Arguments

* input

  [Customer​Email​Marketing​Consent​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentUpdateInput)

  required

  Specifies the input fields to update a customer's email marketing consent information.

***

## Customer​Email​Marketing​Consent​Update​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The updated customer.

* user​Errors

  [\[Customer​Email​Marketing​Consent​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailMarketingConsentUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### customerEmailMarketingConsentUpdate reference
