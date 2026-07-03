---
title: discountNodesCount - GraphQL Admin
description: >-
  The total number of discounts for the shop. Limited to a maximum of 10000 by
  default.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodesCount'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodesCount.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# discount​Nodes​Count

query

Requires `read_discounts` access scope.

The total number of discounts for the shop. Limited to a maximum of 10000 by default.

## Arguments

* limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Default:10000

  The upper bound on count value before returning a result. Use `null` to have no limit.

* query

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

  * * default

      string

    * code

      string

    * combines\_with

      string

    * combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line

      string

    * context

      string

    * created\_at

      time

    * customer\_ids

      string

    * discount\_class

      string

    * discount\_type

      string

    * ends\_at

      time

    * id

      id

    * market\_ids

      string

    * method

      string

    - Filter by a case-insensitive search of multiple fields in a document.

    - Example:

      * `query=Bob Norman`
      * `query=title:green hoodie`

      Filter by the discount code. Not supported for bulk discounts.

    - Example:

      * `code:WELCOME10`

      Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with. Supports multiple values separated by commas (e.g., combines\_with:product\_discounts,order\_discounts).

    - Valid values:

      * `order_discounts`
      * `product_discounts`
      * `shipping_discounts`

      Example:

      * `combines_with:product_discounts`
      * `combines_with:product_discounts,order_discounts`

      Filter by a combines with tag applied to discounts on the same cart line. Supports multiple tags separated by commas (e.g., combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line:priority,exclusive).

    - Example:

      * `combines_with.product_discounts_with_tags_on_same_cart_line:priority`
      * `combines_with.product_discounts_with_tags_on_same_cart_line:priority,exclusive`

      Filter by the context type. Supports multiple values separated by commas (e.g., context:all,market). When multiple values are provided, results include discounts that match any of them.

    - Valid values:

      * `all`
      * `customer`
      * `segment`
      * `market`

      Example:

      * `context:segment`
      * `context:all,market`

      Filter by the date and time, in the shop's timezone, when the discount was created.

    - Example:

      * `created_at:>'2020-10-21T23:39:20Z'`
      * `created_at:<now`
      * `created_at:<='2024'`

      Filter by specific customer IDs that are eligible for the discount.

    - Example:

      * `customer_ids:123456789`
      * `customer_ids:123,456`

      Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes). Supports multiple classes separated by commas (e.g., discount\_class:product,order).

    - Valid values:

      * `order`
      * `product`
      * `shipping`

      Example:

      * `discount_class:product`
      * `discount_class:product,order`

      Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). Supports multiple types separated by commas (e.g., discount\_type:percentage,fixed\_amount).

    - Valid values:

      * `app`
      * `bogo`
      * `fixed_amount`
      * `free_shipping`
      * `percentage`

      Example:

      * `discount_type:fixed_amount`
      * `discount_type:percentage,fixed_amount`

      Filter by the date and time, in the shop's timezone, when the discount ends.

    - Example:

      * `ends_at:>'2020-10-21T23:39:20Z'`
      * `ends_at:<now`
      * `ends_at:<='2024'`

      Filter by `id` range.

    - Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

      Filter by specific market IDs that are eligible for the discount. Supports multiple IDs separated by commas (e.g., market\_ids:123,456).

    - Example:

      * `market_ids:123456789`
      * `market_ids:123,456`

      Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods). Supports multiple methods separated by commas (e.g., method:code,automatic).

  * \- \`automatic\`\<br/> - \`code\`

    * `method:code`\
      \- `method:code,automatic`

  * * segment\_ids

      string

    * starts\_at

      time

    * status

      string

    * tag

      string

    * times\_used

      integer

    * title

      string

    * type

      string

    * updated\_at

      time

    - Filter by specific segment IDs that are eligible for the discount. Supports multiple IDs separated by commas (e.g., segment\_ids:123,456).

    - Example:

      * `segment_ids:123456789`
      * `segment_ids:123,456`

      Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

    - Example:

      * `starts_at:>'2020-10-21T23:39:20Z'`
      * `starts_at:<now`
      * `starts_at:<='2024'`

      Filter by the status of the discount. Supports multiple statuses separated by commas (e.g., status:active,scheduled).

    - Valid values:

      * `active`
      * `expired`
      * `scheduled`

      Example:

      * `status:scheduled`
      * `status:active,scheduled`

      Filter by a tag applied to the discount. Supports multiple tags separated by commas (e.g., tag:loyalty,clearance).

    - Example:

      * `tag:loyalty`
      * `tag:loyalty,clearance`

      Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
      \
      This value is updated asynchronously. As a result, it might be different than the actual usage count.

    - Example:

      * `times_used:0`
      * `times_used:>150`
      * `times_used:>=200`

      Filter by the discount name that displays to merchants in the Shopify admin and to customers.

    - Example:

      * `title:Black Friday Sale`

      Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). Supports multiple types separated by commas (e.g., type:percentage,fixed\_amount).

    - Valid values:

      * `all`
      * `all_with_app`
      * `app`
      * `bxgy`
      * `fixed_amount`
      * `free_shipping`
      * `percentage`

      Example:

      * `type:percentage`
      * `type:percentage,fixed_amount`

      Filter by the date and time, in the shop's timezone, when the discount was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<='2024'`

