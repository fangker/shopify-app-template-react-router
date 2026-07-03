---
title: IdentityProviderSubject - GraphQL Admin
description: Represents a customer's identity provider subject identifier.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/IdentityProviderSubject
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/IdentityProviderSubject.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Identity​Provider​Subject

object

Requires `read_customers` access scope.

Represents a customer's identity provider subject identifier.

## Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the provider subject was created.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID for the provider subject.

* provider​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The merchant-configured name of the third-party identity provider.

* subject

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique subject identifier assigned to the customer by the authentication provider.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the provider subject was last updated.

***

## Map

### Fields with this object

* [Customer.identityProviderSubjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.identityProviderSubjects)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## IdentityProviderSubject Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
