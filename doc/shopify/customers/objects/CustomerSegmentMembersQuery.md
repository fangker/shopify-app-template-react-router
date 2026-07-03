---
title: CustomerSegmentMembersQuery - GraphQL Admin
description: >-
  A job to determine a list of members, such as customers, that are associated
  with an individual segment.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQuery
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMembersQuery.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Customer​Segment​Members​Query

object

Requires `read_customers` access scope. Also: The user must not have restricted access.

A job to determine a list of members, such as customers, that are associated with an individual segment.

## Fields

* current​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The current total number of members in a given segment.

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This indicates if the job is still queued or has been run.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID that's returned when running an asynchronous mutation.

***

## Map

No referencing types

***

## Queries

* [customer​Segment​Members​Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembersQuery)

  query

  Returns a `CustomerSegmentMembersQuery` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CustomerSegmentMembersQuery` to return.

  ***

***

## CustomerSegmentMembersQuery Queries

### Queried by

* [customer​Segment​Members​Query](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembersQuery)

***

## Mutations

* [customer​Segment​Members​Query​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

  mutation

  Creates a customer segment members query.

  * input

    [Customer​Segment​Members​Query​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSegmentMembersQueryInput)

    required

    ### Arguments

    The input fields to create a customer segment members query.

  ***

***

## CustomerSegmentMembersQuery Mutations

### Mutated by

* [customer​Segment​Members​Query​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSegmentMembersQueryCreate)

***

## Interfaces

* * [Job​Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## CustomerSegmentMembersQuery Implements

### Implements

* [Job​Result](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/JobResult)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