* saved​Search​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of an existing saved search. The search’s query string is used as the query argument. Refer to the [`SavedSearch`](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch) object.

***

## Possible returns

* Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  A numeric count with precision information indicating whether the count is exact or an estimate.

  * count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The count of elements.

  * precision

    [Count​Precision!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountPrecision)

    non-null

    The count's precision, or the exactness of the value.

***

## Examples

* ### Retrieve the number of discounts used more than once

  #### Description

  Returns the number of discounts that were used more than once.

  #### Query

  ```graphql
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
    }
  }
  ```

  #### Variables

  ```json
  {
    "query": "times_used:>1"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query discountNodesCount($query: String!) { discountNodesCount(query: $query) { count precision } }",
   "variables": {
      "query": "times_used:>1"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
      }
    }`,
    {
      variables: {
          "query": "times_used:>1"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
      }
    }
  QUERY

  variables = {
    "query": "times_used:>1"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query discountNodesCount($query: String!) {
        discountNodesCount(query: $query) {
          count
          precision
        }
      }`,
      "variables": {
          "query": "times_used:>1"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
    }
  }' \
  --variables \
  '{
    "query": "times_used:>1"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query discountNodesCount($query: String!) {
          discountNodesCount(query: $query) {
            count
            precision
          }
        }
      `,
      variables: {
          "query": "times_used:>1"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "discountNodesCount": {
      "count": 3,
      "precision": "EXACT"
    }
  }
  ```

* ### Retrieve the number of discounts used within a range

  #### Description

  Returns the number of discounts that were used more than onceand less than four times.

  #### Query

  ```graphql
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
    }
  }
  ```

  #### Variables

  ```json
  {
    "query": "times_used:>1 AND times_used:<4"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query discountNodesCount($query: String!) { discountNodesCount(query: $query) { count precision } }",
   "variables": {
      "query": "times_used:>1 AND times_used:<4"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
      }
    }`,
    {
      variables: {
          "query": "times_used:>1 AND times_used:<4"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
      }
    }
  QUERY

  variables = {
    "query": "times_used:>1 AND times_used:<4"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query discountNodesCount($query: String!) {
        discountNodesCount(query: $query) {
          count
          precision
        }
      }`,
      "variables": {
          "query": "times_used:>1 AND times_used:<4"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
    }
  }' \
  --variables \
  '{
    "query": "times_used:>1 AND times_used:<4"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query discountNodesCount($query: String!) {
          discountNodesCount(query: $query) {
            count
            precision
          }
        }
      `,
      variables: {
          "query": "times_used:>1 AND times_used:<4"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "discountNodesCount": {
      "count": 2,
      "precision": "EXACT"
    }
  }
  ```

* ### Retrieve the number of unused discounts

  #### Description

  Returns the number of discounts that were never used.

  #### Query

  ```graphql
  query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
    }
  }
  ```

  #### Variables

  ```json
  {
    "query": "times_used:0"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query discountNodesCount($query: String!) { discountNodesCount(query: $query) { count precision } }",
   "variables": {
      "query": "times_used:0"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
      }
    }`,
    {
      variables: {
          "query": "times_used:0"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query discountNodesCount($query: String!) {
      discountNodesCount(query: $query) {
        count
        precision
      }
    }
  QUERY

  variables = {
    "query": "times_used:0"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query discountNodesCount($query: String!) {
        discountNodesCount(query: $query) {
          count
          precision
        }
      }`,
      "variables": {
          "query": "times_used:0"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query discountNodesCount($query: String!) {
    discountNodesCount(query: $query) {
      count
      precision
    }
  }' \
  --variables \
  '{
    "query": "times_used:0"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query discountNodesCount($query: String!) {
          discountNodesCount(query: $query) {
            count
            precision
          }
        }
      `,
      variables: {
          "query": "times_used:0"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "discountNodesCount": {
      "count": 37,
      "precision": "EXACT"
    }
  }
  ```

* ### Retrieve the total number of discounts

  #### Description

  Returns the total number of discounts.

  #### Query

  ```graphql
  query discountNodesCount {
    discountNodesCount {
      count
      precision
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query discountNodesCount { discountNodesCount { count precision } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query discountNodesCount {
      discountNodesCount {
        count
        precision
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query discountNodesCount {
      discountNodesCount {
        count
        precision
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query discountNodesCount {
      discountNodesCount {
        count
        precision
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query discountNodesCount {
    discountNodesCount {
      count
      precision
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query discountNodesCount {
          discountNodesCount {
            count
            precision
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "discountNodesCount": {
      "count": 41,
      "precision": "EXACT"
    }
  }
  ```

* ### Retrieves a count of all price rules

  #### Query

  ```graphql
  query DiscountCount {
    discountNodesCount {
      count
      precision
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query DiscountCount { discountNodesCount { count precision } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query DiscountCount {
      discountNodesCount {
        count
        precision
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    query DiscountCount {
      discountNodesCount {
        count
        precision
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query DiscountCount {
      discountNodesCount {
        count
        precision
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query DiscountCount {
    discountNodesCount {
      count
      precision
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query DiscountCount {
          discountNodesCount {
            count
            precision
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "discountNodesCount": {
      "count": 41,
      "precision": "EXACT"
    }
  }
  ```
