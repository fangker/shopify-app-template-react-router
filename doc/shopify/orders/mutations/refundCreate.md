---
title: refundCreate - GraphQL Admin
description: >-
  Creates a refund for an order, allowing you to process returns and issue
  payments back to customers.


  Use the `refundCreate` mutation to programmatically process refunds in
  scenarios where you need to

  return money to customers, such as when handling returns, processing
  chargebacks, or correcting

  order errors.


  The `refundCreate` mutation supports various refund scenarios:


  - Refunding line items with optional restocking

  - Refunding shipping costs

  - Refunding duties and import taxes

  - Refunding additional fees

  - Processing refunds through different payment methods

  - Issuing store credit refunds (when enabled)


  You can create both full and partial refunds, and optionally allow
  over-refunding in specific

  cases.


  After creating a refund, you can track its status and details through the
  order's

  [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds)

  field. The refund is associated with the order and can be used for reporting
  and reconciliation purposes.


  Learn more about

  [managing
  returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management)

  and [refunding
  duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).


  > Note:

  > The refunding behavior of the `refundCreate` mutation is similar to the

  [`refundReturn`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund)

  mutation. The key difference is that the `refundCreate` mutation lets you to
  specify restocking behavior

  for line items, whereas the `returnRefund` mutation focuses solely on handling
  the financial refund without

  any restocking input.


  > Caution:

  > As of 2026-01, this mutation supports an optional idempotency key using the
  `@idempotent` directive.

  > As of 2026-04, the idempotency key is required and must be provided using
  the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate.md'
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# refund​Create

mutation

Requires `orders` access scope, `marketplace_orders` access scope or `buyer_membership_orders` access scope.

Creates a refund for an order, allowing you to process returns and issue payments back to customers.

Use the `refundCreate` mutation to programmatically process refunds in scenarios where you need to return money to customers, such as when handling returns, processing chargebacks, or correcting order errors.

The `refundCreate` mutation supports various refund scenarios:

* Refunding line items with optional restocking
* Refunding shipping costs
* Refunding duties and import taxes
* Refunding additional fees
* Processing refunds through different payment methods
* Issuing store credit refunds (when enabled)

You can create both full and partial refunds, and optionally allow over-refunding in specific cases.

After creating a refund, you can track its status and details through the order's [`refunds`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.refunds) field. The refund is associated with the order and can be used for reporting and reconciliation purposes.

Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties).

***

**Note:** The refunding behavior of the \<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Create\</span>\</code> mutation is similar to the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRefund">\<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Return\</span>\</code>\</a> mutation. The key difference is that the \<code>\<span class="PreventFireFoxApplyingGapToWBR">refund\<wbr/>Create\</span>\</code> mutation lets you to specify restocking behavior for line items, whereas the \<code>\<span class="PreventFireFoxApplyingGapToWBR">return\<wbr/>Refund\</span>\</code> mutation focuses solely on handling the financial refund without any restocking input.

***

***

**Caution:** As of 2026-01, this mutation supports an optional idempotency key using the \<code>@idempotent\</code> directive. As of 2026-04, the idempotency key is required and must be provided using the \<code>@idempotent\</code> directive. For more information, see the \<a href="https://shopify.dev/docs/api/usage/idempotent-requests">idempotency documentation\</a>.

***

## Arguments

* input

  [Refund​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput)

  required

  The input fields that are used in the mutation for creating a refund.

***

## Refund​Create​Payload returns

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the created refund.

