---
title: CollectionSubCollectionEligibilityState - GraphQL Admin
description: |-
  Whether a collection is eligible for one role (inclusion or exclusion) in a
  sub-collection relationship, plus the reason it isn't if applicable.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibilityState
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibilityState.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Sub​Collection​Eligibility​State

object

Requires `read_products` access scope.

Whether a collection is eligible for one role (inclusion or exclusion) in a sub-collection relationship, plus the reason it isn't if applicable.

## Fields

* eligible

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the collection can be used in this sub-collection role.

* ineligible​Reason

  [Sub​Collection​Ineligible​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubCollectionIneligibleReason)

  Stable identifier describing why the collection is ineligible. Null when `eligible` is true. Clients can map this to user-facing copy or use it as a feature flag.

***

## Map

### Fields with this object

* [CollectionSubCollectionEligibility.exclusion](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibility#field-CollectionSubCollectionEligibility.fields.exclusion)
* [CollectionSubCollectionEligibility.inclusion](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibility#field-CollectionSubCollectionEligibility.fields.inclusion)
