---
title: CalculatedDraftOrder - GraphQL Admin
description: >-
  Calculated pricing, taxes, and discounts for a
  [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder).

  Includes the complete financial breakdown with line items, discounts, shipping

  costs, tax calculations, and totals in both shop and presentment currencies.


  Available
  [`ShippingRate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate)
  options are included when a valid shipping address and line items are present.


  > Note:

  > Returns alerts and warnings when issues occur during calculation, such as

  insufficient inventory or incompatible discounts.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Draft​Order

object

Requires `read_draft_orders` access scope.

Calculated pricing, taxes, and discounts for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). Includes the complete financial breakdown with line items, discounts, shipping costs, tax calculations, and totals in both shop and presentment currencies.

Available [`ShippingRate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate) options are included when a valid shipping address and line items are present.

***

**Note:** Returns alerts and warnings when issues occur during calculation, such as insufficient inventory or incompatible discounts.

***

## Fields

* accept​Automatic​Discounts

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether or not to accept automatic discounts on the draft order during calculation. If false, only discount codes and custom draft order discounts (see `appliedDiscount`) will be applied. If true, eligible automatic discounts will be applied in addition to discount codes and custom draft order discounts.

* alerts

  [\[Resource​Alert!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert)

  non-null

  The list of alerts raised while calculating.

* all​Variant​Prices​Overridden

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether all variant prices have been overridden.

* amount​Due​Later​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount due later. When there are payment terms, this is the total price minus the deposit amount (if any). When there are no payment terms, this is 0.

* amount​Due​Now​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The amount due now. When there are payment terms this is the value of the deposit (0 by default). When there are no payment terms, this is the total price.

* any​Variant​Prices​Overridden

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether any variant prices have been overridden.

* applied​Discount

  [Draft​Order​Applied​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount)

  The custom order-level discount applied.

* available​Shipping​Rates

  [\[Shipping​Rate!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate)

  non-null

  The available shipping rates. Requires a customer with a valid shipping address and at least one line item.

* billing​Address​Matches​Shipping​Address

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the billing address matches the shipping address.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The shop currency used for calculation.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer who will be sent an invoice.

* deposit

  [Deposit​Configuration](https://shopify.dev/docs/api/admin-graphql/latest/unions/DepositConfiguration)

  The portion required to be paid at checkout.

* discount​Codes

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  All discount codes applied.

* line​Items

  [\[Calculated​Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem)

  non-null

  The list of the line items in the calculated draft order.

* line​Items​Subtotal​Price

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  A subtotal of the line items and corresponding discounts, excluding shipping charges, shipping discounts, taxes, or order discounts.

* phone

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The assigned phone number.

* platform​Discounts

  [\[Draft​Order​Platform​Discount!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount)

  non-null

  The list of platform discounts applied.

* presentment​Currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The payment currency used for calculation.

* purchasing​Entity

  [Purchasing​Entity](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity)

  The purchasing entity.

* shipping​Line

  [Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  The line item containing the shipping information and costs.

* subtotal​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The subtotal, of the line items and their discounts, excluding shipping charges, shipping discounts, and taxes.

* taxes​Included

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item prices include taxes.

* tax​Lines

  [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  The list of of taxes lines charged for each line item and shipping line.

* total​Discounts​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Total discounts.

* total​Line​Items​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  Total price of line items, excluding discounts.

* total​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price, includes taxes, shipping charges, and discounts.

* total​Quantity​Of​Line​Items

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The sum of individual line item quantities. If the draft order has bundle items, this is the sum containing the quantities of individual items in the bundle.

* total​Shipping​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total shipping price.

* total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total tax.

* transformer​Fingerprint

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Fingerprint of the current cart. In order to have bundles work, the fingerprint must be passed to each request as it was previously returned, unmodified.

* warnings

  [\[Draft​Order​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DraftOrderWarning)

  non-null

  The list of warnings raised while calculating.

### Deprecated fields

* market​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-nullDeprecated

* market​Region​Country​Code

  [Country​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

  non-nullDeprecated

* subtotal​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Shipping​Price

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

* total​Tax

  [Money!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  non-nullDeprecated

***

## Map

No referencing types

***

## Mutations

* [draft​Order​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)

  mutation

  Calculates the properties of a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) without creating it. Returns pricing information including [`CalculatedDraftOrderLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem) totals, shipping charges, applicable discounts, and tax calculations based on the provided [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and [`MailingAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress) information.

  Use this mutation to preview total taxes and prices before creating a draft order. It's particularly useful when working with B2B [`PurchasingEntity`](https://shopify.dev/docs/api/admin-graphql/latest/unions/PurchasingEntity) or when you need to determine costs without committing to a draft order. Learn more about [calculating draft orders for B2B purchasing entities](https://shopify.dev/docs/apps/build/b2b/draft-orders#step-1-calculate-a-draft-order-for-a-purchasing-entity).

  * input

    [Draft​Order​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput)

    required

    ### Arguments

    The fields for the draft order.

  ***

***

## CalculatedDraftOrder Mutations

### Mutated by

* [draft​Order​Calculate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCalculate)