* refund

  [Refund](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

  The created refund.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a refund for an item in an order

  #### Description

  Create a refund for a single \[line item]\(https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) in an order. The mutation input includes the order ID and the line item to be refunded, along with its quantity. No transactions are specified, which means the refund will be processed without associating it to a particular payment transaction—the system will determine how to apply the refund. The mutation returns the created refund's ID and the total refunded amount.

  #### Query

  ```graphql
  mutation RefundLineItem($input: RefundInput!) {
    refundCreate(input: $input) @idempotent(key: "040da2ad-ed35-4c2d-8294-9999437b70d1") {
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 1
        }
      ],
      "transactions": []
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
  "query": "mutation RefundLineItem($input: RefundInput!) { refundCreate(input: $input) @idempotent(key: \"040da2ad-ed35-4c2d-8294-9999437b70d1\") { refund { id totalRefundedSet { presentmentMoney { amount currencyCode } } } userErrors { field message } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/734509473",
        "refundLineItems": [
          {
            "lineItemId": "gid://shopify/LineItem/25746870",
            "quantity": 1
          }
        ],
        "transactions": []
      }
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
    mutation RefundLineItem($input: RefundInput!) {
      refundCreate(input: $input) @idempotent(key: "040da2ad-ed35-4c2d-8294-9999437b70d1") {
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/25746870",
                      "quantity": 1
                  }
              ],
              "transactions": []
          }
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
    mutation RefundLineItem($input: RefundInput!) {
      refundCreate(input: $input) @idempotent(key: "040da2ad-ed35-4c2d-8294-9999437b70d1") {
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 1
        }
      ],
      "transactions": []
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation RefundLineItem($input: RefundInput!) {
        refundCreate(input: $input) @idempotent(key: "040da2ad-ed35-4c2d-8294-9999437b70d1") {
          refund {
            id
            totalRefundedSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/25746870",
                      "quantity": 1
                  }
              ],
              "transactions": []
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation RefundLineItem($input: RefundInput!) {
    refundCreate(input: $input) @idempotent(key: "040da2ad-ed35-4c2d-8294-9999437b70d1") {
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 1
        }
      ],
      "transactions": []
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation RefundLineItem($input: RefundInput!) {
          refundCreate(input: $input) @idempotent(key: "040da2ad-ed35-4c2d-8294-9999437b70d1") {
            refund {
              id
              totalRefundedSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/25746870",
                      "quantity": 1
                  }
              ],
              "transactions": []
          }
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "refundCreate": {
      "refund": {
        "id": "gid://shopify/Refund/943333863",
        "totalRefundedSet": {
          "presentmentMoney": {
            "amount": "0.0",
            "currencyCode": "CAD"
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create a refund for shipping costs

  #### Description

  Create a refund that includes a partial reimbursement for shipping costs. The example shows how shipping refunds are factored into the \`REFUND\` kind transaction amount. The mutation returns the total refunded amount and detailed information about the first two associated transactions, including their statuses and amounts.

  #### Query

  ```graphql
  mutation PartiallyRefundShipping($input: RefundInput!) {
    refundCreate(input: $input) @idempotent(key: "9f90b43c-043c-46d2-aa2c-53086ba753b1") {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
        transactions(first: 2) {
          edges {
            node {
              amountSet {
                presentmentMoney {
                  amount
                }
              }
              status
            }
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "parentId": "gid://shopify/OrderTransaction/723599266",
          "kind": "REFUND",
          "gateway": "foo",
          "amount": "16.99"
        }
      ],
      "shipping": {
        "amount": "6.99"
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
  "query": "mutation PartiallyRefundShipping($input: RefundInput!) { refundCreate(input: $input) @idempotent(key: \"9f90b43c-043c-46d2-aa2c-53086ba753b1\") { userErrors { field message } refund { id totalRefundedSet { presentmentMoney { amount } } transactions(first: 2) { edges { node { amountSet { presentmentMoney { amount } } status } } } } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/734509473",
        "transactions": [
          {
            "orderId": "gid://shopify/Order/734509473",
            "parentId": "gid://shopify/OrderTransaction/723599266",
            "kind": "REFUND",
            "gateway": "foo",
            "amount": "16.99"
          }
        ],
        "shipping": {
          "amount": "6.99"
        }
      }
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
    mutation PartiallyRefundShipping($input: RefundInput!) {
      refundCreate(input: $input) @idempotent(key: "9f90b43c-043c-46d2-aa2c-53086ba753b1") {
        userErrors {
          field
          message
        }
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
            }
          }
          transactions(first: 2) {
            edges {
              node {
                amountSet {
                  presentmentMoney {
                    amount
                  }
                }
                status
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "transactions": [
                  {
                      "orderId": "gid://shopify/Order/734509473",
                      "parentId": "gid://shopify/OrderTransaction/723599266",
                      "kind": "REFUND",
                      "gateway": "foo",
                      "amount": "16.99"
                  }
              ],
              "shipping": {
                  "amount": "6.99"
              }
          }
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
    mutation PartiallyRefundShipping($input: RefundInput!) {
      refundCreate(input: $input) @idempotent(key: "9f90b43c-043c-46d2-aa2c-53086ba753b1") {
        userErrors {
          field
          message
        }
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
            }
          }
          transactions(first: 2) {
            edges {
              node {
                amountSet {
                  presentmentMoney {
                    amount
                  }
                }
                status
              }
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "parentId": "gid://shopify/OrderTransaction/723599266",
          "kind": "REFUND",
          "gateway": "foo",
          "amount": "16.99"
        }
      ],
      "shipping": {
        "amount": "6.99"
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation PartiallyRefundShipping($input: RefundInput!) {
        refundCreate(input: $input) @idempotent(key: "9f90b43c-043c-46d2-aa2c-53086ba753b1") {
          userErrors {
            field
            message
          }
          refund {
            id
            totalRefundedSet {
              presentmentMoney {
                amount
              }
            }
            transactions(first: 2) {
              edges {
                node {
                  amountSet {
                    presentmentMoney {
                      amount
                    }
                  }
                  status
                }
              }
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "transactions": [
                  {
                      "orderId": "gid://shopify/Order/734509473",
                      "parentId": "gid://shopify/OrderTransaction/723599266",
                      "kind": "REFUND",
                      "gateway": "foo",
                      "amount": "16.99"
                  }
              ],
              "shipping": {
                  "amount": "6.99"
              }
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation PartiallyRefundShipping($input: RefundInput!) {
    refundCreate(input: $input) @idempotent(key: "9f90b43c-043c-46d2-aa2c-53086ba753b1") {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
        transactions(first: 2) {
          edges {
            node {
              amountSet {
                presentmentMoney {
                  amount
                }
              }
              status
            }
          }
        }
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "parentId": "gid://shopify/OrderTransaction/723599266",
          "kind": "REFUND",
          "gateway": "foo",
          "amount": "16.99"
        }
      ],
      "shipping": {
        "amount": "6.99"
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
        mutation PartiallyRefundShipping($input: RefundInput!) {
          refundCreate(input: $input) @idempotent(key: "9f90b43c-043c-46d2-aa2c-53086ba753b1") {
            userErrors {
              field
              message
            }
            refund {
              id
              totalRefundedSet {
                presentmentMoney {
                  amount
                }
              }
              transactions(first: 2) {
                edges {
                  node {
                    amountSet {
                      presentmentMoney {
                        amount
                      }
                    }
                    status
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "transactions": [
                  {
                      "orderId": "gid://shopify/Order/734509473",
                      "parentId": "gid://shopify/OrderTransaction/723599266",
                      "kind": "REFUND",
                      "gateway": "foo",
                      "amount": "16.99"
                  }
              ],
              "shipping": {
                  "amount": "6.99"
              }
          }
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "refundCreate": {
      "userErrors": [],
      "refund": {
        "id": "gid://shopify/Refund/943333859",
        "totalRefundedSet": {
          "presentmentMoney": {
            "amount": "16.99"
          }
        },
        "transactions": {
          "edges": [
            {
              "node": {
                "amountSet": {
                  "presentmentMoney": {
                    "amount": "16.99"
                  }
                },
                "status": "SUCCESS"
              }
            }
          ]
        }
      }
    }
  }
  ```

* ### Create a refund that's issued as a store credit

  #### Description

  Create a refund that's issued as store credit instead of returning it to the original payment method. The store credit amount is specified in the \`refundMethods\` field and applies to a specific line item in the order. The mutation returns the refund ID, total refunded amount, and transaction details associated with the store credit.

  #### Query

  ```graphql
  mutation RefundToStoreCredit($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 2) {
          edges {
            node {
              gateway
              kind
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      order {
        id
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/1073459983",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/1071823193",
          "quantity": 1
        }
      ],
      "transactions": [],
      "refundMethods": [
        {
          "storeCreditRefund": {
            "amount": {
              "amount": "10.00",
              "currencyCode": "USD"
            }
          }
        }
      ]
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
  "query": "mutation RefundToStoreCredit($input: RefundInput!) { refundCreate(input: $input) { userErrors { field message } refund { id totalRefundedSet { presentmentMoney { amount currencyCode } } transactions(first: 2) { edges { node { gateway kind amountSet { presentmentMoney { amount currencyCode } } } } } } order { id } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/1073459983",
        "refundLineItems": [
          {
            "lineItemId": "gid://shopify/LineItem/1071823193",
            "quantity": 1
          }
        ],
        "transactions": [],
        "refundMethods": [
          {
            "storeCreditRefund": {
              "amount": {
                "amount": "10.00",
                "currencyCode": "USD"
              }
            }
          }
        ]
      }
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
    mutation RefundToStoreCredit($input: RefundInput!) {
      refundCreate(input: $input) {
        userErrors {
          field
          message
        }
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          transactions(first: 2) {
            edges {
              node {
                gateway
                kind
                amountSet {
                  presentmentMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        order {
          id
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/1073459983",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/1071823193",
                      "quantity": 1
                  }
              ],
              "transactions": [],
              "refundMethods": [
                  {
                      "storeCreditRefund": {
                          "amount": {
                              "amount": "10.00",
                              "currencyCode": "USD"
                          }
                      }
                  }
              ]
          }
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
    mutation RefundToStoreCredit($input: RefundInput!) {
      refundCreate(input: $input) {
        userErrors {
          field
          message
        }
        refund {
          id
          totalRefundedSet {
            presentmentMoney {
              amount
              currencyCode
            }
          }
          transactions(first: 2) {
            edges {
              node {
                gateway
                kind
                amountSet {
                  presentmentMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        order {
          id
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/1073459983",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/1071823193",
          "quantity": 1
        }
      ],
      "transactions": [],
      "refundMethods": [
        {
          "storeCreditRefund": {
            "amount": {
              "amount": "10.00",
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation RefundToStoreCredit($input: RefundInput!) {
        refundCreate(input: $input) {
          userErrors {
            field
            message
          }
          refund {
            id
            totalRefundedSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
            transactions(first: 2) {
              edges {
                node {
                  gateway
                  kind
                  amountSet {
                    presentmentMoney {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
          order {
            id
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/1073459983",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/1071823193",
                      "quantity": 1
                  }
              ],
              "transactions": [],
              "refundMethods": [
                  {
                      "storeCreditRefund": {
                          "amount": {
                              "amount": "10.00",
                              "currencyCode": "USD"
                          }
                      }
                  }
              ]
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation RefundToStoreCredit($input: RefundInput!) {
    refundCreate(input: $input) {
      userErrors {
        field
        message
      }
      refund {
        id
        totalRefundedSet {
          presentmentMoney {
            amount
            currencyCode
          }
        }
        transactions(first: 2) {
          edges {
            node {
              gateway
              kind
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      order {
        id
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "orderId": "gid://shopify/Order/1073459983",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/1071823193",
          "quantity": 1
        }
      ],
      "transactions": [],
      "refundMethods": [
        {
          "storeCreditRefund": {
            "amount": {
              "amount": "10.00",
              "currencyCode": "USD"
            }
          }
        }
      ]
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation RefundToStoreCredit($input: RefundInput!) {
          refundCreate(input: $input) {
            userErrors {
              field
              message
            }
            refund {
              id
              totalRefundedSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
              }
              transactions(first: 2) {
                edges {
                  node {
                    gateway
                    kind
                    amountSet {
                      presentmentMoney {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
            order {
              id
            }
          }
        }
      `,
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/1073459983",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/1071823193",
                      "quantity": 1
                  }
              ],
              "transactions": [],
              "refundMethods": [
                  {
                      "storeCreditRefund": {
                          "amount": {
                              "amount": "10.00",
                              "currencyCode": "USD"
                          }
                      }
                  }
              ]
          }
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "refundCreate": {
      "userErrors": [],
      "refund": {
        "id": "gid://shopify/Refund/943333862",
        "totalRefundedSet": {
          "presentmentMoney": {
            "amount": "10.0",
            "currencyCode": "USD"
          }
        },
        "transactions": {
          "edges": [
            {
              "node": {
                "gateway": "shopify_store_credit",
                "kind": "REFUND",
                "amountSet": {
                  "presentmentMoney": {
                    "amount": "10.0",
                    "currencyCode": "USD"
                  }
                }
              }
            }
          ]
        }
      },
      "order": {
        "id": "gid://shopify/Order/1073459983"
      }
    }
  }
  ```

* ### Create a refund with a note and transaction details

  #### Description

  Issue a refund for an order and attach a note explaining the reason for the refund (for example, a customer request for an item exchange). The response includes the refund's unique ID, the explanatory note, and the total refunded amount in the order's \[presentment currency]\(https://help.shopify.com/manual/international/pricing/exchange-rates).

  #### Query

  ```graphql
  mutation RefundWithNoteAndTransactions($input: RefundInput!) {
    refundCreate(input: $input) @idempotent(key: "a2a55698-e97e-4c31-9c57-edd0d2ce0f32") {
      userErrors {
        field
        message
      }
      refund {
        id
        note
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "note": "Want to exchange for a different item",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 2
        }
      ],
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "gateway": "foo",
          "kind": "REFUND",
          "amount": "10.0",
          "parentId": "gid://shopify/OrderTransaction/723599266"
        }
      ]
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
  "query": "mutation RefundWithNoteAndTransactions($input: RefundInput!) { refundCreate(input: $input) @idempotent(key: \"a2a55698-e97e-4c31-9c57-edd0d2ce0f32\") { userErrors { field message } refund { id note totalRefundedSet { presentmentMoney { amount } } } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/734509473",
        "note": "Want to exchange for a different item",
        "refundLineItems": [
          {
            "lineItemId": "gid://shopify/LineItem/25746870",
            "quantity": 2
          }
        ],
        "transactions": [
          {
            "orderId": "gid://shopify/Order/734509473",
            "gateway": "foo",
            "kind": "REFUND",
            "amount": "10.0",
            "parentId": "gid://shopify/OrderTransaction/723599266"
          }
        ]
      }
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
    mutation RefundWithNoteAndTransactions($input: RefundInput!) {
      refundCreate(input: $input) @idempotent(key: "a2a55698-e97e-4c31-9c57-edd0d2ce0f32") {
        userErrors {
          field
          message
        }
        refund {
          id
          note
          totalRefundedSet {
            presentmentMoney {
              amount
            }
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "note": "Want to exchange for a different item",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/25746870",
                      "quantity": 2
                  }
              ],
              "transactions": [
                  {
                      "orderId": "gid://shopify/Order/734509473",
                      "gateway": "foo",
                      "kind": "REFUND",
                      "amount": "10.0",
                      "parentId": "gid://shopify/OrderTransaction/723599266"
                  }
              ]
          }
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
    mutation RefundWithNoteAndTransactions($input: RefundInput!) {
      refundCreate(input: $input) @idempotent(key: "a2a55698-e97e-4c31-9c57-edd0d2ce0f32") {
        userErrors {
          field
          message
        }
        refund {
          id
          note
          totalRefundedSet {
            presentmentMoney {
              amount
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "note": "Want to exchange for a different item",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 2
        }
      ],
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "gateway": "foo",
          "kind": "REFUND",
          "amount": "10.0",
          "parentId": "gid://shopify/OrderTransaction/723599266"
        }
      ]
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation RefundWithNoteAndTransactions($input: RefundInput!) {
        refundCreate(input: $input) @idempotent(key: "a2a55698-e97e-4c31-9c57-edd0d2ce0f32") {
          userErrors {
            field
            message
          }
          refund {
            id
            note
            totalRefundedSet {
              presentmentMoney {
                amount
              }
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "note": "Want to exchange for a different item",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/25746870",
                      "quantity": 2
                  }
              ],
              "transactions": [
                  {
                      "orderId": "gid://shopify/Order/734509473",
                      "gateway": "foo",
                      "kind": "REFUND",
                      "amount": "10.0",
                      "parentId": "gid://shopify/OrderTransaction/723599266"
                  }
              ]
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation RefundWithNoteAndTransactions($input: RefundInput!) {
    refundCreate(input: $input) @idempotent(key: "a2a55698-e97e-4c31-9c57-edd0d2ce0f32") {
      userErrors {
        field
        message
      }
      refund {
        id
        note
        totalRefundedSet {
          presentmentMoney {
            amount
          }
        }
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "orderId": "gid://shopify/Order/734509473",
      "note": "Want to exchange for a different item",
      "refundLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/25746870",
          "quantity": 2
        }
      ],
      "transactions": [
        {
          "orderId": "gid://shopify/Order/734509473",
          "gateway": "foo",
          "kind": "REFUND",
          "amount": "10.0",
          "parentId": "gid://shopify/OrderTransaction/723599266"
        }
      ]
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation RefundWithNoteAndTransactions($input: RefundInput!) {
          refundCreate(input: $input) @idempotent(key: "a2a55698-e97e-4c31-9c57-edd0d2ce0f32") {
            userErrors {
              field
              message
            }
            refund {
              id
              note
              totalRefundedSet {
                presentmentMoney {
                  amount
                }
              }
            }
          }
        }
      `,
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/734509473",
              "note": "Want to exchange for a different item",
              "refundLineItems": [
                  {
                      "lineItemId": "gid://shopify/LineItem/25746870",
                      "quantity": 2
                  }
              ],
              "transactions": [
                  {
                      "orderId": "gid://shopify/Order/734509473",
                      "gateway": "foo",
                      "kind": "REFUND",
                      "amount": "10.0",
                      "parentId": "gid://shopify/OrderTransaction/723599266"
                  }
              ]
          }
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "refundCreate": {
      "userErrors": [],
      "refund": {
        "id": "gid://shopify/Refund/943333860",
        "note": "Want to exchange for a different item",
        "totalRefundedSet": {
          "presentmentMoney": {
            "amount": "10.0"
          }
        }
      }
    }
  }
  ```

* ### refundCreate reference
