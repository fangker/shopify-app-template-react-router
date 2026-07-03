---
title: CollectionRule - GraphQL Admin
description: Represents at rule that's used to assign products to a collection.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Collection​Rule

object

Requires `read_products` access scope.

Represents at rule that's used to assign products to a collection.

## Fields

* column

  [Collection​Rule​Column!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleColumn)

  non-null

  The attribute that the rule focuses on. For example, `title` or `product_type`.

* condition

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The value that the operator is applied to. For example, `Hats`.

* condition​Object

  [Collection​Rule​Condition​Object](https://shopify.dev/docs/api/admin-graphql/latest/unions/CollectionRuleConditionObject)

  The value that the operator is applied to.

* relation

  [Collection​Rule​Relation!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionRuleRelation)

  non-null

  The type of operator that the rule is based on. For example, `equals`, `contains`, or `not_equals`.

***

## Map

### Fields with this object

* [CollectionRuleSet.rules](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleSet#field-CollectionRuleSet.fields.rules)
