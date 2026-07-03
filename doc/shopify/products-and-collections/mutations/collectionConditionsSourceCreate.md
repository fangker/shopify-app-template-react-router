---
title: collectionConditionsSourceCreate - GraphQL Admin
description: >-
  Creates a shareable collection source that can later be linked to one or more
  collections.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionConditionsSourceCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# collection​Conditions​Source​Create

mutation

Requires `write_products` access scope. Also: The app must have access to the input fields used to create a collection source. Further, the store must not be on the Starter or Retail plans and the user must have permission to manage products.

Creates a shareable collection source that can later be linked to one or more collections.

## Arguments

* input

  [Collection​Create​Conditions​Source​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionCreateConditionsSourceInput)

  required

  The input fields for the source to create.

***

## Collection​Conditions​Source​Create​Payload returns

* source

  [Collection​Conditions​Source](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionConditionsSource)

  The created collection source.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a shareable collection source

  #### Description

  Create a shareable collection source that can later be linked to one or more collections. This example creates a source that includes products matching a tag and explicitly selects one product.

  #### Query

  ```graphql
  mutation CollectionConditionsSourceCreate($input: CollectionCreateConditionsSourceInput!) {
    collectionConditionsSourceCreate(input: $input) {
      source {
        id
        title
        description
        shareable
        targetType
        inclusion {
          matchType
          conditions {
            __typename
            id
            ... on CollectionSourceInclusionConditionProductTag {
              relation
              values
              matchType
            }
          }
          selections(first: 10) {
            nodes {
              product {
                id
                title
              }
            }
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
      "title": "Spring source",
      "description": "Products to include in spring collections.",
      "inclusion": {
        "matchType": "ALL",
        "conditions": [
          {
            "productTag": {
              "relation": "TAGGED_WITH",
              "values": [
                "spring"
              ],
              "matchType": "ANY"
            }
          }
        ],
        "selections": [
          {
            "productId": "gid://shopify/Product/20995642"
          }
        ]
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
  "query": "mutation CollectionConditionsSourceCreate($input: CollectionCreateConditionsSourceInput!) { collectionConditionsSourceCreate(input: $input) { source { id title description shareable targetType inclusion { matchType conditions { __typename id ... on CollectionSourceInclusionConditionProductTag { relation values matchType } } selections(first: 10) { nodes { product { id title } } } } } userErrors { field message } } }",
   "variables": {
      "input": {
        "title": "Spring source",
        "description": "Products to include in spring collections.",
        "inclusion": {
          "matchType": "ALL",
          "conditions": [
            {
              "productTag": {
                "relation": "TAGGED_WITH",
                "values": [
                  "spring"
                ],
                "matchType": "ANY"
              }
            }
          ],
          "selections": [
            {
              "productId": "gid://shopify/Product/20995642"
            }
          ]
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
    mutation CollectionConditionsSourceCreate($input: CollectionCreateConditionsSourceInput!) {
      collectionConditionsSourceCreate(input: $input) {
        source {
          id
          title
          description
          shareable
          targetType
          inclusion {
            matchType
            conditions {
              __typename
              id
              ... on CollectionSourceInclusionConditionProductTag {
                relation
                values
                matchType
              }
            }
            selections(first: 10) {
              nodes {
                product {
                  id
                  title
                }
              }
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
              "title": "Spring source",
              "description": "Products to include in spring collections.",
              "inclusion": {
                  "matchType": "ALL",
                  "conditions": [
                      {
                          "productTag": {
                              "relation": "TAGGED_WITH",
                              "values": [
                                  "spring"
                              ],
                              "matchType": "ANY"
                          }
                      }
                  ],
                  "selections": [
                      {
                          "productId": "gid://shopify/Product/20995642"
                      }
                  ]
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
    mutation CollectionConditionsSourceCreate($input: CollectionCreateConditionsSourceInput!) {
      collectionConditionsSourceCreate(input: $input) {
        source {
          id
          title
          description
          shareable
          targetType
          inclusion {
            matchType
            conditions {
              __typename
              id
              ... on CollectionSourceInclusionConditionProductTag {
                relation
                values
                matchType
              }
            }
            selections(first: 10) {
              nodes {
                product {
                  id
                  title
                }
              }
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
      "title": "Spring source",
      "description": "Products to include in spring collections.",
      "inclusion": {
        "matchType": "ALL",
        "conditions": [
          {
            "productTag": {
              "relation": "TAGGED_WITH",
              "values": [
                "spring"
              ],
              "matchType": "ANY"
            }
          }
        ],
        "selections": [
          {
            "productId": "gid://shopify/Product/20995642"
          }
        ]
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
      "query": `mutation CollectionConditionsSourceCreate($input: CollectionCreateConditionsSourceInput!) {
        collectionConditionsSourceCreate(input: $input) {
          source {
            id
            title
            description
            shareable
            targetType
            inclusion {
              matchType
              conditions {
                __typename
                id
                ... on CollectionSourceInclusionConditionProductTag {
                  relation
                  values
                  matchType
                }
              }
              selections(first: 10) {
                nodes {
                  product {
                    id
                    title
                  }
                }
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
              "title": "Spring source",
              "description": "Products to include in spring collections.",
              "inclusion": {
                  "matchType": "ALL",
                  "conditions": [
                      {
                          "productTag": {
                              "relation": "TAGGED_WITH",
                              "values": [
                                  "spring"
                              ],
                              "matchType": "ANY"
                          }
                      }
                  ],
                  "selections": [
                      {
                          "productId": "gid://shopify/Product/20995642"
                      }
                  ]
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
  'mutation CollectionConditionsSourceCreate($input: CollectionCreateConditionsSourceInput!) {
    collectionConditionsSourceCreate(input: $input) {
      source {
        id
        title
        description
        shareable
        targetType
        inclusion {
          matchType
          conditions {
            __typename
            id
            ... on CollectionSourceInclusionConditionProductTag {
              relation
              values
              matchType
            }
          }
          selections(first: 10) {
            nodes {
              product {
                id
                title
              }
            }
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
      "title": "Spring source",
      "description": "Products to include in spring collections.",
      "inclusion": {
        "matchType": "ALL",
        "conditions": [
          {
            "productTag": {
              "relation": "TAGGED_WITH",
              "values": [
                "spring"
              ],
              "matchType": "ANY"
            }
          }
        ],
        "selections": [
          {
            "productId": "gid://shopify/Product/20995642"
          }
        ]
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
        mutation CollectionConditionsSourceCreate($input: CollectionCreateConditionsSourceInput!) {
          collectionConditionsSourceCreate(input: $input) {
            source {
              id
              title
              description
              shareable
              targetType
              inclusion {
                matchType
                conditions {
                  __typename
                  id
                  ... on CollectionSourceInclusionConditionProductTag {
                    relation
                    values
                    matchType
                  }
                }
                selections(first: 10) {
                  nodes {
                    product {
                      id
                      title
                    }
                  }
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
              "title": "Spring source",
              "description": "Products to include in spring collections.",
              "inclusion": {
                  "matchType": "ALL",
                  "conditions": [
                      {
                          "productTag": {
                              "relation": "TAGGED_WITH",
                              "values": [
                                  "spring"
                              ],
                              "matchType": "ANY"
                          }
                      }
                  ],
                  "selections": [
                      {
                          "productId": "gid://shopify/Product/20995642"
                      }
                  ]
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
    "collectionConditionsSourceCreate": {
      "source": {
        "id": "gid://shopify/CollectionConditionsSource/1047893255",
        "title": "Spring source",
        "description": "Products to include in spring collections.",
        "shareable": true,
        "targetType": "PRODUCTS",
        "inclusion": {
          "matchType": "ALL",
          "conditions": [
            {
              "__typename": "CollectionSourceInclusionConditionProductTag",
              "id": "gid://shopify/CollectionSourceInclusionConditionProductTag/977278301",
              "relation": "TAGGED_WITH",
              "values": [
                "spring"
              ],
              "matchType": "ANY"
            }
          ],
          "selections": {
            "nodes": [
              {
                "product": {
                  "id": "gid://shopify/Product/20995642",
                  "title": "Element"
                }
              }
            ]
          }
        }
      },
      "userErrors": []
    }
  }
  ```

* ### collectionConditionsSourceCreate reference
