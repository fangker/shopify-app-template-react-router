---
title: Attribute - GraphQL Admin
description: >-
  A custom property. Attributes are used to store additional information about a
  Shopify resource, such as

  products, customers, or orders. Attributes are stored as key-value pairs.


  For example, a list of attributes might include whether a customer is a
  first-time buyer (`"customer_first_order": "true"`),

  whether an order is gift-wrapped (`"gift_wrapped": "true"`), a preferred
  delivery date

  (`"preferred_delivery_date": "2025-10-01"`), the discount applied
  (`"loyalty_discount_applied": "10%"`), and any

  notes provided by the customer (`"customer_notes": "Please leave at the front
  door"`).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Attribute

object

A custom property. Attributes are used to store additional information about a Shopify resource, such as products, customers, or orders. Attributes are stored as key-value pairs.

For example, a list of attributes might include whether a customer is a first-time buyer (`"customer_first_order": "true"`), whether an order is gift-wrapped (`"gift_wrapped": "true"`), a preferred delivery date (`"preferred_delivery_date": "2025-10-01"`), the discount applied (`"loyalty_discount_applied": "10%"`), and any notes provided by the customer (`"customer_notes": "Please leave at the front door"`).

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The key or name of the attribute. For example, `"customer_first_order"`.

* value

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The value of the attribute. For example, `"true"`.

***

## Map

### Fields with this object

* [AbandonedCheckout.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.customAttributes)
* [AbandonedCheckoutLineItem.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.customAttributes)
* [CalculatedDraftOrderLineItem.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.customAttributes)
* [CalculatedLineItem.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.customAttributes)
* [DraftOrder.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.customAttributes)
* [DraftOrderLineItem.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.customAttributes)
* [LineItem.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.customAttributes)
* [LineItemGroup.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemGroup#field-LineItemGroup.fields.customAttributes)
* [Order.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.customAttributes)
* [SubscriptionBillingCycleEditedContract.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.customAttributes)
* [SubscriptionContract.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.customAttributes)
* [SubscriptionContractBase.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-customAttributes)
* [SubscriptionDraft.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.customAttributes)
* [SubscriptionLine.customAttributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.customAttributes)
* [TaxonomyMeasurementAttribute.options](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyMeasurementAttribute#field-TaxonomyMeasurementAttribute.fields.options)
