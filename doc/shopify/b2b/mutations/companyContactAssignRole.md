---
title: companyContactAssignRole - GraphQL Admin
description: Assigns a role to a contact for a location.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Contact​Assign​Role

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Assigns a role to a contact for a location.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the contact to assign a role to.

* company​Contact​Role​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the role to assign to a contact.

* company​Location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the location to assign a role to a contact.

***

## Company​Contact​Assign​Role​Payload returns

* company​Contact​Role​Assignment

  [Company​Contact​Role​Assignment](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  The company contact role assignment.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactAssignRole reference
