---
title: CustomerMergeRequest - GraphQL Admin
description: A merge request for merging two customers.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeRequest.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Merge​Request

object

Requires The user must have `read_customer_merge` permissions.

A merge request for merging two customers.

## Fields

* customer​Merge​Errors

  [\[Customer​Merge​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError)

  non-null

  The merge errors that occurred during the customer merge request.

* job​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The UUID of the merge job.

* resulting​Customer​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the customer that was kept after the merge. Treat this ID as authoritative.

* status

  [Customer​Merge​Request​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerMergeRequestStatus)

  non-null

  The status of the customer merge request.

***

## Map

### Fields with this object

* [CustomerMergeable.mergeInProgress](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeable#field-CustomerMergeable.fields.mergeInProgress)

***

## Queries

* [customer​Merge​Job​Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergeJobStatus)

  query

  Returns the status of a customer merge request job.

  * job​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the job performing the customer merge request.

  ***

***

## CustomerMergeRequest Queries

### Queried by

* [customer​Merge​Job​Status](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergeJobStatus)
