---
title: CustomerMergeable - GraphQL Admin
description: >-
  An object that represents whether a customer can be merged with another
  customer.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Mergeable

object

Requires The user must have `read_customer_merge` permissions.

An object that represents whether a customer can be merged with another customer.

## Fields

* error​Fields

  [\[Customer​Merge​Error​Field​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeErrorFieldType)

  non-null

  The list of fields preventing the customer from being merged.

* is​Mergeable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the customer can be merged with another customer.

* merge​In​Progress

  [Customer​Merge​Request](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest)

  The merge request if one is currently in progress.

* reason

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The reason why the customer can't be merged with another customer.

***

## Map

### Fields with this object

* [Customer.mergeable](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.mergeable)
* [CustomerSegmentMember.mergeable](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.mergeable)
