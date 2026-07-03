---
title: companyContactAssignRoles - GraphQL Admin
description: Assigns roles on a company contact.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# company​Contact​Assign​Roles

mutation

Requires `write_customers` access scope or `write_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

Assigns roles on a company contact.

## Arguments

* company​Contact​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The contact whose roles are being assigned.

* roles​To​Assign

  [\[Company​Contact​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactRoleAssign)

  required

  The new roles to assign.

***

## Company​Contact​Assign​Roles​Payload returns

* role​Assignments

  [\[Company​Contact​Role​Assignment!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  A list of newly created assignments of company contacts to a company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### companyContactAssignRoles reference
