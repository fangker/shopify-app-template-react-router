---
title: MoneyV2 - GraphQL Admin
description: >-
  A precise monetary value and its associated currency. Combines a decimal
  amount

  with a three-letter currency code to express prices, costs, and other
  financial

  values throughout the API. For example, 12.99 USD.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Money​V2

object

A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD.

## Fields

* amount

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  A monetary value in decimal format, allowing for precise representation of cents or fractional currency. For example, 12.99.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The three-letter currency code that represents a world currency used in a store. Currency codes include standard [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes, and non-standard codes. For example, USD.

***

## Map

### Fields with this object

* [AppCredit.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit#field-AppCredit.fields.amount)
* [AppPurchase.price](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase#fields-price)
* [AppPurchaseOneTime.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.price)
* [AppRecurringPricing.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing#field-AppRecurringPricing.fields.price)
* [AppRevenueAttributionRecord.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.amount)
* [AppSubscriptionDiscount.priceAfterDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount#field-AppSubscriptionDiscount.fields.priceAfterDiscount)
* [AppSubscriptionDiscountAmount.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscountAmount#field-AppSubscriptionDiscountAmount.fields.amount)
* [AppUsagePricing.balanceUsed](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing#field-AppUsagePricing.fields.balanceUsed)
* [AppUsagePricing.cappedAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing#field-AppUsagePricing.fields.cappedAmount)
* [AppUsageRecord.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.price)
* [CalculatedDraftOrderLineItem.discountedTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.discountedTotal)
* [CalculatedDraftOrderLineItem.originalTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.originalTotal)
* [CalculatedDraftOrderLineItem.originalUnitPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.originalUnitPrice)
* [CalculatedDraftOrderLineItem.originalUnitPriceWithCurrency](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.originalUnitPriceWithCurrency)
* [CalculatedDraftOrderLineItem.priceOverride](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.priceOverride)
* [CalculatedDraftOrderLineItem.totalDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.totalDiscount)
* [CashActivity.cash](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity#fields-cash)
* [CashAdjustmentActivity.cash](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity#field-CashAdjustmentActivity.fields.cash)
* [CashCountActivity.cash](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity#field-CashCountActivity.fields.cash)
* [CashCountActivity.cashCounted](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity#field-CashCountActivity.fields.cashCounted)
* [CashCountActivity.cashDiscrepancy](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity#field-CashCountActivity.fields.cashDiscrepancy)
* [CashCountActivity.cashExpected](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity#field-CashCountActivity.fields.cashExpected)
* [CashDrawer.balance](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.balance)
* [CashDrawer.netSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.netSales)
* [CashDrawer.totalAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.totalAdjustments)
* [CashDrawer.totalDiscrepancies](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.totalDiscrepancies)
* [CashDrawer.totalRefunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.totalRefunds)
* [CashDrawer.totalSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.totalSales)
* [CashManagementSummary.cashBalanceAtEnd](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSummary#field-CashManagementSummary.fields.cashBalanceAtEnd)
* [CashManagementSummary.cashBalanceAtStart](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSummary#field-CashManagementSummary.fields.cashBalanceAtStart)

### Possible type in

* [Delivery​Condition​Criteria](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryConditionCriteria)
* [Pricing​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)
* [Selling​Plan​Checkout​Charge​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanCheckoutChargeValue)
* [Selling​Plan​Pricing​Policy​Adjustment​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)
