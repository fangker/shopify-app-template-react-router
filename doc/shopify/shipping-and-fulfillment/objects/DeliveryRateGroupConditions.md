---
title: DeliveryRateGroupConditions - GraphQL Admin
description: >-
  Conditions that limit a rate group to specific collections or origin
  locations.


  When conditions are set, the rate group applies only to matching shipments.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryRateGroupConditions.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Delivery​Rate​Group​Conditions

object

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

Conditions that limit a rate group to specific collections or origin locations.

When conditions are set, the rate group applies only to matching shipments.

## Fields

* collections

  [Collection​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection)

  Collections this rate group applies to. Null means the rate group applies to all products.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* collections​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of collections this rate group applies to. Null when it applies to all products.

* origin​Locations

  [Location​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection)

  non-null

  Origin locations this rate group applies to.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* origin​Locations​Count

  [Count!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  non-null

  The number of origin locations this rate group applies to.

***

## Map

### Fields with this object

* [DeliveryCarrierCalculatedRateGroup.conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierCalculatedRateGroup#field-DeliveryCarrierCalculatedRateGroup.fields.conditions)
* [DeliveryFlatRateGroup.conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryFlatRateGroup#field-DeliveryFlatRateGroup.fields.conditions)
* [DeliveryOptionDefinitionRateGroup.conditions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DeliveryOptionDefinitionRateGroup#fields-conditions)
* [DeliveryValueBasedRateGroup.conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryValueBasedRateGroup#field-DeliveryValueBasedRateGroup.fields.conditions)
* [DeliveryWeightBasedRateGroup.conditions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryWeightBasedRateGroup#field-DeliveryWeightBasedRateGroup.fields.conditions)
