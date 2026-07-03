---
title: customerMergePreview - GraphQL Admin
description: >-
  Returns a preview of a customer merge request.


  The `customerOneId` and `customerTwoId` arguments don't guarantee which
  customer is kept. Shopify

  selects the resulting customer in this order:

  1. If `overrideFields.customerIdOfEmailToKeep` is provided and valid, then the
  selected customer is kept.

  2. If exactly one customer has an email address, then that customer is kept.

  3. If both customers have email addresses, then account state and email
  marketing consent determine
     the customer that's kept: an `enabled` account wins over other account states; otherwise, an
     `invited` account can win when consent doesn't already prefer `subscribed` or `pending`; otherwise
     the consent result is used. If those rules don't prefer either customer, then `customerTwoId` is kept.
  4. If neither customer has an email address, then `customerTwoId` is kept.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergePreview
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/customerMergePreview.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# customer​Merge​Preview

query

Requires `read_customer_merge` access scope.

Returns a preview of a customer merge request.

The `customerOneId` and `customerTwoId` arguments don't guarantee which customer is kept. Shopify selects the resulting customer in this order:

1. If `overrideFields.customerIdOfEmailToKeep` is provided and valid, then the selected customer is kept.
2. If exactly one customer has an email address, then that customer is kept.
3. If both customers have email addresses, then account state and email marketing consent determine the customer that's kept: an `enabled` account wins over other account states; otherwise, an `invited` account can win when consent doesn't already prefer `subscribed` or `pending`; otherwise the consent result is used. If those rules don't prefer either customer, then `customerTwoId` is kept.
4. If neither customer has an email address, then `customerTwoId` is kept.

## Arguments

* customer​One​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of one customer to merge. This customer isn't guaranteed to be kept.

* customer​Two​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of another customer to merge. This customer is kept when neither customer has an email address.

* override​Fields

  [Customer​Merge​Override​Fields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerMergeOverrideFields)

  The field-specific overrides for default customer merge rules.

***

## Possible returns

* Customer​Merge​Preview

  [Customer​Merge​Preview!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreview)

  A preview of the results of a customer merge request. Use `resultingCustomerId` to check which customer would be kept before running `customerMerge`.

  * alternate​Fields

    [Customer​Merge​Preview​Alternate​Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewAlternateFields)

    The fields that can be used to override the default fields.

  * blocking​Fields

    [Customer​Merge​Preview​Blocking​Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewBlockingFields)

    The fields that will block the merge if the two customers are merged.

  * customer​Merge​Errors

    [\[Customer​Merge​Error!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergeError)

    The errors blocking the customer merge.

  * default​Fields

    [Customer​Merge​Preview​Default​Fields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields)

    The fields that will be kept if the two customers are merged.

  * resulting​Customer​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the customer that would be kept if the two customers were merged.

***

## Examples

* ### customerMergePreview reference
