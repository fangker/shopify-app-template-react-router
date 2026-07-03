---
title: SegmentMembershipResponse - GraphQL Admin
description: >-
  A list of maps that contain `segmentId` IDs and `isMember` Booleans. The maps
  represent segment memberships.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembershipResponse
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembershipResponse.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Membership​Response

object

Requires `read_customers` access scope.

A list of maps that contain `segmentId` IDs and `isMember` Booleans. The maps represent segment memberships.

## Fields

* memberships

  [\[Segment​Membership!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembership)

  non-null

  The membership status for the given list of segments.

***

## Map

No referencing types

***

## Queries

* [customer​Segment​Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembership)

  query

  Whether a member, which is a customer, belongs to a segment.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer that has the membership.

  * segment​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The segments to evaluate for the given customer.

  ***

***

## SegmentMembershipResponse Queries

### Queried by

* [customer​Segment​Membership](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembership)
