---
title: discountRedeemCodeBulkCreation - GraphQL Admin
description: Returns a `DiscountRedeemCodeBulkCreation` resource by ID.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeBulkCreation.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# discount​Redeem​Code​Bulk​Creation

query

Returns a `DiscountRedeemCodeBulkCreation` resource by ID.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the `DiscountRedeemCodeBulkCreation` to return.

***

## Possible returns

* Discount​Redeem​Code​Bulk​Creation

  [Discount​Redeem​Code​Bulk​Creation](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation)

  The properties and status of a bulk discount redeem code creation operation.

  * codes

    [Discount​Redeem​Code​Bulk​Creation​Code​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection)

    non-null

    The result of each code creation operation associated with the bulk creation operation including any errors that might have occurred during the operation.

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

  * codes​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of codes to create.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    The date and time when the bulk creation was created.

  * discount​Code

    [Discount​Code​Node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

    The code discount associated with the created codes.

  * done

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the bulk creation is still queued (`false`) or has been run (`true`).

  * failed​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of codes that weren't created successfully.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * imported​Count

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    non-null

    The number of codes created successfully.

***

## Examples

* ### Retrieves a discount code creation job

  #### Query

  ```graphql
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query DiscountRedeemCodeBulkShow($id: ID!) { discountRedeemCodeBulkCreation(id: $id) { id createdAt discountCode { id } done codesCount importedCount failedCount } }",
   "variables": {
      "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
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
    query DiscountRedeemCodeBulkShow($id: ID!) {
      discountRedeemCodeBulkCreation(id: $id) {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
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
    query DiscountRedeemCodeBulkShow($id: ID!) {
      discountRedeemCodeBulkCreation(id: $id) {
        id
        createdAt
        discountCode {
          id
        }
        done
        codesCount
        importedCount
        failedCount
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query DiscountRedeemCodeBulkShow($id: ID!) {
        discountRedeemCodeBulkCreation(id: $id) {
          id
          createdAt
          discountCode {
            id
          }
          done
          codesCount
          importedCount
          failedCount
        }
      }`,
      "variables": {
          "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      done
      codesCount
      importedCount
      failedCount
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query DiscountRedeemCodeBulkShow($id: ID!) {
          discountRedeemCodeBulkCreation(id: $id) {
            id
            createdAt
            discountCode {
              id
            }
            done
            codesCount
            importedCount
            failedCount
          }
        }
      `,
      variables: {
          "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "discountRedeemCodeBulkCreation": {
      "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355202",
      "createdAt": "2024-11-06T21:07:10Z",
      "discountCode": {
        "id": "gid://shopify/DiscountCodeNode/2429471"
      },
      "done": true,
      "codesCount": 2,
      "importedCount": 2,
      "failedCount": 1
    }
  }
  ```

* ### Retrieves a list of discount codes for a discount code creation job

  #### Query

  ```graphql
  query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      codes(first: 10) {
        nodes {
          discountRedeemCode {
            code
          }
          errors {
            message
            field
            extraInfo
            code
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-07/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "query DiscountRedeemCodeBulkShow($id: ID!) { discountRedeemCodeBulkCreation(id: $id) { id createdAt discountCode { id } codes(first: 10) { nodes { discountRedeemCode { code } errors { message field extraInfo code } } } } }",
   "variables": {
      "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
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
    query DiscountRedeemCodeBulkShow($id: ID!) {
      discountRedeemCodeBulkCreation(id: $id) {
        id
        createdAt
        discountCode {
          id
        }
        codes(first: 10) {
          nodes {
            discountRedeemCode {
              code
            }
            errors {
              message
              field
              extraInfo
              code
            }
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
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
    query DiscountRedeemCodeBulkShow($id: ID!) {
      discountRedeemCodeBulkCreation(id: $id) {
        id
        createdAt
        discountCode {
          id
        }
        codes(first: 10) {
          nodes {
            discountRedeemCode {
              code
            }
            errors {
              message
              field
              extraInfo
              code
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `query DiscountRedeemCodeBulkShow($id: ID!) {
        discountRedeemCodeBulkCreation(id: $id) {
          id
          createdAt
          discountCode {
            id
          }
          codes(first: 10) {
            nodes {
              discountRedeemCode {
                code
              }
              errors {
                message
                field
                extraInfo
                code
              }
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query DiscountRedeemCodeBulkShow($id: ID!) {
    discountRedeemCodeBulkCreation(id: $id) {
      id
      createdAt
      discountCode {
        id
      }
      codes(first: 10) {
        nodes {
          discountRedeemCode {
            code
          }
          errors {
            message
            field
            extraInfo
            code
          }
        }
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query DiscountRedeemCodeBulkShow($id: ID!) {
          discountRedeemCodeBulkCreation(id: $id) {
            id
            createdAt
            discountCode {
              id
            }
            codes(first: 10) {
              nodes {
                discountRedeemCode {
                  code
                }
                errors {
                  message
                  field
                  extraInfo
                  code
                }
              }
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205"
      },
    }),
  });

  const { data } = await response.json();
  console.log(data);
  ```

  #### Response

  ```json
  {
    "discountRedeemCodeBulkCreation": {
      "id": "gid://shopify/DiscountRedeemCodeBulkCreation/989355205",
      "createdAt": "2024-11-06T21:07:11Z",
      "discountCode": {
        "id": "gid://shopify/DiscountCodeNode/2429471"
      },
      "codes": {
        "nodes": [
          {
            "discountRedeemCode": {
              "code": "FOOBAR"
            },
            "errors": []
          },
          {
            "discountRedeemCode": {
              "code": "FOOBAZ"
            },
            "errors": []
          },
          {
            "discountRedeemCode": null,
            "errors": [
              {
                "message": "must be unique. Please try a different code.",
                "field": [
                  "code"
                ],
                "extraInfo": null,
                "code": null
              }
            ]
          }
        ]
      }
    }
  }
  ```
