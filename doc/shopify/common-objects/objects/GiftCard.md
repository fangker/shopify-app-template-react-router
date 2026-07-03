---
title: GiftCard - GraphQL Admin
description: >-
  A gift card that customers use as a payment method. Stores the initial value,
  current balance, and expiration date.


  You can issue gift cards to a specific

  [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  or send them to a
  [`GiftCardRecipient`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient)

  with a personalized message. The card tracks its transaction history through
  [`GiftCardCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction)
  and
  [`GiftCardDebitTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction)

  records. You can create and deactivate gift cards using the
  [`GiftCardCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate)
  and
  [`GiftCardDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate)

  mutations, respectively.


  > Note: After a gift card is deactivated, it can't be used for further
  purchases or re-enabled.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard.md'
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Gift​Card

object

Requires `read_gift_cards` access scope.

A gift card that customers use as a payment method. Stores the initial value, current balance, and expiration date.

You can issue gift cards to a specific [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or send them to a [`GiftCardRecipient`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient) with a personalized message. The card tracks its transaction history through [`GiftCardCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction) and [`GiftCardDebitTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction) records. You can create and deactivate gift cards using the [`GiftCardCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate) and [`GiftCardDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate) mutations, respectively.

***

**Note:** After a gift card is deactivated, it can\&#39;t be used for further purchases or re-enabled.

***

## Fields

* balance

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The gift card's remaining balance.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time at which the gift card was created.

* cross​Currency​Redemption​Strategy

  [Gift​Card​Cross​Currency​Redemption​Strategy!](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardCrossCurrencyRedemptionStrategy)

  non-null

  The strategy used to convert the gift card's balance when it's redeemed in a currency other than the one it was issued in.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer who will receive the gift card.

* deactivated​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time at which the gift card was deactivated.

* enabled

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the gift card is enabled.

* expires​On

  [Date](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Date)

  The date at which the gift card will expire.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* initial​Value

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The initial value of the gift card.

* is​Redeemable

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the gift card is redeemable in any active market currency.

* last​Characters

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The final four characters of the gift card code.

* line​Item

  [Line​Item](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  The line item from an order that initiated the creation of this gift card. This value is `null` if the gift card was issued manually.

* masked​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The gift card code. Everything but the final four characters is masked.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note associated with the gift card, which isn't visible to the customer.

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the gift card. This value is `null` if the gift card was issued manually.

* recipient​Attributes

  [Gift​Card​Recipient](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient)

  The recipient who will receive the gift card.

* template​Suffix

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The theme template used to render the gift card online.

* transactions

  [Gift​Card​Transaction​Connection](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection)

  The transaction history of the gift card.

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

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time at which the gift card was updated.

***

## Map

### Fields and connections with this object

* [CashAdjustmentActivity.giftCard](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity#field-CashAdjustmentActivity.fields.giftCard)
* [CustomerMergePreviewDefaultFields.giftCards](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.giftCards)
* [GiftCardCashOutTransaction.giftCard](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCashOutTransaction#field-GiftCardCashOutTransaction.fields.giftCard)
* [GiftCardConnection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-nodes)
* [GiftCardCreditTransaction.giftCard](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction#field-GiftCardCreditTransaction.fields.giftCard)
* [GiftCardDebitTransaction.giftCard](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction#field-GiftCardDebitTransaction.fields.giftCard)
* [GiftCardEdge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardEdge#field-GiftCardEdge.fields.node)
* [GiftCardTransaction.giftCard](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction#fields-giftCard)

***

## Queries

* [gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCard)

  query

  Retrieves a [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) by its ID. Returns the gift card's balance, transaction history, [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) information, and whether it's enabled.

  Additional fields include the initial value, expiration date, deactivation timestamp (if applicable), and the associated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) if the gift card was purchased by a customer through checkout. Gift cards that merchants create manually won't have an associated order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the GiftCard to return.

  ***

* [gift​Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards)

  query

  Returns a paginated list of [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) objects issued for the shop.

  You can filter gift cards by attributes such as status, last characters of the code, balance status, and other values using the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards#arguments-query) parameter. You can also apply [`SavedSearch`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) objects to filter results.

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

      * balance\_status

        string

      * created\_at

        time

      * customer\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document, including gift card codes.

      - Example:
        * `query=a5bh6h64b329j4k7`
        * `query=Bob Norman`

      - Valid values:
        * `full`
        * `partial`
        * `empty`
        * `full_or_partial`
        Example:
        * `balance_status:full`

      - Example:
        * `created_at:>=2020-01-01T12:00:00Z`

    * * expires\_on

        date

      * id

        id

      * initial\_value

        string

      * recipient\_id

        id

      -

      - Example:

        * `expires_on:>=2020-01-01`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

      - Example:
        * `initial_value:>=100`

    * * source

        string

      * status

        string

      -
      - Valid values:
        * `manual`
        * `purchased`
        * `api_client`
        Example:
        * `source:manual`
        Valid values:
        * `disabled`
        * `enabled`
        * `expired`
        * `expiring`
        Example:
        * `status:disabled OR status:expired`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Gift​Card​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

## GiftCard Queries

### Queried by

* [gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCard)
* [gift​Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards)

***

## Mutations

* [gift​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate)

  mutation

  Creates a new [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) with a specified initial value. You can assign the gift card to a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or create it without assignment for manual distribution.

  You can customize the gift card with an optional code, expiration date, and internal note. If you don't provide a code, the system generates a random 16 character alphanumeric code. The mutation also supports scheduling gift card notifications to recipients, with a personalized message, through the [`recipientAttributes`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-recipientAttributes) field on the `GiftCardCreateInput` input object.

  * input

    [Gift​Card​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput)

    required

    ### Arguments

    The input fields to create a gift card.

  ***

* [gift​Card​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate)

  mutation

  Deactivate a gift card. A deactivated gift card cannot be used by a customer. A deactivated gift card cannot be re-enabled.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to deactivate.

  ***

* [gift​Card​Send​Notification​To​Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer)

  mutation

  Sends a notification to the customer who purchased a gift card, including the gift card details and code. The notification is delivered using the customer's available contact method. Use this to resend the purchase confirmation or remind the purchaser about a gift card they bought.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

* [gift​Card​Send​Notification​To​Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToRecipient)

  mutation

  Sends a notification to the designated recipient of a gift card, delivering the gift card code and redemption instructions. The notification is delivered using the recipient's available contact method. Use this to deliver or re-deliver the gift card to the intended recipient.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

* [gift​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardUpdate)

  mutation

  Updates the properties of an existing gift card, such as its expiration date, note, or template suffix. Use this to modify gift card details — for example, extending an expiration date for a loyal customer or adding an internal note for tracking purposes.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to be updated.

  * input

    [Gift​Card​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput)

    required

    The input fields to update the gift card.

  ***

***

## GiftCard Mutations

### Mutated by

* [gift​Card​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate)
* [gift​Card​Deactivate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate)
* [gift​Card​Send​Notification​To​Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer)
* [gift​Card​Send​Notification​To​Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToRecipient)
* [gift​Card​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardUpdate)

***

## Interfaces

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)

  interface

***

## GiftCard Implements

### Implements

* [Node](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Node)
