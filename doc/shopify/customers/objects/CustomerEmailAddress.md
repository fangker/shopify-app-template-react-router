---
title: CustomerEmailAddress - GraphQL Admin
description: >-
  A customer's email address with marketing consent. This includes the email

  address, marketing subscription status, and opt-in level according to [M3AAWG
  best practices
  guidelines](https://www.m3aawg.org/news/updated-m3aawg-best-practices-for-senders-urge-opt-in-only-mailings-address-sender-transparency).


  It also provides the timestamp of when customers last updated marketing
  consent

  and URLs for unsubscribing from marketing emails or opting in or out of email

  open tracking. The
  [`sourceLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation)

  field indicates where the customer consented to receive marketing material.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Email​Address

object

Requires `read_customers` access scope.

A customer's email address with marketing consent. This includes the email address, marketing subscription status, and opt-in level according to [M3AAWG best practices guidelines](https://www.m3aawg.org/news/updated-m3aawg-best-practices-for-senders-urge-opt-in-only-mailings-address-sender-transparency).

It also provides the timestamp of when customers last updated marketing consent and URLs for unsubscribing from marketing emails or opting in or out of email open tracking. The [`sourceLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.sourceLocation) field indicates where the customer consented to receive marketing material.

## Fields

* email​Address

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The customer's default email address.

* marketing​Opt​In​Level

  [Customer​Marketing​Opt​In​Level](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMarketingOptInLevel)

  The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines, received when the marketing consent was updated.

* marketing​State

  [Customer​Email​Address​Marketing​State!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressMarketingState)

  non-null

  Whether the customer has subscribed to email marketing.

* marketing​Unsubscribe​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL to unsubscribe a member from all mailing lists.

* marketing​Updated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the marketing consent was updated.

  No date is provided if the email address never updated its marketing consent.

* open​Tracking​Level

  [Customer​Email​Address​Open​Tracking​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerEmailAddressOpenTrackingLevel)

  non-null

  Whether the customer has opted in to having their opened emails tracked.

* open​Tracking​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL that can be used to opt a customer in or out of email open tracking.

* source​Location

  [Location](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  The location where the customer consented to receive marketing material by email.

* valid​Format

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the email address is formatted correctly.

  Returns `true` when the email is formatted correctly. This doesn't guarantee that the email address actually exists.

***

## Map

### Fields with this object

* [Customer.defaultEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.defaultEmailAddress)
* [CustomerMergePreviewAlternateFields.email](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields#field-CustomerMergePreviewAlternateFields.fields.email)
* [CustomerMergePreviewDefaultFields.email](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.email)
* [CustomerSegmentMember.defaultEmailAddress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.defaultEmailAddress)
