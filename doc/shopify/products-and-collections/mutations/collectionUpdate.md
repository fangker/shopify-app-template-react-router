---
title: collectionUpdate - GraphQL Admin
description: >-
  Updates a
  [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection),

  modifying its properties, products, or publication settings. Collections help
  organize

  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  together

  in the [online store](https://shopify.dev/docs/apps/build/online-store) and

  other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).


  Use the `collectionUpdate` mutation to programmatically modify collections in
  scenarios such as:


  - Updating collection details, like title, description, or image

  - Modifying SEO metadata for better search visibility

  - Changing which products are included in a collection by updating its rules,
  sources, or conditions

  - Updating custom data using
  [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)


  Collections can include products manually and can also include products
  automatically based on rules, sources,

  or conditions. When product membership is updated through rules, sources, or
  conditions, the operation might

  be processed asynchronously. In these cases, the mutation returns a

  [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object

  that you can use to track the progress of the update.


  To publish or unpublish collections to specific sales channels, use the
  dedicated

  [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)
  and

  [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish)
  mutations.


  Learn more about [using metafields with collection
  conditions](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# collection​Update

mutation

Requires `write_products` access scope. Also: The app must have access to the input fields used to update the collection. Further, the store must not be on the Starter or Retail plans and user must have a permission to update collection.

Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

* Updating collection details, like title, description, or image
* Modifying SEO metadata for better search visibility
* Changing which products are included in a collection by updating its rules, sources, or conditions
* Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

Collections can include products manually and can also include products automatically based on rules, sources, or conditions. When product membership is updated through rules, sources, or conditions, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

Learn more about [using metafields with collection conditions](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

## Arguments

* collection

  [Collection​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUpdateInput)

  The properties and sources to use when updating the collection.

* input

  [Collection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

  Deprecated

***

## Collection​Update​Payload returns

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The updated collection.

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job updating the products based on the new rule set.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Add an existing source to a collection

  #### Description

  Add an existing shareable source to a collection. Use \`linkedSource\` with a \`sourceId\` when an app has already created a reusable source and wants to link it to another collection.

  #### Query

  ```graphql
  mutation CollectionUpdate($collection: CollectionUpdateInput!) {
    collectionUpdate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
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
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "sourcesToCreate": [
        {
          "linkedSource": {
            "sourceId": "gid://shopify/CollectionConditionsSource/129168209"
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
  "query": "mutation CollectionUpdate($collection: CollectionUpdateInput!) { collectionUpdate(collection: $collection) { collection { id title sources { __typename id title } } userErrors { field message } } }",
   "variables": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "sourcesToCreate": [
          {
            "linkedSource": {
              "sourceId": "gid://shopify/CollectionConditionsSource/129168209"
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
    mutation CollectionUpdate($collection: CollectionUpdateInput!) {
      collectionUpdate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
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
          "collection": {
              "id": "gid://shopify/Collection/142458073",
              "sourcesToCreate": [
                  {
                      "linkedSource": {
                          "sourceId": "gid://shopify/CollectionConditionsSource/129168209"
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
    mutation CollectionUpdate($collection: CollectionUpdateInput!) {
      collectionUpdate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
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
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "sourcesToCreate": [
        {
          "linkedSource": {
            "sourceId": "gid://shopify/CollectionConditionsSource/129168209"
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
      "query": `mutation CollectionUpdate($collection: CollectionUpdateInput!) {
        collectionUpdate(collection: $collection) {
          collection {
            id
            title
            sources {
              __typename
              id
              title
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "collection": {
              "id": "gid://shopify/Collection/142458073",
              "sourcesToCreate": [
                  {
                      "linkedSource": {
                          "sourceId": "gid://shopify/CollectionConditionsSource/129168209"
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
  'mutation CollectionUpdate($collection: CollectionUpdateInput!) {
    collectionUpdate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
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
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "sourcesToCreate": [
        {
          "linkedSource": {
            "sourceId": "gid://shopify/CollectionConditionsSource/129168209"
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
        mutation CollectionUpdate($collection: CollectionUpdateInput!) {
          collectionUpdate(collection: $collection) {
            collection {
              id
              title
              sources {
                __typename
                id
                title
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
          "collection": {
              "id": "gid://shopify/Collection/142458073",
              "sourcesToCreate": [
                  {
                      "linkedSource": {
                          "sourceId": "gid://shopify/CollectionConditionsSource/129168209"
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "All snowboards",
        "sources": [
          {
            "__typename": "CollectionConditionsSource",
            "id": "gid://shopify/CollectionConditionsSource/129168209",
            "title": "Shareable Source Owned By Shopify Web"
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### Apply a rule on a manual collection

  #### Description

  Trying to apply a rule on a manual collection returns an error.

  #### Query

  ```graphql
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
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
      "id": "gid://shopify/Collection/442946009",
      "ruleSet": {
        "rules": [
          {
            "column": "IS_PRICE_REDUCED",
            "relation": "IS_NOT_SET",
            "condition": ""
          }
        ],
        "appliedDisjunctively": true
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
  "query": "mutation updateCollectionRules($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle ruleSet { rules { column relation condition } appliedDisjunctively } } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Collection/442946009",
        "ruleSet": {
          "rules": [
            {
              "column": "IS_PRICE_REDUCED",
              "relation": "IS_NOT_SET",
              "condition": ""
            }
          ],
          "appliedDisjunctively": true
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
    mutation updateCollectionRules($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
          ruleSet {
            rules {
              column
              relation
              condition
            }
            appliedDisjunctively
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
              "id": "gid://shopify/Collection/442946009",
              "ruleSet": {
                  "rules": [
                      {
                          "column": "IS_PRICE_REDUCED",
                          "relation": "IS_NOT_SET",
                          "condition": ""
                      }
                  ],
                  "appliedDisjunctively": true
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
    mutation updateCollectionRules($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
          ruleSet {
            rules {
              column
              relation
              condition
            }
            appliedDisjunctively
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
      "id": "gid://shopify/Collection/442946009",
      "ruleSet": {
        "rules": [
          {
            "column": "IS_PRICE_REDUCED",
            "relation": "IS_NOT_SET",
            "condition": ""
          }
        ],
        "appliedDisjunctively": true
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
      "query": `mutation updateCollectionRules($input: CollectionInput!) {
        collectionUpdate(input: $input) {
          collection {
            id
            title
            description
            handle
            ruleSet {
              rules {
                column
                relation
                condition
              }
              appliedDisjunctively
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
              "id": "gid://shopify/Collection/442946009",
              "ruleSet": {
                  "rules": [
                      {
                          "column": "IS_PRICE_REDUCED",
                          "relation": "IS_NOT_SET",
                          "condition": ""
                      }
                  ],
                  "appliedDisjunctively": true
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
  'mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
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
      "id": "gid://shopify/Collection/442946009",
      "ruleSet": {
        "rules": [
          {
            "column": "IS_PRICE_REDUCED",
            "relation": "IS_NOT_SET",
            "condition": ""
          }
        ],
        "appliedDisjunctively": true
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
        mutation updateCollectionRules($input: CollectionInput!) {
          collectionUpdate(input: $input) {
            collection {
              id
              title
              description
              handle
              ruleSet {
                rules {
                  column
                  relation
                  condition
                }
                appliedDisjunctively
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
              "id": "gid://shopify/Collection/442946009",
              "ruleSet": {
                  "rules": [
                      {
                          "column": "IS_PRICE_REDUCED",
                          "relation": "IS_NOT_SET",
                          "condition": ""
                      }
                  ],
                  "appliedDisjunctively": true
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
    "collectionUpdate": {
      "collection": null,
      "userErrors": [
        {
          "field": [
            "id"
          ],
          "message": "Cannot update rule set of a custom collection"
        }
      ]
    }
  }
  ```

* ### Create a new metafield and update another on an existing collection

  #### Description

  Create a new metafield \`my\_field.subtitle\` and update an existing metafield \`my\_fields.target\_audience\` on a specific collection. Alternatively, refer to the \[metafieldsSet]\(https://shopify.dev/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and/or update metafields on collection resources.

  #### Query

  ```graphql
  mutation updateCollectionMetafields($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "subtitle",
          "type": "single_line_text_field",
          "value": "Bold Colors"
        },
        {
          "id": "gid://shopify/Metafield/1069229037",
          "value": "New Mothers"
        }
      ],
      "id": "gid://shopify/Collection/79210309"
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
  "query": "mutation updateCollectionMetafields($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
   "variables": {
      "input": {
        "metafields": [
          {
            "namespace": "my_field",
            "key": "subtitle",
            "type": "single_line_text_field",
            "value": "Bold Colors"
          },
          {
            "id": "gid://shopify/Metafield/1069229037",
            "value": "New Mothers"
          }
        ],
        "id": "gid://shopify/Collection/79210309"
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
    mutation updateCollectionMetafields($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          metafields(first: 3) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }`,
    {
      variables: {
          "input": {
              "metafields": [
                  {
                      "namespace": "my_field",
                      "key": "subtitle",
                      "type": "single_line_text_field",
                      "value": "Bold Colors"
                  },
                  {
                      "id": "gid://shopify/Metafield/1069229037",
                      "value": "New Mothers"
                  }
              ],
              "id": "gid://shopify/Collection/79210309"
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
    mutation updateCollectionMetafields($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          metafields(first: 3) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
        userErrors {
          message
          field
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "subtitle",
          "type": "single_line_text_field",
          "value": "Bold Colors"
        },
        {
          "id": "gid://shopify/Metafield/1069229037",
          "value": "New Mothers"
        }
      ],
      "id": "gid://shopify/Collection/79210309"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation updateCollectionMetafields($input: CollectionInput!) {
        collectionUpdate(input: $input) {
          collection {
            id
            metafields(first: 3) {
              edges {
                node {
                  id
                  namespace
                  key
                  value
                }
              }
            }
          }
          userErrors {
            message
            field
          }
        }
      }`,
      "variables": {
          "input": {
              "metafields": [
                  {
                      "namespace": "my_field",
                      "key": "subtitle",
                      "type": "single_line_text_field",
                      "value": "Bold Colors"
                  },
                  {
                      "id": "gid://shopify/Metafield/1069229037",
                      "value": "New Mothers"
                  }
              ],
              "id": "gid://shopify/Collection/79210309"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation updateCollectionMetafields($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        metafields(first: 3) {
          edges {
            node {
              id
              namespace
              key
              value
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "metafields": [
        {
          "namespace": "my_field",
          "key": "subtitle",
          "type": "single_line_text_field",
          "value": "Bold Colors"
        },
        {
          "id": "gid://shopify/Metafield/1069229037",
          "value": "New Mothers"
        }
      ],
      "id": "gid://shopify/Collection/79210309"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation updateCollectionMetafields($input: CollectionInput!) {
          collectionUpdate(input: $input) {
            collection {
              id
              metafields(first: 3) {
                edges {
                  node {
                    id
                    namespace
                    key
                    value
                  }
                }
              }
            }
            userErrors {
              message
              field
            }
          }
        }
      `,
      variables: {
          "input": {
              "metafields": [
                  {
                      "namespace": "my_field",
                      "key": "subtitle",
                      "type": "single_line_text_field",
                      "value": "Bold Colors"
                  },
                  {
                      "id": "gid://shopify/Metafield/1069229037",
                      "value": "New Mothers"
                  }
              ],
              "id": "gid://shopify/Collection/79210309"
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/79210309",
        "metafields": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/Metafield/1069229037",
                "namespace": "my_fields",
                "key": "target_audience",
                "value": "New Mothers"
              }
            },
            {
              "node": {
                "id": "gid://shopify/Metafield/1069229038",
                "namespace": "my_field",
                "key": "subtitle",
                "value": "Bold Colors"
              }
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Delete the collection's image

  #### Query

  ```graphql
  mutation deleteCollectionImage {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
      collection {
        id
        title
        image {
          src
          altText
        }
      }
      userErrors {
        field
        message
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
  "query": "mutation deleteCollectionImage { collectionUpdate(input: {id: \"gid://shopify/Collection/142458073\", image: null}) { collection { id title image { src altText } } userErrors { field message } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation deleteCollectionImage {
      collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
        collection {
          id
          title
          image {
            src
            altText
          }
        }
        userErrors {
          field
          message
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
    mutation deleteCollectionImage {
      collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
        collection {
          id
          title
          image {
            src
            altText
          }
        }
        userErrors {
          field
          message
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
    data: `mutation deleteCollectionImage {
      collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
        collection {
          id
          title
          image {
            src
            altText
          }
        }
        userErrors {
          field
          message
        }
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation deleteCollectionImage {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
      collection {
        id
        title
        image {
          src
          altText
        }
      }
      userErrors {
        field
        message
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
        mutation deleteCollectionImage {
          collectionUpdate(input: {id: "gid://shopify/Collection/142458073", image: null}) {
            collection {
              id
              title
              image {
                src
                altText
              }
            }
            userErrors {
              field
              message
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "All snowboards",
        "image": null
      },
      "userErrors": []
    }
  }
  ```

* ### Remove a source from a collection

  #### Description

  Remove a source from a collection by passing the source ID to \`sourcesToDelete\`.

  #### Query

  ```graphql
  mutation CollectionUpdate($collection: CollectionUpdateInput!) {
    collectionUpdate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
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
    "collection": {
      "id": "gid://shopify/Collection/247865063",
      "sourcesToDelete": [
        "gid://shopify/CollectionConditionsSource/562928290"
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
  "query": "mutation CollectionUpdate($collection: CollectionUpdateInput!) { collectionUpdate(collection: $collection) { collection { id title sources { __typename id title } } userErrors { field message } } }",
   "variables": {
      "collection": {
        "id": "gid://shopify/Collection/247865063",
        "sourcesToDelete": [
          "gid://shopify/CollectionConditionsSource/562928290"
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
    mutation CollectionUpdate($collection: CollectionUpdateInput!) {
      collectionUpdate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
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
          "collection": {
              "id": "gid://shopify/Collection/247865063",
              "sourcesToDelete": [
                  "gid://shopify/CollectionConditionsSource/562928290"
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
    mutation CollectionUpdate($collection: CollectionUpdateInput!) {
      collectionUpdate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
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
    "collection": {
      "id": "gid://shopify/Collection/247865063",
      "sourcesToDelete": [
        "gid://shopify/CollectionConditionsSource/562928290"
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
      "query": `mutation CollectionUpdate($collection: CollectionUpdateInput!) {
        collectionUpdate(collection: $collection) {
          collection {
            id
            title
            sources {
              __typename
              id
              title
            }
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "collection": {
              "id": "gid://shopify/Collection/247865063",
              "sourcesToDelete": [
                  "gid://shopify/CollectionConditionsSource/562928290"
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
  'mutation CollectionUpdate($collection: CollectionUpdateInput!) {
    collectionUpdate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
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
    "collection": {
      "id": "gid://shopify/Collection/247865063",
      "sourcesToDelete": [
        "gid://shopify/CollectionConditionsSource/562928290"
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
        mutation CollectionUpdate($collection: CollectionUpdateInput!) {
          collectionUpdate(collection: $collection) {
            collection {
              id
              title
              sources {
                __typename
                id
                title
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
          "collection": {
              "id": "gid://shopify/Collection/247865063",
              "sourcesToDelete": [
                  "gid://shopify/CollectionConditionsSource/562928290"
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/247865063",
        "title": "Collection Snowboards",
        "sources": []
      },
      "userErrors": []
    }
  }
  ```

* ### Update a collection and add a source

  #### Description

  Update collection details and add a source that determines which products are included. This example demonstrates how to update collection metadata, SEO fields, metafields, an image, and source-based membership in a single mutation.

  #### Query

  ```graphql
  mutation CollectionUpdate($collection: CollectionUpdateInput!) {
    collectionUpdate(collection: $collection) {
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        templateSuffix
        image {
          url
          altText
        }
        seo {
          title
          description
        }
        metafields(first: 10) {
          nodes {
            namespace
            key
            value
          }
        }
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
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
                  variantIds
                }
              }
            }
          }
        }
      }
      job {
        id
        done
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
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated spring styles",
      "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
      "handle": "updated-spring-styles",
      "redirectNewHandle": true,
      "templateSuffix": "spring",
      "sortOrder": "MANUAL",
      "image": {
        "src": "tmp/26371970/collections/f478bbc6-31d8-43fd-bada-cc802a8192e7/test_file.txt",
        "altText": "Updated spring collection image"
      },
      "seo": {
        "title": "Updated spring styles collection",
        "description": "Browse updated spring products."
      },
      "metafields": [
        {
          "namespace": "custom",
          "key": "updated_season",
          "type": "single_line_text_field",
          "value": "spring"
        }
      ],
      "sourcesToCreate": [
        {
          "source": {
            "title": "Updated source",
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
  "query": "mutation CollectionUpdate($collection: CollectionUpdateInput!) { collectionUpdate(collection: $collection) { collection { id title descriptionHtml handle sortOrder templateSuffix image { url altText } seo { title description } metafields(first: 10) { nodes { namespace key value } } sources { __typename id title ... on CollectionConditionsSource { inclusion { matchType conditions { __typename id ... on CollectionSourceInclusionConditionProductTag { relation values matchType } } selections(first: 10) { nodes { product { id title } variantIds } } } } } } job { id done } userErrors { field message } } }",
   "variables": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "Updated spring styles",
        "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
        "handle": "updated-spring-styles",
        "redirectNewHandle": true,
        "templateSuffix": "spring",
        "sortOrder": "MANUAL",
        "image": {
          "src": "tmp/26371970/collections/f478bbc6-31d8-43fd-bada-cc802a8192e7/test_file.txt",
          "altText": "Updated spring collection image"
        },
        "seo": {
          "title": "Updated spring styles collection",
          "description": "Browse updated spring products."
        },
        "metafields": [
          {
            "namespace": "custom",
            "key": "updated_season",
            "type": "single_line_text_field",
            "value": "spring"
          }
        ],
        "sourcesToCreate": [
          {
            "source": {
              "title": "Updated source",
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
    mutation CollectionUpdate($collection: CollectionUpdateInput!) {
      collectionUpdate(collection: $collection) {
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          templateSuffix
          image {
            url
            altText
          }
          seo {
            title
            description
          }
          metafields(first: 10) {
            nodes {
              namespace
              key
              value
            }
          }
          sources {
            __typename
            id
            title
            ... on CollectionConditionsSource {
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
                    variantIds
                  }
                }
              }
            }
          }
        }
        job {
          id
          done
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "collection": {
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated spring styles",
              "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
              "handle": "updated-spring-styles",
              "redirectNewHandle": true,
              "templateSuffix": "spring",
              "sortOrder": "MANUAL",
              "image": {
                  "src": "tmp/26371970/collections/f478bbc6-31d8-43fd-bada-cc802a8192e7/test_file.txt",
                  "altText": "Updated spring collection image"
              },
              "seo": {
                  "title": "Updated spring styles collection",
                  "description": "Browse updated spring products."
              },
              "metafields": [
                  {
                      "namespace": "custom",
                      "key": "updated_season",
                      "type": "single_line_text_field",
                      "value": "spring"
                  }
              ],
              "sourcesToCreate": [
                  {
                      "source": {
                          "title": "Updated source",
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
    mutation CollectionUpdate($collection: CollectionUpdateInput!) {
      collectionUpdate(collection: $collection) {
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          templateSuffix
          image {
            url
            altText
          }
          seo {
            title
            description
          }
          metafields(first: 10) {
            nodes {
              namespace
              key
              value
            }
          }
          sources {
            __typename
            id
            title
            ... on CollectionConditionsSource {
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
                    variantIds
                  }
                }
              }
            }
          }
        }
        job {
          id
          done
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated spring styles",
      "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
      "handle": "updated-spring-styles",
      "redirectNewHandle": true,
      "templateSuffix": "spring",
      "sortOrder": "MANUAL",
      "image": {
        "src": "tmp/26371970/collections/f478bbc6-31d8-43fd-bada-cc802a8192e7/test_file.txt",
        "altText": "Updated spring collection image"
      },
      "seo": {
        "title": "Updated spring styles collection",
        "description": "Browse updated spring products."
      },
      "metafields": [
        {
          "namespace": "custom",
          "key": "updated_season",
          "type": "single_line_text_field",
          "value": "spring"
        }
      ],
      "sourcesToCreate": [
        {
          "source": {
            "title": "Updated source",
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
      "query": `mutation CollectionUpdate($collection: CollectionUpdateInput!) {
        collectionUpdate(collection: $collection) {
          collection {
            id
            title
            descriptionHtml
            handle
            sortOrder
            templateSuffix
            image {
              url
              altText
            }
            seo {
              title
              description
            }
            metafields(first: 10) {
              nodes {
                namespace
                key
                value
              }
            }
            sources {
              __typename
              id
              title
              ... on CollectionConditionsSource {
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
                      variantIds
                    }
                  }
                }
              }
            }
          }
          job {
            id
            done
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "collection": {
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated spring styles",
              "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
              "handle": "updated-spring-styles",
              "redirectNewHandle": true,
              "templateSuffix": "spring",
              "sortOrder": "MANUAL",
              "image": {
                  "src": "tmp/26371970/collections/f478bbc6-31d8-43fd-bada-cc802a8192e7/test_file.txt",
                  "altText": "Updated spring collection image"
              },
              "seo": {
                  "title": "Updated spring styles collection",
                  "description": "Browse updated spring products."
              },
              "metafields": [
                  {
                      "namespace": "custom",
                      "key": "updated_season",
                      "type": "single_line_text_field",
                      "value": "spring"
                  }
              ],
              "sourcesToCreate": [
                  {
                      "source": {
                          "title": "Updated source",
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
  'mutation CollectionUpdate($collection: CollectionUpdateInput!) {
    collectionUpdate(collection: $collection) {
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        templateSuffix
        image {
          url
          altText
        }
        seo {
          title
          description
        }
        metafields(first: 10) {
          nodes {
            namespace
            key
            value
          }
        }
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
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
                  variantIds
                }
              }
            }
          }
        }
      }
      job {
        id
        done
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "collection": {
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated spring styles",
      "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
      "handle": "updated-spring-styles",
      "redirectNewHandle": true,
      "templateSuffix": "spring",
      "sortOrder": "MANUAL",
      "image": {
        "src": "tmp/26371970/collections/f478bbc6-31d8-43fd-bada-cc802a8192e7/test_file.txt",
        "altText": "Updated spring collection image"
      },
      "seo": {
        "title": "Updated spring styles collection",
        "description": "Browse updated spring products."
      },
      "metafields": [
        {
          "namespace": "custom",
          "key": "updated_season",
          "type": "single_line_text_field",
          "value": "spring"
        }
      ],
      "sourcesToCreate": [
        {
          "source": {
            "title": "Updated source",
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
        mutation CollectionUpdate($collection: CollectionUpdateInput!) {
          collectionUpdate(collection: $collection) {
            collection {
              id
              title
              descriptionHtml
              handle
              sortOrder
              templateSuffix
              image {
                url
                altText
              }
              seo {
                title
                description
              }
              metafields(first: 10) {
                nodes {
                  namespace
                  key
                  value
                }
              }
              sources {
                __typename
                id
                title
                ... on CollectionConditionsSource {
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
                        variantIds
                      }
                    }
                  }
                }
              }
            }
            job {
              id
              done
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "collection": {
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated spring styles",
              "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
              "handle": "updated-spring-styles",
              "redirectNewHandle": true,
              "templateSuffix": "spring",
              "sortOrder": "MANUAL",
              "image": {
                  "src": "tmp/26371970/collections/f478bbc6-31d8-43fd-bada-cc802a8192e7/test_file.txt",
                  "altText": "Updated spring collection image"
              },
              "seo": {
                  "title": "Updated spring styles collection",
                  "description": "Browse updated spring products."
              },
              "metafields": [
                  {
                      "namespace": "custom",
                      "key": "updated_season",
                      "type": "single_line_text_field",
                      "value": "spring"
                  }
              ],
              "sourcesToCreate": [
                  {
                      "source": {
                          "title": "Updated source",
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "Updated spring styles",
        "descriptionHtml": "Updated products for the <strong>spring</strong> season.",
        "handle": "updated-spring-styles",
        "sortOrder": "MANUAL",
        "templateSuffix": "spring",
        "image": {
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/collections/test_file.jpg?v=1781273020",
          "altText": "Updated spring collection image"
        },
        "seo": {
          "title": "Updated spring styles collection",
          "description": "Browse updated spring products."
        },
        "metafields": {
          "nodes": [
            {
              "namespace": "notes",
              "key": "descriptionription",
              "value": "Collection descriptionription"
            },
            {
              "namespace": "definition",
              "key": "some_list",
              "value": "[\"valid value 0\",\"valid value 1\",\"valid value 2\"]"
            },
            {
              "namespace": "definition",
              "key": "some_integer",
              "value": "5"
            },
            {
              "namespace": "global",
              "key": "title_tag",
              "value": "Updated spring styles collection"
            },
            {
              "namespace": "global",
              "key": "description_tag",
              "value": "Browse updated spring products."
            },
            {
              "namespace": "custom",
              "key": "updated_season",
              "value": "spring"
            }
          ]
        },
        "sources": [
          {
            "__typename": "CollectionConditionsSource",
            "id": "gid://shopify/CollectionConditionsSource/1047893300",
            "title": "Updated source",
            "inclusion": {
              "matchType": "ALL",
              "conditions": [
                {
                  "__typename": "CollectionSourceInclusionConditionProductTag",
                  "id": "gid://shopify/CollectionSourceInclusionConditionProductTag/977278334",
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
                    },
                    "variantIds": null
                  }
                ]
              }
            }
          }
        ]
      },
      "job": null,
      "userErrors": []
    }
  }
  ```

* ### Update the collection's handle

  #### Query

  ```graphql
  mutation updateCollectionHandle {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
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
  "query": "mutation updateCollectionHandle { collectionUpdate(input: {id: \"gid://shopify/Collection/142458073\", handle: \"my-most-popular-collection\"}) { collection { id title description handle } userErrors { field message } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation updateCollectionHandle {
      collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
        collection {
          id
          title
          description
          handle
        }
        userErrors {
          field
          message
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
    mutation updateCollectionHandle {
      collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
        collection {
          id
          title
          description
          handle
        }
        userErrors {
          field
          message
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
    data: `mutation updateCollectionHandle {
      collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
        collection {
          id
          title
          description
          handle
        }
        userErrors {
          field
          message
        }
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation updateCollectionHandle {
    collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
      collection {
        id
        title
        description
        handle
      }
      userErrors {
        field
        message
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
        mutation updateCollectionHandle {
          collectionUpdate(input: {id: "gid://shopify/Collection/142458073", handle: "my-most-popular-collection"}) {
            collection {
              id
              title
              description
              handle
            }
            userErrors {
              field
              message
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "All snowboards",
        "description": "",
        "handle": "my-most-popular-collection"
      },
      "userErrors": []
    }
  }
  ```

* ### Update the collection's rule set

  #### Description

  If a collection with the specified ID doesn't exist, then the mutation returns an error.

  #### Query

  ```graphql
  mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      job {
        id
        done
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
      "id": "gid://shopify/Collection/142458073",
      "ruleSet": {
        "rules": [
          {
            "column": "VARIANT_PRICE",
            "relation": "LESS_THAN",
            "condition": "200"
          },
          {
            "column": "TAG",
            "relation": "EQUALS",
            "condition": "board"
          }
        ],
        "appliedDisjunctively": true
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
  "query": "mutation updateCollectionRules($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle ruleSet { rules { column relation condition } appliedDisjunctively } } job { id done } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Collection/142458073",
        "ruleSet": {
          "rules": [
            {
              "column": "VARIANT_PRICE",
              "relation": "LESS_THAN",
              "condition": "200"
            },
            {
              "column": "TAG",
              "relation": "EQUALS",
              "condition": "board"
            }
          ],
          "appliedDisjunctively": true
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
    mutation updateCollectionRules($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
          ruleSet {
            rules {
              column
              relation
              condition
            }
            appliedDisjunctively
          }
        }
        job {
          id
          done
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
              "id": "gid://shopify/Collection/142458073",
              "ruleSet": {
                  "rules": [
                      {
                          "column": "VARIANT_PRICE",
                          "relation": "LESS_THAN",
                          "condition": "200"
                      },
                      {
                          "column": "TAG",
                          "relation": "EQUALS",
                          "condition": "board"
                      }
                  ],
                  "appliedDisjunctively": true
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
    mutation updateCollectionRules($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
          ruleSet {
            rules {
              column
              relation
              condition
            }
            appliedDisjunctively
          }
        }
        job {
          id
          done
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
      "id": "gid://shopify/Collection/142458073",
      "ruleSet": {
        "rules": [
          {
            "column": "VARIANT_PRICE",
            "relation": "LESS_THAN",
            "condition": "200"
          },
          {
            "column": "TAG",
            "relation": "EQUALS",
            "condition": "board"
          }
        ],
        "appliedDisjunctively": true
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
      "query": `mutation updateCollectionRules($input: CollectionInput!) {
        collectionUpdate(input: $input) {
          collection {
            id
            title
            description
            handle
            ruleSet {
              rules {
                column
                relation
                condition
              }
              appliedDisjunctively
            }
          }
          job {
            id
            done
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/Collection/142458073",
              "ruleSet": {
                  "rules": [
                      {
                          "column": "VARIANT_PRICE",
                          "relation": "LESS_THAN",
                          "condition": "200"
                      },
                      {
                          "column": "TAG",
                          "relation": "EQUALS",
                          "condition": "board"
                      }
                  ],
                  "appliedDisjunctively": true
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
  'mutation updateCollectionRules($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
        ruleSet {
          rules {
            column
            relation
            condition
          }
          appliedDisjunctively
        }
      }
      job {
        id
        done
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
      "id": "gid://shopify/Collection/142458073",
      "ruleSet": {
        "rules": [
          {
            "column": "VARIANT_PRICE",
            "relation": "LESS_THAN",
            "condition": "200"
          },
          {
            "column": "TAG",
            "relation": "EQUALS",
            "condition": "board"
          }
        ],
        "appliedDisjunctively": true
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
        mutation updateCollectionRules($input: CollectionInput!) {
          collectionUpdate(input: $input) {
            collection {
              id
              title
              description
              handle
              ruleSet {
                rules {
                  column
                  relation
                  condition
                }
                appliedDisjunctively
              }
            }
            job {
              id
              done
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
              "id": "gid://shopify/Collection/142458073",
              "ruleSet": {
                  "rules": [
                      {
                          "column": "VARIANT_PRICE",
                          "relation": "LESS_THAN",
                          "condition": "200"
                      },
                      {
                          "column": "TAG",
                          "relation": "EQUALS",
                          "condition": "board"
                      }
                  ],
                  "appliedDisjunctively": true
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "All snowboards",
        "description": "",
        "handle": "snowboards",
        "ruleSet": {
          "rules": [
            {
              "column": "VARIANT_PRICE",
              "relation": "LESS_THAN",
              "condition": "200"
            },
            {
              "column": "TAG",
              "relation": "EQUALS",
              "condition": "board"
            }
          ],
          "appliedDisjunctively": true
        }
      },
      "job": {
        "id": "gid://shopify/Job/b10b434b-02be-4d75-b176-3c7b15d60d22",
        "done": false
      },
      "userErrors": []
    }
  }
  ```

* ### Updates an existing custom collection

  #### Query

  ```graphql
  mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
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
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Collection Title",
      "handle": "updated-collection-handle"
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
  "query": "mutation CollectionUpdate($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Collection/142458073",
        "title": "Updated Collection Title",
        "handle": "updated-collection-handle"
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
    mutation CollectionUpdate($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
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
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated Collection Title",
              "handle": "updated-collection-handle"
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
    mutation CollectionUpdate($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
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
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Collection Title",
      "handle": "updated-collection-handle"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CollectionUpdate($input: CollectionInput!) {
        collectionUpdate(input: $input) {
          collection {
            id
            title
            description
            handle
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated Collection Title",
              "handle": "updated-collection-handle"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
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
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Collection Title",
      "handle": "updated-collection-handle"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation CollectionUpdate($input: CollectionInput!) {
          collectionUpdate(input: $input) {
            collection {
              id
              title
              description
              handle
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
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated Collection Title",
              "handle": "updated-collection-handle"
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "Updated Collection Title",
        "description": "",
        "handle": "updated-collection-handle"
      },
      "userErrors": []
    }
  }
  ```

* ### Updates an existing smart collection

  #### Query

  ```graphql
  mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
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
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Smart Collection",
      "handle": "updated-smart-collection"
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
  "query": "mutation CollectionUpdate($input: CollectionInput!) { collectionUpdate(input: $input) { collection { id title description handle } userErrors { field message } } }",
   "variables": {
      "input": {
        "id": "gid://shopify/Collection/142458073",
        "title": "Updated Smart Collection",
        "handle": "updated-smart-collection"
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
    mutation CollectionUpdate($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
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
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated Smart Collection",
              "handle": "updated-smart-collection"
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
    mutation CollectionUpdate($input: CollectionInput!) {
      collectionUpdate(input: $input) {
        collection {
          id
          title
          description
          handle
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
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Smart Collection",
      "handle": "updated-smart-collection"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CollectionUpdate($input: CollectionInput!) {
        collectionUpdate(input: $input) {
          collection {
            id
            title
            description
            handle
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "input": {
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated Smart Collection",
              "handle": "updated-smart-collection"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation CollectionUpdate($input: CollectionInput!) {
    collectionUpdate(input: $input) {
      collection {
        id
        title
        description
        handle
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
      "id": "gid://shopify/Collection/142458073",
      "title": "Updated Smart Collection",
      "handle": "updated-smart-collection"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation CollectionUpdate($input: CollectionInput!) {
          collectionUpdate(input: $input) {
            collection {
              id
              title
              description
              handle
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
              "id": "gid://shopify/Collection/142458073",
              "title": "Updated Smart Collection",
              "handle": "updated-smart-collection"
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
    "collectionUpdate": {
      "collection": {
        "id": "gid://shopify/Collection/142458073",
        "title": "Updated Smart Collection",
        "description": "",
        "handle": "updated-smart-collection"
      },
      "userErrors": []
    }
  }
  ```

* ### collectionUpdate reference
