---
title: PaymentTermsTemplate - GraphQL Admin
description: Represents the payment terms template object.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Payment​Terms​Template

object

Represents the payment terms template object.

## Fields

* description

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The description of the payment terms template.

* due​In​Days

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of days between the issued date and due date if this is the net type of payment terms.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the payment terms template.

* payment​Terms​Type

  [Payment​Terms​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsType)

  non-null

  The type of the payment terms template.

* translated​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The translated payment terms template name.

***

## Map

### Fields with this object

* [BuyerExperienceConfiguration.paymentTermsTemplate](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration#field-BuyerExperienceConfiguration.fields.paymentTermsTemplate)

***

## Queries

* [payment​Terms​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentTermsTemplates)

  query

  The list of payment terms templates eligible for all shops and users.

  * payment​Terms​Type

    [Payment​Terms​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsType)

    ### Arguments

    The payment terms type to filter the payment terms templates list.

  ***

***

## PaymentTermsTemplate Queries

### Queried by

* [payment​Terms​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentTermsTemplates)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## PaymentTermsTemplate Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
