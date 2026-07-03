---
title: MoneyBag - GraphQL Admin
description: >-
  A collection of monetary values in their respective currencies. Used
  throughout

  the API for multi-currency pricing and transactions, when an amount in the

  shop's currency is converted to the customer's currency of choice. The

  `presentmentMoney` field contains the amount in the customer's selected

  currency. The `shopMoney` field contains the equivalent in the shop's base
  currency.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Money​Bag

object

A collection of monetary values in their respective currencies. Used throughout the API for multi-currency pricing and transactions, when an amount in the shop's currency is converted to the customer's currency of choice. The `presentmentMoney` field contains the amount in the customer's selected currency. The `shopMoney` field contains the equivalent in the shop's base currency.

## Fields

* presentment​Money

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Amount in presentment currency.

* shop​Money

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  Amount in shop currency.

***

## Map

### Fields with this object

* [AbandonedCheckout.subtotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.subtotalPriceSet)
* [AbandonedCheckout.totalDiscountSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.totalDiscountSet)
* [AbandonedCheckout.totalDutiesSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.totalDutiesSet)
* [AbandonedCheckout.totalLineItemsPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.totalLineItemsPriceSet)
* [AbandonedCheckout.totalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.totalPriceSet)
* [AbandonedCheckout.totalTaxSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.totalTaxSet)
* [AbandonedCheckoutLineItem.discountedTotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountedTotalPriceSet)
* [AbandonedCheckoutLineItem.discountedTotalPriceWithCodeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountedTotalPriceWithCodeDiscount)
* [AbandonedCheckoutLineItem.discountedUnitPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountedUnitPriceSet)
* [AbandonedCheckoutLineItem.discountedUnitPriceWithCodeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountedUnitPriceWithCodeDiscount)
* [AbandonedCheckoutLineItem.originalTotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.originalTotalPriceSet)
* [AbandonedCheckoutLineItem.originalUnitPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.originalUnitPriceSet)
* [AdditionalFee.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee#field-AdditionalFee.fields.price)
* [AdditionalFeeSale.totalAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalAmount)
* [AdditionalFeeSale.totalDiscountAmountAfterTaxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalDiscountAmountAfterTaxes)
* [AdditionalFeeSale.totalDiscountAmountBeforeTaxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalDiscountAmountBeforeTaxes)
* [AdditionalFeeSale.totalTaxAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalTaxAmount)
* [AdjustmentSale.totalAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalAmount)
* [AdjustmentSale.totalDiscountAmountAfterTaxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalDiscountAmountAfterTaxes)
* [AdjustmentSale.totalDiscountAmountBeforeTaxes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalDiscountAmountBeforeTaxes)
* [AdjustmentSale.totalTaxAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalTaxAmount)
* [CalculatedDiscountAllocation.allocatedAmountSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountAllocation#field-CalculatedDiscountAllocation.fields.allocatedAmountSet)
* [CalculatedDraftOrder.amountDueLaterSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.amountDueLaterSet)
* [CalculatedDraftOrder.amountDueNowSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.amountDueNowSet)
* [CalculatedDraftOrder.lineItemsSubtotalPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.lineItemsSubtotalPrice)
* [CalculatedDraftOrder.subtotalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.subtotalPriceSet)
* [CalculatedDraftOrder.totalDiscountsSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.totalDiscountsSet)
* [CalculatedDraftOrder.totalLineItemsPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.totalLineItemsPriceSet)
* [CalculatedDraftOrder.totalPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.totalPriceSet)
* [CalculatedDraftOrder.totalShippingPriceSet](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.totalShippingPriceSet)
