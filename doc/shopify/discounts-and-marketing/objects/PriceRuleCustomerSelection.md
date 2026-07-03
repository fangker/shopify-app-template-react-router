---
title: PriceRuleCustomerSelection - GraphQL Admin
description: A selection of customers for whom the price rule applies.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection.md
api_name: admin
api_type: graphql
type: object
metadata:
  domain: admin
---

# Price​Rule​Customer​Selection

object

Requires `read_price_rules` access scope.

A selection of customers for whom the price rule applies.

## Fields

* customers

  [Customer​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerConnection)

  non-null

  List of customers to whom the price rule applies.

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

      * accepts\_marketing

        boolean

      * country

        string

      * customer\_date

        time

      * email

        string

      * first\_name

        string

      * id

        id

      * last\_abandoned\_order\_date

        time

      * last\_name

        string

      * order\_date

        time

      * orders\_count

        integer

      * phone

        string

      * state

        string

      * tag

        string

      * tag\_not

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by whether a customer has consented to receive marketing material.

      - Example:

        * `accepts_marketing:true`

        Filter by the country associated with the customer's address. Use either the country name or the two-letter country code.

      - Example:

        * `country:Canada`
        * `country:JP`

        Filter by the date and time when the customer record was created. This query parameter filters by the [`createdAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-createdAt) field.

      - Example:

        * `customer_date:'2024-03-15T14:30:00Z'`
        * `customer_date: >='2024-01-01'`

        The customer's email address, used to communicate information about orders and for the purposes of email marketing campaigns. You can use a wildcard value to filter the query by customers who have an email address specified. Please note that *email* is a tokenized field: To retrieve exact matches, quote the email address (*phrase query*) as described in [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

      - Example:

        * `email:gmail.com`
        * `email:"bo.wang@example.com"`
        * `email:*`

        Filter by the customer's first name.

      - Example:

        * `first_name:Jane`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time of the customer's most recent abandoned checkout. An abandoned checkout occurs when a customer adds items to their cart, begins the checkout process, but leaves the site without completing their purchase.

      - Example:

        * `last_abandoned_order_date:'2024-04-01T10:00:00Z'`
        * `last_abandoned_order_date: >='2024-01-01'`

        Filter by the customer's last name.

      - Example:

        * `last_name:Reeves`

        Filter by the date and time that the order was placed by the customer. Use this query filter to check if a customer has placed at least one order within a specified date range.

      - Example:

        * `order_date:'2024-02-20T00:00:00Z'`
        * `order_date: >='2024-01-01'`
        * `order_date:'2024-01-01..2024-03-31'`

        Filter by the total number of orders a customer has placed.

      - Example:

        * `orders_count:5`

        The phone number of the customer, used to communicate information about orders and for the purposes of SMS marketing campaigns. You can use a wildcard value to filter the query by customers who have a phone number specified.

      - Example:

        * `phone:+18005550100`
        * `phone:*`

        Filter by the [state](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-state) of the customer's account with the shop. This filter is only valid when [Classic Customer Accounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-customerAccountsVersion) is active.

      - Example:

        * `state:ENABLED`
        * `state:INVITED`
        * `state:DISABLED`
        * `state:DECLINED`

        Filter by the tags that are associated with the customer. This query parameter accepts multiple tags separated by commas.

      - Example:

        * `tag:'VIP'`
        * `tag:'Wholesale,Repeat'`

        Filter by the tags that aren't associated with the customer. This query parameter accepts multiple tags separated by commas.

    * \- \`tag\_not:'Prospect'\`\<br/> - \`tag\_not:'Test,Internal'\`

    * * total\_spent

        float

      * updated\_at

        time

      - Filter by the total amount of money a customer has spent across all orders.

      - Example:

        * `total_spent:100.50`
        * `total_spent:50.00`
        * `total_spent:>100.50`
        * `total_spent:>50.00`

        The date and time, matching a whole day, when the customer's information was last updated.

        Example:

        * `updated_at:2024-01-01T00:00:00Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  * sort​Key

    [Customer​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* for​All​Customers

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the price rule applies to all customers.

* segments

  [\[Segment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  non-null

  A list of customer segments that contain the customers who can use the price rule.

***

## Map

### Fields with this object

* [PriceRule.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.customerSelection)
