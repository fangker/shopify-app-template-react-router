---
title: CalculatedLineItem - GraphQL Admin
description: >-
  A line item involved in order editing that may be newly added or have new
  changes applied.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Calculated​Line​Item

object

Requires `read_order_edits` access scope.

A line item involved in order editing that may be newly added or have new changes applied.

## Fields

* calculated​Discount​Allocations

  [\[Calculated​Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountAllocation)

  non-null

  The discounts that have been allocated onto the line item by discount applications.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of attributes that represent custom features or special requests.

* discounted​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The price of a single quantity of the line item with line item discounts applied, in shop and presentment currencies. Discounts applied to the entire order aren't included in this price.

* editable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total number of items that can be edited.

* editable​Quantity​Before​Changes

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The editable quantity prior to any changes made in the current edit.

* editable​Subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price of editable lines in shop and presentment currencies.

* has​Staged​Line​Item​Discount

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the calculated line item has a staged discount.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  The image object associated to the line item's variant.

* original​Unit​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The variant unit price in shop and presentment currencies, without any discounts applied.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total number of items.

* restockable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the line item can be restocked or not.

* restocking

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the changes on the line item will result in a restock.

* sku

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The variant SKU number.

* staged​Changes

  [\[Order​Staged​Change!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)

  non-null

  A list of changes that affect this line item.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the product.

* uneditable​Subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total price of uneditable lines in shop and presentment currencies.

* variant

  [Product​Variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  The product variant associated with this line item. The value is null for custom line items and items where the variant has been deleted.

* variant​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the variant.

* discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [CalculatedLineItemConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-nodes)
* [CalculatedLineItemEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItemEdge#field-CalculatedLineItemEdge.fields.node)
* [CalculatedOrder.addedLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedLineItems)
* [CalculatedOrder.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.lineItems)

***

## Mutations

* [order​Edit​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)

  mutation

  Adds a custom line item to an existing [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Custom line items represent products or services not in your catalog, such as gift wrapping, installation fees, or one-off charges.

  Creates a [`CalculatedLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem) with the specified title, price, and quantity. Changes remain in the edit session until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [adding custom line items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-custom-line-item).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the custom item is added.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the retail [location](https://shopify.dev/api/admin-graphql/latest/objects/location) (if applicable) from which the custom item is sold. Used for tax calculations. A default location will be chosen automatically if none is provided.

  * price

    [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

    required

    The unit price of the custom item. This value can't be negative.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the custom item. This value must be greater than zero.

  * requires​Shipping

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item requires shipping. Defaults to `false`.

  * taxable

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether the custom item is taxable. Defaults to `true`.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The name of the custom item to add.

  ***

* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)

  mutation

  Applies a discount to a [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) during an order edit session. The discount can be either a fixed amount or percentage value.

  To modify pricing on specific line items, use this mutation after starting an order edit with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation. The changes remain staged until you commit them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    ### Arguments

    The discount to add to the line item.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to add the discount to.

  ***

* [order​Edit​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)

  mutation

  Adds a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) as a line item to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) that's being edited. The mutation respects the variant's contextual pricing.

  You can specify a [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) to check for inventory availability and control whether duplicate variants are allowed. The [`quantity`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant#arguments-quantity) must be a positive value.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders#add-a-new-variant).

  * allow​Duplicates

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether the mutation can create a line item for a variant that's already on the calculated order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the [location](https://shopify.dev/api/admin-graphql/latest/objects/location) to check for inventory availability. Used for tax calculations. A default location ID is chosen automatically if none is provided.

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The quantity of the item to add to the order. Must be a positive value.

  * variant​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the variant to add.

  ***

* [order​Edit​Set​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity)

  mutation

  Sets the quantity of a line item on an order that's being edited. Use this mutation to increase, decrease, or remove items by adjusting their quantities.

  Setting the quantity to zero effectively removes the line item from the order. The item still exists as a data structure with zero quantity. When decreasing quantities, you can optionally restock the removed items to inventory by setting the `restock` parameter to `true`.

  Learn more about [editing workflows for existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. The edit changes the quantity on the line item.

  * line​Item​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated line item to edit.

  * location​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Deprecated

  * quantity

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The new quantity to set for the line item. This value cannot be negative.

  * restock

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Whether or not to restock the line item when the updated quantity is less than the original quantity.

  ***

* [order​Edit​Remove​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveLineItemDiscount)

  mutation

  Deprecated

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the line item discount is removed.

  ***

***

## CalculatedLineItem Mutations

### Mutated by

* [order​Edit​Add​Custom​Item](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddCustomItem)
* [order​Edit​Add​Line​Item​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddLineItemDiscount)
* [order​Edit​Add​Variant](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddVariant)
* [order​Edit​Set​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditSetQuantity)
