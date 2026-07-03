---
title: returnableFulfillment - GraphQL Admin
description: Returns a `ReturnableFulfillment` resource by ID.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillment
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillment.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# returnable​Fulfillment

query

Returns a `ReturnableFulfillment` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `ReturnableFulfillment` to return.

***

## Possible returns

* Returnable​Fulfillment

  [Returnable​Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment)

  A delivered order that's eligible to be returned to the merchant. Provides the items from completed fulfillments that customers can select when initiating a return.

  Use returnable fulfillments to determine which items are eligible for return before creating a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) with the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation. The line items show quantities that are available for return.

  Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

  * fulfillment

    [Fulfillment!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

    non-null

    The fulfillment that the returnable fulfillment refers to.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    The unique ID of the Returnable Fulfillment.

  * returnable​Fulfillment​Line​Items

    [Returnable​Fulfillment​Line​Item​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection)

    non-null

    The list of returnable fulfillment line items.

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

***

## Examples

* ### Retrieve a returnable fulfillment and its line items.

  #### Description

  A returnable fulfillment contains fulfillment line items that are eligible for a return. To create a return, use the \`returnCreate\` or \`returnRequest\` mutations. The \`id\` of each \`fulfillmentLineItem\` returned in this query can be used in the mutation input.

  #### Query

  ```graphql
  query {
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
            }
          }
        }
      }
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
  "query": "query { returnableFulfillment(id: \"gid://shopify/ReturnableFulfillment/607470790\") { id fulfillment { id status } returnableFulfillmentLineItems(first: 5) { edges { node { quantity fulfillmentLineItem { id lineItem { id originalUnitPriceSet { shopMoney { amount currencyCode } } quantity requiresShipping taxable unfulfilledQuantity } } } } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query {
      returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
        id
        fulfillment {
          id
          status
        }
        returnableFulfillmentLineItems(first: 5) {
          edges {
            node {
              quantity
              fulfillmentLineItem {
                id
                lineItem {
                  id
                  originalUnitPriceSet {
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                  quantity
                  requiresShipping
                  taxable
                  unfulfilledQuantity
                }
              }
            }
          }
        }
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
    query {
      returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
        id
        fulfillment {
          id
          status
        }
        returnableFulfillmentLineItems(first: 5) {
          edges {
            node {
              quantity
              fulfillmentLineItem {
                id
                lineItem {
                  id
                  originalUnitPriceSet {
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                  quantity
                  requiresShipping
                  taxable
                  unfulfilledQuantity
                }
              }
            }
          }
        }
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query {
      returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
        id
        fulfillment {
          id
          status
        }
        returnableFulfillmentLineItems(first: 5) {
          edges {
            node {
              quantity
              fulfillmentLineItem {
                id
                lineItem {
                  id
                  originalUnitPriceSet {
                    shopMoney {
                      amount
                      currencyCode
                    }
                  }
                  quantity
                  requiresShipping
                  taxable
                  unfulfilledQuantity
                }
              }
            }
          }
        }
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query {
    returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
      id
      fulfillment {
        id
        status
      }
      returnableFulfillmentLineItems(first: 5) {
        edges {
          node {
            quantity
            fulfillmentLineItem {
              id
              lineItem {
                id
                originalUnitPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
                quantity
                requiresShipping
                taxable
                unfulfilledQuantity
              }
            }
          }
        }
      }
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query {
          returnableFulfillment(id: "gid://shopify/ReturnableFulfillment/607470790") {
            id
            fulfillment {
              id
              status
            }
            returnableFulfillmentLineItems(first: 5) {
              edges {
                node {
                  quantity
                  fulfillmentLineItem {
                    id
                    lineItem {
                      id
                      originalUnitPriceSet {
                        shopMoney {
                          amount
                          currencyCode
                        }
                      }
                      quantity
                      requiresShipping
                      taxable
                      unfulfilledQuantity
                    }
                  }
                }
              }
            }
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
    "returnableFulfillment": {
      "id": "gid://shopify/ReturnableFulfillment/607470790",
      "fulfillment": {
        "id": "gid://shopify/Fulfillment/607470790",
        "status": "SUCCESS"
      },
      "returnableFulfillmentLineItems": {
        "edges": [
          {
            "node": {
              "quantity": 2,
              "fulfillmentLineItem": {
                "id": "gid://shopify/FulfillmentLineItem/667843070",
                "lineItem": {
                  "id": "gid://shopify/LineItem/571194661",
                  "originalUnitPriceSet": {
                    "shopMoney": {
                      "amount": "10.0",
                      "currencyCode": "USD"
                    }
                  },
                  "quantity": 2,
                  "requiresShipping": true,
                  "taxable": true,
                  "unfulfilledQuantity": 0
                }
              }
            }
          }
        ]
      }
    }
  }
  ```
