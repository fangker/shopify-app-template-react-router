---
title: CollectionRuleSet - GraphQL Admin
description: >-
  The set of rules that are used to determine which products are included in the
  collection.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleSet'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleSet.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Rule​Set

object

Requires `read_products` access scope.

The set of rules that are used to determine which products are included in the collection.

## Fields

* applied​Disjunctively

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether products must match any or all of the rules to be included in the collection. If true, then products must match at least one of the rules to be included in the collection. If false, then products must match all of the rules to be included in the collection.

* rules

  [\[Collection​Rule!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule)

  non-null

  The rules used to assign products to the collection.

***

## Map
