---
title: orderRiskAssessmentCreate - GraphQL Admin
description: |-
  Creates a fraud risk assessment for a specific order, evaluating the
  likelihood that the order is fraudulent based on various risk signals. Use
  this to trigger risk analysis on orders that need manual review or to
  integrate custom risk scoring into order processing workflows.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# order​Risk​Assessment​Create

mutation

Requires `write_orders` access scope. Also: This mutation is only accessible to apps authenticated using [offline tokens](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/offline-access-tokens).

Creates a fraud risk assessment for a specific order, evaluating the likelihood that the order is fraudulent based on various risk signals. Use this to trigger risk analysis on orders that need manual review or to integrate custom risk scoring into order processing workflows.

## Arguments

* order​Risk​Assessment​Input

  [Order​Risk​Assessment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderRiskAssessmentCreateInput)

  required

  The input fields required to create a risk assessment.

***

## Order​Risk​Assessment​Create​Payload returns

* order​Risk​Assessment

  [Order​Risk​Assessment](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment)

  The order risk assessment created.

* user​Errors

  [\[Order​Risk​Assessment​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessmentCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a risk assessment for an order

  #### Description

  Create a risk assessment for an order, providing a few facts.

  #### Query

  ```graphql
  mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
    orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
      userErrors {
        field
        message
      }
      orderRiskAssessment {
        facts {
          description
          sentiment
        }
        provider {
          title
        }
        riskLevel
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "LOW",
      "facts": [
        {
          "description": "Payment verification successful.",
          "sentiment": "POSITIVE"
        },
        {
          "description": "Buyer verification inconclusive.",
          "sentiment": "NEUTRAL"
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
  "query": "mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) { orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) { userErrors { field message } orderRiskAssessment { facts { description sentiment } provider { title } riskLevel } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/148977776",
        "riskLevel": "LOW",
        "facts": [
          {
            "description": "Payment verification successful.",
            "sentiment": "POSITIVE"
          },
          {
            "description": "Buyer verification inconclusive.",
            "sentiment": "NEUTRAL"
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
    mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
      orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
        userErrors {
          field
          message
        }
        orderRiskAssessment {
          facts {
            description
            sentiment
          }
          provider {
            title
          }
          riskLevel
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "LOW",
              "facts": [
                  {
                      "description": "Payment verification successful.",
                      "sentiment": "POSITIVE"
                  },
                  {
                      "description": "Buyer verification inconclusive.",
                      "sentiment": "NEUTRAL"
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
    mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
      orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
        userErrors {
          field
          message
        }
        orderRiskAssessment {
          facts {
            description
            sentiment
          }
          provider {
            title
          }
          riskLevel
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "LOW",
      "facts": [
        {
          "description": "Payment verification successful.",
          "sentiment": "POSITIVE"
        },
        {
          "description": "Buyer verification inconclusive.",
          "sentiment": "NEUTRAL"
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
      "query": `mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
        orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
          userErrors {
            field
            message
          }
          orderRiskAssessment {
            facts {
              description
              sentiment
            }
            provider {
              title
            }
            riskLevel
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "LOW",
              "facts": [
                  {
                      "description": "Payment verification successful.",
                      "sentiment": "POSITIVE"
                  },
                  {
                      "description": "Buyer verification inconclusive.",
                      "sentiment": "NEUTRAL"
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
  'mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
    orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
      userErrors {
        field
        message
      }
      orderRiskAssessment {
        facts {
          description
          sentiment
        }
        provider {
          title
        }
        riskLevel
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "LOW",
      "facts": [
        {
          "description": "Payment verification successful.",
          "sentiment": "POSITIVE"
        },
        {
          "description": "Buyer verification inconclusive.",
          "sentiment": "NEUTRAL"
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
        mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
          orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
            userErrors {
              field
              message
            }
            orderRiskAssessment {
              facts {
                description
                sentiment
              }
              provider {
                title
              }
              riskLevel
            }
          }
        }
      `,
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "LOW",
              "facts": [
                  {
                      "description": "Payment verification successful.",
                      "sentiment": "POSITIVE"
                  },
                  {
                      "description": "Buyer verification inconclusive.",
                      "sentiment": "NEUTRAL"
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
    "orderRiskAssessmentCreate": {
      "userErrors": [],
      "orderRiskAssessment": {
        "facts": [
          {
            "description": "Payment verification successful.",
            "sentiment": "POSITIVE"
          },
          {
            "description": "Buyer verification inconclusive.",
            "sentiment": "NEUTRAL"
          }
        ],
        "provider": {
          "title": "Risk API client"
        },
        "riskLevel": "LOW"
      }
    }
  }
  ```

* ### Create a risk assessment for an order, in the pending state

  #### Description

  Create a risk assessment for an order, in the pending state.

  #### Query

  ```graphql
  mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
    orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
      userErrors {
        field
        message
      }
      orderRiskAssessment {
        facts {
          description
          sentiment
        }
        provider {
          title
        }
        riskLevel
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "PENDING",
      "facts": [
        {
          "description": "Analysis is underway.",
          "sentiment": "NEUTRAL"
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
  "query": "mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) { orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) { userErrors { field message } orderRiskAssessment { facts { description sentiment } provider { title } riskLevel } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/148977776",
        "riskLevel": "PENDING",
        "facts": [
          {
            "description": "Analysis is underway.",
            "sentiment": "NEUTRAL"
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
    mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
      orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
        userErrors {
          field
          message
        }
        orderRiskAssessment {
          facts {
            description
            sentiment
          }
          provider {
            title
          }
          riskLevel
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "PENDING",
              "facts": [
                  {
                      "description": "Analysis is underway.",
                      "sentiment": "NEUTRAL"
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
    mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
      orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
        userErrors {
          field
          message
        }
        orderRiskAssessment {
          facts {
            description
            sentiment
          }
          provider {
            title
          }
          riskLevel
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "PENDING",
      "facts": [
        {
          "description": "Analysis is underway.",
          "sentiment": "NEUTRAL"
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
      "query": `mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
        orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
          userErrors {
            field
            message
          }
          orderRiskAssessment {
            facts {
              description
              sentiment
            }
            provider {
              title
            }
            riskLevel
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "PENDING",
              "facts": [
                  {
                      "description": "Analysis is underway.",
                      "sentiment": "NEUTRAL"
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
  'mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
    orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
      userErrors {
        field
        message
      }
      orderRiskAssessment {
        facts {
          description
          sentiment
        }
        provider {
          title
        }
        riskLevel
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "PENDING",
      "facts": [
        {
          "description": "Analysis is underway.",
          "sentiment": "NEUTRAL"
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
        mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
          orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
            userErrors {
              field
              message
            }
            orderRiskAssessment {
              facts {
                description
                sentiment
              }
              provider {
                title
              }
              riskLevel
            }
          }
        }
      `,
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "PENDING",
              "facts": [
                  {
                      "description": "Analysis is underway.",
                      "sentiment": "NEUTRAL"
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
    "orderRiskAssessmentCreate": {
      "userErrors": [],
      "orderRiskAssessment": {
        "facts": [
          {
            "description": "Analysis is underway.",
            "sentiment": "NEUTRAL"
          }
        ],
        "provider": {
          "title": "Risk API client"
        },
        "riskLevel": "PENDING"
      }
    }
  }
  ```

* ### Creates an order risk for an order

  #### Query

  ```graphql
  mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
    orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
      userErrors {
        field
        message
      }
      orderRiskAssessment {
        facts {
          description
          sentiment
        }
        provider {
          title
        }
        riskLevel
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "LOW",
      "facts": [
        {
          "description": "Payment verification successful.",
          "sentiment": "POSITIVE"
        },
        {
          "description": "Buyer verification inconclusive.",
          "sentiment": "NEUTRAL"
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
  "query": "mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) { orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) { userErrors { field message } orderRiskAssessment { facts { description sentiment } provider { title } riskLevel } } }",
   "variables": {
      "input": {
        "orderId": "gid://shopify/Order/148977776",
        "riskLevel": "LOW",
        "facts": [
          {
            "description": "Payment verification successful.",
            "sentiment": "POSITIVE"
          },
          {
            "description": "Buyer verification inconclusive.",
            "sentiment": "NEUTRAL"
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
    mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
      orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
        userErrors {
          field
          message
        }
        orderRiskAssessment {
          facts {
            description
            sentiment
          }
          provider {
            title
          }
          riskLevel
        }
      }
    }`,
    {
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "LOW",
              "facts": [
                  {
                      "description": "Payment verification successful.",
                      "sentiment": "POSITIVE"
                  },
                  {
                      "description": "Buyer verification inconclusive.",
                      "sentiment": "NEUTRAL"
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
    mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
      orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
        userErrors {
          field
          message
        }
        orderRiskAssessment {
          facts {
            description
            sentiment
          }
          provider {
            title
          }
          riskLevel
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "LOW",
      "facts": [
        {
          "description": "Payment verification successful.",
          "sentiment": "POSITIVE"
        },
        {
          "description": "Buyer verification inconclusive.",
          "sentiment": "NEUTRAL"
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
      "query": `mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
        orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
          userErrors {
            field
            message
          }
          orderRiskAssessment {
            facts {
              description
              sentiment
            }
            provider {
              title
            }
            riskLevel
          }
        }
      }`,
      "variables": {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "LOW",
              "facts": [
                  {
                      "description": "Payment verification successful.",
                      "sentiment": "POSITIVE"
                  },
                  {
                      "description": "Buyer verification inconclusive.",
                      "sentiment": "NEUTRAL"
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
  'mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
    orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
      userErrors {
        field
        message
      }
      orderRiskAssessment {
        facts {
          description
          sentiment
        }
        provider {
          title
        }
        riskLevel
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "orderId": "gid://shopify/Order/148977776",
      "riskLevel": "LOW",
      "facts": [
        {
          "description": "Payment verification successful.",
          "sentiment": "POSITIVE"
        },
        {
          "description": "Buyer verification inconclusive.",
          "sentiment": "NEUTRAL"
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
        mutation OrderRiskAssessmentCreate($input: OrderRiskAssessmentCreateInput!) {
          orderRiskAssessmentCreate(orderRiskAssessmentInput: $input) {
            userErrors {
              field
              message
            }
            orderRiskAssessment {
              facts {
                description
                sentiment
              }
              provider {
                title
              }
              riskLevel
            }
          }
        }
      `,
      variables: {
          "input": {
              "orderId": "gid://shopify/Order/148977776",
              "riskLevel": "LOW",
              "facts": [
                  {
                      "description": "Payment verification successful.",
                      "sentiment": "POSITIVE"
                  },
                  {
                      "description": "Buyer verification inconclusive.",
                      "sentiment": "NEUTRAL"
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
    "orderRiskAssessmentCreate": {
      "userErrors": [],
      "orderRiskAssessment": {
        "facts": [
          {
            "description": "Payment verification successful.",
            "sentiment": "POSITIVE"
          },
          {
            "description": "Buyer verification inconclusive.",
            "sentiment": "NEUTRAL"
          }
        ],
        "provider": {
          "title": "Risk API client"
        },
        "riskLevel": "LOW"
      }
    }
  }
  ```

* ### orderRiskAssessmentCreate reference
