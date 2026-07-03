---
title: CollectionSubCollectionEligibility - GraphQL Admin
description: >-
  Whether a collection can be referenced as a sub-collection target by another

  collection's source. Use this to surface ineligible targets up front (with
  reasons).
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibility
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibility.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Sub​Collection​Eligibility

object

Requires `read_products` access scope.

Whether a collection can be referenced as a sub-collection target by another collection's source. Use this to surface ineligible targets up front (with reasons).

## Fields

* exclusion

  [Collection​Sub​Collection​Eligibility​State!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibilityState)

  non-null

  Eligibility for use as an exclusion target of a sub-collection source.

* inclusion

  [Collection​Sub​Collection​Eligibility​State!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionSubCollectionEligibilityState)

  non-null

  Eligibility for use as the inclusion target of a sub-collection source.

***

## Map

### Fields with this object

* [Collection.subCollectionEligibility](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.subCollectionEligibility)
