---
title: AbandonedCheckout - GraphQL Admin
description: >-
  An incomplete checkout where the customer added items and provided contact

  information but didn't complete the purchase. Tracks the customer's cart

  contents, pricing details, addresses, and timestamps to enable recovery

  campaigns and abandonment analytics.


  The checkout includes a recovery URL that merchants can send to customers to

  resume their purchase.
  [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem)

  objects preserve the original

  [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  selections, quantities, and pricing at the time of abandonment.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Abandoned​Checkout

object

Requires `read_orders` access scope. Also: The user must have manage\_abandoned\_checkouts permission. When called by Shopify POS, the user must have the view\_abandoned\_checkouts retail permission.

An incomplete checkout where the customer added items and provided contact information but didn't complete the purchase. Tracks the customer's cart contents, pricing details, addresses, and timestamps to enable recovery campaigns and abandonment analytics.

The checkout includes a recovery URL that merchants can send to customers to resume their purchase. [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects preserve the original [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) selections, quantities, and pricing at the time of abandonment.

## Fields

* abandoned​Checkout​Url

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  The URL for the buyer to recover their checkout.

* billing​Address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The billing address provided by the buyer. Null if the user didn't provide a billing address.

* completed​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the buyer completed the checkout. Null if the checkout hasn't been completed.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the checkout was created.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of extra information that has been added to the checkout.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer who created this checkout. May be null if the checkout was created from a draft order or via an app.

* default​Cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

* discount​Codes

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The discount codes entered by the buyer at checkout.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* line​Items

  [Abandoned​Checkout​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection)

  non-null

  A list of the line items in this checkout.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Unique merchant-facing identifier for the checkout.

* note

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A merchant-facing note added to the checkout. Not visible to the buyer.

* shipping​Address

  [Mailing​Address](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  The shipping address to where the line items will be shipped. Null if the user didn't provide a shipping address.

* subtotal​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all items in the checkout, including discounts but excluding shipping, taxes and tips.

* taxes​Included

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether taxes are included in line item and shipping line prices.

* tax​Lines

  [\[Tax​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxLine)

  non-null

  Individual taxes charged on the checkout.

* total​Discount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total amount of discounts to be applied.

* total​Duties​Set

  [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  The total duties applied to the checkout.

* total​Line​Items​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of the prices of all line items in the checkout.

* total​Price​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The sum of all items in the checkout, including discounts, shipping, taxes, and tips.

* total​Tax​Set

  [Money​Bag](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  The total tax applied to the checkout.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the checkout was most recently updated.

* line​Items​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

***

## Map

### Fields and connections with this object

* [AbandonedCheckoutConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-nodes)
* [AbandonedCheckoutEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutEdge#field-AbandonedCheckoutEdge.fields.node)
* [Abandonment.abandonedCheckoutPayload](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.abandonedCheckoutPayload)

***

## Queries

* [abandoned​Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts)

  query

  Returns a list of abandoned checkouts. A checkout is considered abandoned when a customer adds contact information but doesn't complete their purchase. Includes both abandoned and recovered checkouts.

  Each checkout provides [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) details, [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects, pricing information, and a recovery URL for re-engaging customers who didn't complete their purchase.

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created.

    * email\_state

      string

      Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`.

    * * id

        id

      * recovery\_state

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Possible values: `recovered` and `not_recovered`.

    * status

      string

      Possible values: `open` and `closed`.

    * updated\_at

      time

      The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Abandoned​Checkout​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonedCheckoutSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## AbandonedCheckout Queries

### Queried by

* [abandoned​Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts)

***

## Interfaces

* * [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)

    interface

  * [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

    interface

***

## AbandonedCheckout Implements

### Implements

* [Navigable](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Navigable)
* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
