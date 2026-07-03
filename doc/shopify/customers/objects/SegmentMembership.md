---
title: SegmentMembership - GraphQL Admin
description: The response type for the `segmentMembership` object.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembership'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembership.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Segment​Membership

object

Requires `read_customers` access scope.

The response type for the `segmentMembership` object.

## Fields

* is​Member

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  A Boolean that indicates whether or not the customer in the query is a member of the segment, which is identified using the `segmentId`.

* segment​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A `segmentId` that's used for testing membership.

***

## Map

### Fields with this object

* [SegmentMembershipResponse.memberships](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMembershipResponse#field-SegmentMembershipResponse.fields.memberships)
