---
title: FinanceAppAccessPolicy - GraphQL Admin
description: Current user's access policy for a finance app.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceAppAccessPolicy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FinanceAppAccessPolicy.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Finance​App​Access​Policy

object

Requires `read_financial_kyc_information` access scope or `read_users` access scope.

Current user's access policy for a finance app.

## Fields

* access

  [\[Banking​Finance​App​Access!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/BankingFinanceAppAccess)

  non-null

  Current shop staff's access within the app.

***

## Map

No referencing types

***

## Queries

* [finance​App​Access​Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeAppAccessPolicy)

  query

  Returns the access policy for a finance app .

***

## FinanceAppAccessPolicy Queries

### Queried by

* [finance​App​Access​Policy](https://shopify.dev/docs/api/admin-graphql/latest/queries/financeAppAccessPolicy)
