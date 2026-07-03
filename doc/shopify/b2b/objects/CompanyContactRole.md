---
title: CompanyContactRole - GraphQL Admin
description: >-
  The role for a [company
  contact](https://shopify.dev/api/admin-graphql/latest/objects/companycontact).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Company​Contact​Role

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

The role for a [company contact](https://shopify.dev/api/admin-graphql/latest/objects/companycontact).

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of a role. For example, `admin` or `buyer`.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note for the role.

***

## Map

### Fields and connections with this object

* [Company.contactRoles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contactRoles)
* [Company.defaultRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.defaultRole)
* [CompanyContactRoleAssignment.role](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment#field-CompanyContactRoleAssignment.fields.role)
* [CompanyContactRoleConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection#returns-nodes)
* [CompanyContactRoleEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleEdge#field-CompanyContactRoleEdge.fields.node)

***

## Queries

* [company​Contact​Role](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyContactRole)

  query

  Returns a `CompanyContactRole` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `CompanyContactRole` to return.

  ***

***

## CompanyContactRole Queries

### Queried by

* [company​Contact​Role](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyContactRole)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CompanyContactRole Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
