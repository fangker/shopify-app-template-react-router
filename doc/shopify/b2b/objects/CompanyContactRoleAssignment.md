---
title: CompanyContactRoleAssignment - GraphQL Admin
description: >-
  The CompanyContactRoleAssignment describes the company and location associated
  to a company contact's role.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Company​Contact​Role​Assignment

object

Requires `read_customers` access scope or `read_companies` access scope. Also: The shop must have access to B2B. Some operations may require additional plan capabilities.

The CompanyContactRoleAssignment describes the company and location associated to a company contact's role.

## Fields

* company

  [Company!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  non-null

  The company this role assignment belongs to.

* company​Contact

  [Company​Contact!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  non-null

  The company contact for whom this role is assigned.

* company​Location

  [Company​Location!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  non-null

  The company location to which the role is assigned.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was created.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* role

  [Company​Contact​Role!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

  non-null

  The role that's assigned to the company contact.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was last updated.

***

## Map

### Fields and connections with this object

* [CompanyContact.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.roleAssignments)
* [CompanyContactRoleAssignmentConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-nodes)
* [CompanyContactRoleAssignmentEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignmentEdge#field-CompanyContactRoleAssignmentEdge.fields.node)
* [CompanyLocation.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

***

## Mutations

* [company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)

  mutation

  Assigns a role to a contact for a location.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

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

* [company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)

  mutation

  Assigns roles on a company contact.

  * company​Contact​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The contact whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Contact​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyContactRoleAssign)

    required

    The new roles to assign.

  ***

* [company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

  mutation

  Assigns roles on a company location.

  * company​Location​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The location whose roles are being assigned.

  * roles​To​Assign

    [\[Company​Location​Role​Assign!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationRoleAssign)

    required

    The roles to assign.

  ***

***

## CompanyContactRoleAssignment Mutations

### Mutated by

* [company​Contact​Assign​Role](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRole)
* [company​Contact​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyContactAssignRoles)
* [company​Location​Assign​Roles](https://shopify.dev/docs/api/admin-graphql/latest/mutations/companyLocationAssignRoles)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## CompanyContactRoleAssignment Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
