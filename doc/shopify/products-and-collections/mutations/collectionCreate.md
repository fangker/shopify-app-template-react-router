---
title: collectionCreate - GraphQL Admin
description: >-
  Creates a
  [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  to group
  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  together

  in the [online store](https://shopify.dev/docs/apps/build/online-store) and

  other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

  For example, an athletics store might create different collections for running
  attire, shoes, and accessories.


  Use the `collectionCreate` mutation when you need to:


  - Create a new collection for a product launch or campaign

  - Organize products by category, season, or promotion

  - Automate product grouping using conditions (for example, by tag, type, or
  price)


  Collections can include products manually and can also include products
  automatically based on rules, sources,

  or conditions.


  **Defining a collection's membership**


  Define membership with `sources` on the `collection` argument

  ([`CollectionCreateInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionCreateInput)).

  Each source adds products through `conditions` (such as product tag, title, or
  metafield—see

  [`CollectionSourceInclusionConditionInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionSourceInclusionConditionInput)

  for the full list) and through manual `selections`.


  > Note:

  > The `input` argument and its `ruleSet` field are deprecated. Existing
  integrations should migrate to

  `collection` and `sources` — a `ruleSet` rule maps to an equivalent source
  `condition` (for example, a

  tag rule becomes a `productTag` condition). If both `collection` and `input`
  are provided, `collection`

  is used.


  > Note:

  > The created collection is unpublished by default. To make it available to
  customers,

  use the
  [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish)

  mutation after creation.


  Learn more about [using metafields with collection
  conditions](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# collection​Create

mutation

Requires `write_products` access scope. Also: The app must have access to the input fields used to create the collection. Further, the store must not be on the Starter or Retail plans and user must have a permission to create collection.

Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

Use the `collectionCreate` mutation when you need to:

* Create a new collection for a product launch or campaign
* Organize products by category, season, or promotion
* Automate product grouping using conditions (for example, by tag, type, or price)

Collections can include products manually and can also include products automatically based on rules, sources, or conditions.

**Defining a collection's membership**

Define membership with `sources` on the `collection` argument ([`CollectionCreateInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionCreateInput)). Each source adds products through `conditions` (such as product tag, title, or metafield—see [`CollectionSourceInclusionConditionInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionSourceInclusionConditionInput) for the full list) and through manual `selections`.

***

**Note:** The \<code>input\</code> argument and its \<code>\<span class="PreventFireFoxApplyingGapToWBR">rule\<wbr/>Set\</span>\</code> field are deprecated. Existing integrations should migrate to \<code>collection\</code> and \<code>sources\</code> — a \<code>\<span class="PreventFireFoxApplyingGapToWBR">rule\<wbr/>Set\</span>\</code> rule maps to an equivalent source \<code>condition\</code> (for example, a tag rule becomes a \<code>\<span class="PreventFireFoxApplyingGapToWBR">product\<wbr/>Tag\</span>\</code> condition). If both \<code>collection\</code> and \<code>input\</code> are provided, \<code>collection\</code> is used.

***

***

**Note:** The created collection is unpublished by default. To make it available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

***

Learn more about [using metafields with collection conditions](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

## Arguments

* collection

  [Collection​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionCreateInput)

  The properties and sources to use when creating the collection. Define product membership with `sources` (conditions and manual selections) instead of the legacy `ruleSet`.

* input

  [Collection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

  Deprecated

***

## Collection​Create​Payload returns

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The collection that has been created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a collection from an existing source

  #### Description

  Create a collection by linking an existing shareable source. Use \`linkedSource\` with a \`sourceId\` when an app has already created a source that can be reused by one or more collections.

  #### Query

  ```graphql
  mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
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
      "title": "Collection from an existing source",
      "sources": [
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
  "query": "mutation CollectionCreate($collection: CollectionCreateInput!) { collectionCreate(collection: $collection) { collection { id title sources { __typename id title } } userErrors { field message } } }",
   "variables": {
      "collection": {
        "title": "Collection from an existing source",
        "sources": [
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
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
              "title": "Collection from an existing source",
              "sources": [
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
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
      "title": "Collection from an existing source",
      "sources": [
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
      "query": `mutation CollectionCreate($collection: CollectionCreateInput!) {
        collectionCreate(collection: $collection) {
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
              "title": "Collection from an existing source",
              "sources": [
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
  'mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
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
      "title": "Collection from an existing source",
      "sources": [
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
        mutation CollectionCreate($collection: CollectionCreateInput!) {
          collectionCreate(collection: $collection) {
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
              "title": "Collection from an existing source",
              "sources": [
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
    "collectionCreate": {
      "collection": {
        "id": "gid://shopify/Collection/1063001404",
        "title": "Collection from an existing source",
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

* ### Create a collection from another collection

  #### Description

  Create a collection with a sub-collection source. The new collection includes products from another collection through the \`subCollection\` source target.

  #### Query

  ```graphql
  mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionSubCollectionSource {
            subCollection {
              id
              title
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
    "collection": {
      "title": "Featured spring products",
      "sources": [
        {
          "subCollection": {
            "title": "Featured products source",
            "description": "Products from the featured collection.",
            "subCollectionId": "gid://shopify/Collection/1007901140"
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
  "query": "mutation CollectionCreate($collection: CollectionCreateInput!) { collectionCreate(collection: $collection) { collection { id title sources { __typename id title ... on CollectionSubCollectionSource { subCollection { id title } } } } userErrors { field message } } }",
   "variables": {
      "collection": {
        "title": "Featured spring products",
        "sources": [
          {
            "subCollection": {
              "title": "Featured products source",
              "description": "Products from the featured collection.",
              "subCollectionId": "gid://shopify/Collection/1007901140"
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
            ... on CollectionSubCollectionSource {
              subCollection {
                id
                title
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
          "collection": {
              "title": "Featured spring products",
              "sources": [
                  {
                      "subCollection": {
                          "title": "Featured products source",
                          "description": "Products from the featured collection.",
                          "subCollectionId": "gid://shopify/Collection/1007901140"
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
            ... on CollectionSubCollectionSource {
              subCollection {
                id
                title
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
    "collection": {
      "title": "Featured spring products",
      "sources": [
        {
          "subCollection": {
            "title": "Featured products source",
            "description": "Products from the featured collection.",
            "subCollectionId": "gid://shopify/Collection/1007901140"
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
      "query": `mutation CollectionCreate($collection: CollectionCreateInput!) {
        collectionCreate(collection: $collection) {
          collection {
            id
            title
            sources {
              __typename
              id
              title
              ... on CollectionSubCollectionSource {
                subCollection {
                  id
                  title
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
          "collection": {
              "title": "Featured spring products",
              "sources": [
                  {
                      "subCollection": {
                          "title": "Featured products source",
                          "description": "Products from the featured collection.",
                          "subCollectionId": "gid://shopify/Collection/1007901140"
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
  'mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionSubCollectionSource {
            subCollection {
              id
              title
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
    "collection": {
      "title": "Featured spring products",
      "sources": [
        {
          "subCollection": {
            "title": "Featured products source",
            "description": "Products from the featured collection.",
            "subCollectionId": "gid://shopify/Collection/1007901140"
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
        mutation CollectionCreate($collection: CollectionCreateInput!) {
          collectionCreate(collection: $collection) {
            collection {
              id
              title
              sources {
                __typename
                id
                title
                ... on CollectionSubCollectionSource {
                  subCollection {
                    id
                    title
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
          "collection": {
              "title": "Featured spring products",
              "sources": [
                  {
                      "subCollection": {
                          "title": "Featured products source",
                          "description": "Products from the featured collection.",
                          "subCollectionId": "gid://shopify/Collection/1007901140"
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
    "collectionCreate": {
      "collection": {
        "id": "gid://shopify/Collection/1063001444",
        "title": "Featured spring products",
        "sources": [
          {
            "__typename": "CollectionSubCollectionSource",
            "id": "gid://shopify/CollectionSubCollectionSource/1047893297",
            "title": "Featured products source",
            "subCollection": {
              "id": "gid://shopify/Collection/1007901140",
              "title": "Featured items"
            }
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### Create a collection with an image

  #### Description

  Create a collection that includes an image. This example shows how to attach image details, such as the source URL and alt text during the process of creating the collection. The response returns the collection's ID, title, and other specified image details.

  #### Query

  ```graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        image {
          url
          altText
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "title": "Collection with Image",
      "image": {
        "src": "tmp/26371970/collections/2fb4c50b-b04b-4ee8-a857-52b7ad9e5d2d/test_file.txt",
        "altText": "A beautiful collection image"
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
  "query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { userErrors { field message } collection { id title image { url altText } } } }",
   "variables": {
      "input": {
        "title": "Collection with Image",
        "image": {
          "src": "tmp/26371970/collections/2fb4c50b-b04b-4ee8-a857-52b7ad9e5d2d/test_file.txt",
          "altText": "A beautiful collection image"
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          image {
            url
            altText
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "title": "Collection with Image",
              "image": {
                  "src": "tmp/26371970/collections/2fb4c50b-b04b-4ee8-a857-52b7ad9e5d2d/test_file.txt",
                  "altText": "A beautiful collection image"
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          image {
            url
            altText
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "title": "Collection with Image",
      "image": {
        "src": "tmp/26371970/collections/2fb4c50b-b04b-4ee8-a857-52b7ad9e5d2d/test_file.txt",
        "altText": "A beautiful collection image"
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
      "query": `mutation CollectionCreate($input: CollectionInput!) {
        collectionCreate(input: $input) {
          userErrors {
            field
            message
          }
          collection {
            id
            title
            image {
              url
              altText
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "title": "Collection with Image",
              "image": {
                  "src": "tmp/26371970/collections/2fb4c50b-b04b-4ee8-a857-52b7ad9e5d2d/test_file.txt",
                  "altText": "A beautiful collection image"
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
  'mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        image {
          url
          altText
        }
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "title": "Collection with Image",
      "image": {
        "src": "tmp/26371970/collections/2fb4c50b-b04b-4ee8-a857-52b7ad9e5d2d/test_file.txt",
        "altText": "A beautiful collection image"
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
        mutation CollectionCreate($input: CollectionInput!) {
          collectionCreate(input: $input) {
            userErrors {
              field
              message
            }
            collection {
              id
              title
              image {
                url
                altText
              }
            }
          }
        }
      `,
      variables: {
          "input": {
              "title": "Collection with Image",
              "image": {
                  "src": "tmp/26371970/collections/2fb4c50b-b04b-4ee8-a857-52b7ad9e5d2d/test_file.txt",
                  "altText": "A beautiful collection image"
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
    "collectionCreate": {
      "userErrors": [],
      "collection": {
        "id": "gid://shopify/Collection/1063001426",
        "title": "Collection with Image",
        "image": {
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/collections/test_file.jpg?v=1781273014",
          "altText": "A beautiful collection image"
        }
      }
    }
  }
  ```

* ### Create a collection with multiple sources

  #### Description

  Create a collection with multiple sources. Each source can contribute products through conditions, manual selections, or a combination of both.

  #### Query

  ```graphql
  mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
            inclusion {
              matchType
              conditions {
                __typename
              }
              selections(first: 10) {
                nodes {
                  product {
                    id
                  }
                }
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
    "collection": {
      "title": "Layered spring collection",
      "sources": [
        {
          "source": {
            "title": "Products tagged spring",
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
              ]
            }
          }
        },
        {
          "source": {
            "title": "Featured product selections",
            "inclusion": {
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
  "query": "mutation CollectionCreate($collection: CollectionCreateInput!) { collectionCreate(collection: $collection) { collection { id title sources { __typename id title ... on CollectionConditionsSource { inclusion { matchType conditions { __typename } selections(first: 10) { nodes { product { id } } } } } } } userErrors { field message } } }",
   "variables": {
      "collection": {
        "title": "Layered spring collection",
        "sources": [
          {
            "source": {
              "title": "Products tagged spring",
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
                ]
              }
            }
          },
          {
            "source": {
              "title": "Featured product selections",
              "inclusion": {
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
            ... on CollectionConditionsSource {
              inclusion {
                matchType
                conditions {
                  __typename
                }
                selections(first: 10) {
                  nodes {
                    product {
                      id
                    }
                  }
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
          "collection": {
              "title": "Layered spring collection",
              "sources": [
                  {
                      "source": {
                          "title": "Products tagged spring",
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
                              ]
                          }
                      }
                  },
                  {
                      "source": {
                          "title": "Featured product selections",
                          "inclusion": {
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
            ... on CollectionConditionsSource {
              inclusion {
                matchType
                conditions {
                  __typename
                }
                selections(first: 10) {
                  nodes {
                    product {
                      id
                    }
                  }
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
    "collection": {
      "title": "Layered spring collection",
      "sources": [
        {
          "source": {
            "title": "Products tagged spring",
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
              ]
            }
          }
        },
        {
          "source": {
            "title": "Featured product selections",
            "inclusion": {
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
      "query": `mutation CollectionCreate($collection: CollectionCreateInput!) {
        collectionCreate(collection: $collection) {
          collection {
            id
            title
            sources {
              __typename
              id
              title
              ... on CollectionConditionsSource {
                inclusion {
                  matchType
                  conditions {
                    __typename
                  }
                  selections(first: 10) {
                    nodes {
                      product {
                        id
                      }
                    }
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
          "collection": {
              "title": "Layered spring collection",
              "sources": [
                  {
                      "source": {
                          "title": "Products tagged spring",
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
                              ]
                          }
                      }
                  },
                  {
                      "source": {
                          "title": "Featured product selections",
                          "inclusion": {
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
  'mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
            inclusion {
              matchType
              conditions {
                __typename
              }
              selections(first: 10) {
                nodes {
                  product {
                    id
                  }
                }
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
    "collection": {
      "title": "Layered spring collection",
      "sources": [
        {
          "source": {
            "title": "Products tagged spring",
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
              ]
            }
          }
        },
        {
          "source": {
            "title": "Featured product selections",
            "inclusion": {
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
        mutation CollectionCreate($collection: CollectionCreateInput!) {
          collectionCreate(collection: $collection) {
            collection {
              id
              title
              sources {
                __typename
                id
                title
                ... on CollectionConditionsSource {
                  inclusion {
                    matchType
                    conditions {
                      __typename
                    }
                    selections(first: 10) {
                      nodes {
                        product {
                          id
                        }
                      }
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
          "collection": {
              "title": "Layered spring collection",
              "sources": [
                  {
                      "source": {
                          "title": "Products tagged spring",
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
                              ]
                          }
                      }
                  },
                  {
                      "source": {
                          "title": "Featured product selections",
                          "inclusion": {
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
    "collectionCreate": {
      "collection": {
        "id": "gid://shopify/Collection/1063001401",
        "title": "Layered spring collection",
        "sources": [
          {
            "__typename": "CollectionConditionsSource",
            "id": "gid://shopify/CollectionConditionsSource/1047893286",
            "title": "Products tagged spring",
            "inclusion": {
              "matchType": "ALL",
              "conditions": [
                {
                  "__typename": "CollectionSourceInclusionConditionProductTag"
                }
              ],
              "selections": {
                "nodes": []
              }
            }
          },
          {
            "__typename": "CollectionConditionsSource",
            "id": "gid://shopify/CollectionConditionsSource/1047893287",
            "title": "Featured product selections",
            "inclusion": {
              "matchType": null,
              "conditions": [],
              "selections": {
                "nodes": [
                  {
                    "product": {
                      "id": "gid://shopify/Product/20995642"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### Create a collection with selected variants

  #### Description

  Create a variant-targeted collection source by selecting specific product variants. Pass \`targetType: VARIANTS\` and provide \`variantIds\` with each selected product.

  #### Query

  ```graphql
  mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
            inclusion {
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
      "title": "Selected variants",
      "sources": [
        {
          "source": {
            "title": "Selected variants source",
            "targetType": "VARIANTS",
            "inclusion": {
              "selections": [
                {
                  "productId": "gid://shopify/Product/20995642",
                  "variantIds": [
                    "gid://shopify/ProductVariant/30322695"
                  ]
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
  "query": "mutation CollectionCreate($collection: CollectionCreateInput!) { collectionCreate(collection: $collection) { collection { id title sources { __typename id title ... on CollectionConditionsSource { inclusion { selections(first: 10) { nodes { product { id title } variantIds } } } } } } userErrors { field message } } }",
   "variables": {
      "collection": {
        "title": "Selected variants",
        "sources": [
          {
            "source": {
              "title": "Selected variants source",
              "targetType": "VARIANTS",
              "inclusion": {
                "selections": [
                  {
                    "productId": "gid://shopify/Product/20995642",
                    "variantIds": [
                      "gid://shopify/ProductVariant/30322695"
                    ]
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
            ... on CollectionConditionsSource {
              inclusion {
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
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "collection": {
              "title": "Selected variants",
              "sources": [
                  {
                      "source": {
                          "title": "Selected variants source",
                          "targetType": "VARIANTS",
                          "inclusion": {
                              "selections": [
                                  {
                                      "productId": "gid://shopify/Product/20995642",
                                      "variantIds": [
                                          "gid://shopify/ProductVariant/30322695"
                                      ]
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
        collection {
          id
          title
          sources {
            __typename
            id
            title
            ... on CollectionConditionsSource {
              inclusion {
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
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "collection": {
      "title": "Selected variants",
      "sources": [
        {
          "source": {
            "title": "Selected variants source",
            "targetType": "VARIANTS",
            "inclusion": {
              "selections": [
                {
                  "productId": "gid://shopify/Product/20995642",
                  "variantIds": [
                    "gid://shopify/ProductVariant/30322695"
                  ]
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
      "query": `mutation CollectionCreate($collection: CollectionCreateInput!) {
        collectionCreate(collection: $collection) {
          collection {
            id
            title
            sources {
              __typename
              id
              title
              ... on CollectionConditionsSource {
                inclusion {
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
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "collection": {
              "title": "Selected variants",
              "sources": [
                  {
                      "source": {
                          "title": "Selected variants source",
                          "targetType": "VARIANTS",
                          "inclusion": {
                              "selections": [
                                  {
                                      "productId": "gid://shopify/Product/20995642",
                                      "variantIds": [
                                          "gid://shopify/ProductVariant/30322695"
                                      ]
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
  'mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
      collection {
        id
        title
        sources {
          __typename
          id
          title
          ... on CollectionConditionsSource {
            inclusion {
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
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "collection": {
      "title": "Selected variants",
      "sources": [
        {
          "source": {
            "title": "Selected variants source",
            "targetType": "VARIANTS",
            "inclusion": {
              "selections": [
                {
                  "productId": "gid://shopify/Product/20995642",
                  "variantIds": [
                    "gid://shopify/ProductVariant/30322695"
                  ]
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
        mutation CollectionCreate($collection: CollectionCreateInput!) {
          collectionCreate(collection: $collection) {
            collection {
              id
              title
              sources {
                __typename
                id
                title
                ... on CollectionConditionsSource {
                  inclusion {
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
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "collection": {
              "title": "Selected variants",
              "sources": [
                  {
                      "source": {
                          "title": "Selected variants source",
                          "targetType": "VARIANTS",
                          "inclusion": {
                              "selections": [
                                  {
                                      "productId": "gid://shopify/Product/20995642",
                                      "variantIds": [
                                          "gid://shopify/ProductVariant/30322695"
                                      ]
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
    "collectionCreate": {
      "collection": {
        "id": "gid://shopify/Collection/1063001441",
        "title": "Selected variants",
        "sources": [
          {
            "__typename": "CollectionConditionsSource",
            "id": "gid://shopify/CollectionConditionsSource/1047893296",
            "title": "Selected variants source",
            "inclusion": {
              "selections": {
                "nodes": [
                  {
                    "product": {
                      "id": "gid://shopify/Product/20995642",
                      "title": "Element"
                    },
                    "variantIds": [
                      "gid://shopify/ProductVariant/30322695"
                    ]
                  }
                ]
              }
            }
          }
        ]
      },
      "userErrors": []
    }
  }
  ```

* ### Create a collection with sources

  #### Description

  Create a collection that uses sources to include products. This example demonstrates how to configure collection details, SEO metadata, metafields, an image, and product membership through source conditions and manual product selections.

  #### Query

  ```graphql
  mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
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
                  tagRelation: relation
                  values
                  matchType
                }
                ... on CollectionSourceInclusionConditionProductTitle {
                  titleRelation: relation
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
      "title": "Spring styles",
      "descriptionHtml": "Products for the <strong>spring</strong> season.",
      "handle": "spring-styles",
      "templateSuffix": "spring",
      "sortOrder": "MANUAL",
      "image": {
        "src": "tmp/26371970/collections/d5e5e795-b6cf-4c42-88ae-d3e18576aa2b/test_file.txt",
        "altText": "Spring collection image"
      },
      "seo": {
        "title": "Spring styles collection",
        "description": "Browse spring products."
      },
      "metafields": [
        {
          "namespace": "custom",
          "key": "season",
          "type": "single_line_text_field",
          "value": "spring"
        }
      ],
      "sources": [
        {
          "source": {
            "title": "Spring source",
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
                },
                {
                  "productTitle": {
                    "relation": "CONTAINS",
                    "values": [
                      "shirt"
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
  "query": "mutation CollectionCreate($collection: CollectionCreateInput!) { collectionCreate(collection: $collection) { collection { id title descriptionHtml handle sortOrder templateSuffix image { url altText } seo { title description } metafields(first: 10) { nodes { namespace key value } } sources { __typename id title ... on CollectionConditionsSource { inclusion { matchType conditions { __typename id ... on CollectionSourceInclusionConditionProductTag { tagRelation: relation values matchType } ... on CollectionSourceInclusionConditionProductTitle { titleRelation: relation values matchType } } selections(first: 10) { nodes { product { id title } variantIds } } } } } } userErrors { field message } } }",
   "variables": {
      "collection": {
        "title": "Spring styles",
        "descriptionHtml": "Products for the <strong>spring</strong> season.",
        "handle": "spring-styles",
        "templateSuffix": "spring",
        "sortOrder": "MANUAL",
        "image": {
          "src": "tmp/26371970/collections/d5e5e795-b6cf-4c42-88ae-d3e18576aa2b/test_file.txt",
          "altText": "Spring collection image"
        },
        "seo": {
          "title": "Spring styles collection",
          "description": "Browse spring products."
        },
        "metafields": [
          {
            "namespace": "custom",
            "key": "season",
            "type": "single_line_text_field",
            "value": "spring"
          }
        ],
        "sources": [
          {
            "source": {
              "title": "Spring source",
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
                  },
                  {
                    "productTitle": {
                      "relation": "CONTAINS",
                      "values": [
                        "shirt"
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
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
                    tagRelation: relation
                    values
                    matchType
                  }
                  ... on CollectionSourceInclusionConditionProductTitle {
                    titleRelation: relation
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
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "collection": {
              "title": "Spring styles",
              "descriptionHtml": "Products for the <strong>spring</strong> season.",
              "handle": "spring-styles",
              "templateSuffix": "spring",
              "sortOrder": "MANUAL",
              "image": {
                  "src": "tmp/26371970/collections/d5e5e795-b6cf-4c42-88ae-d3e18576aa2b/test_file.txt",
                  "altText": "Spring collection image"
              },
              "seo": {
                  "title": "Spring styles collection",
                  "description": "Browse spring products."
              },
              "metafields": [
                  {
                      "namespace": "custom",
                      "key": "season",
                      "type": "single_line_text_field",
                      "value": "spring"
                  }
              ],
              "sources": [
                  {
                      "source": {
                          "title": "Spring source",
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
                                  },
                                  {
                                      "productTitle": {
                                          "relation": "CONTAINS",
                                          "values": [
                                              "shirt"
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
    mutation CollectionCreate($collection: CollectionCreateInput!) {
      collectionCreate(collection: $collection) {
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
                    tagRelation: relation
                    values
                    matchType
                  }
                  ... on CollectionSourceInclusionConditionProductTitle {
                    titleRelation: relation
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
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "collection": {
      "title": "Spring styles",
      "descriptionHtml": "Products for the <strong>spring</strong> season.",
      "handle": "spring-styles",
      "templateSuffix": "spring",
      "sortOrder": "MANUAL",
      "image": {
        "src": "tmp/26371970/collections/d5e5e795-b6cf-4c42-88ae-d3e18576aa2b/test_file.txt",
        "altText": "Spring collection image"
      },
      "seo": {
        "title": "Spring styles collection",
        "description": "Browse spring products."
      },
      "metafields": [
        {
          "namespace": "custom",
          "key": "season",
          "type": "single_line_text_field",
          "value": "spring"
        }
      ],
      "sources": [
        {
          "source": {
            "title": "Spring source",
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
                },
                {
                  "productTitle": {
                    "relation": "CONTAINS",
                    "values": [
                      "shirt"
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
      "query": `mutation CollectionCreate($collection: CollectionCreateInput!) {
        collectionCreate(collection: $collection) {
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
                      tagRelation: relation
                      values
                      matchType
                    }
                    ... on CollectionSourceInclusionConditionProductTitle {
                      titleRelation: relation
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
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "collection": {
              "title": "Spring styles",
              "descriptionHtml": "Products for the <strong>spring</strong> season.",
              "handle": "spring-styles",
              "templateSuffix": "spring",
              "sortOrder": "MANUAL",
              "image": {
                  "src": "tmp/26371970/collections/d5e5e795-b6cf-4c42-88ae-d3e18576aa2b/test_file.txt",
                  "altText": "Spring collection image"
              },
              "seo": {
                  "title": "Spring styles collection",
                  "description": "Browse spring products."
              },
              "metafields": [
                  {
                      "namespace": "custom",
                      "key": "season",
                      "type": "single_line_text_field",
                      "value": "spring"
                  }
              ],
              "sources": [
                  {
                      "source": {
                          "title": "Spring source",
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
                                  },
                                  {
                                      "productTitle": {
                                          "relation": "CONTAINS",
                                          "values": [
                                              "shirt"
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
  'mutation CollectionCreate($collection: CollectionCreateInput!) {
    collectionCreate(collection: $collection) {
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
                  tagRelation: relation
                  values
                  matchType
                }
                ... on CollectionSourceInclusionConditionProductTitle {
                  titleRelation: relation
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
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
  '{
    "collection": {
      "title": "Spring styles",
      "descriptionHtml": "Products for the <strong>spring</strong> season.",
      "handle": "spring-styles",
      "templateSuffix": "spring",
      "sortOrder": "MANUAL",
      "image": {
        "src": "tmp/26371970/collections/d5e5e795-b6cf-4c42-88ae-d3e18576aa2b/test_file.txt",
        "altText": "Spring collection image"
      },
      "seo": {
        "title": "Spring styles collection",
        "description": "Browse spring products."
      },
      "metafields": [
        {
          "namespace": "custom",
          "key": "season",
          "type": "single_line_text_field",
          "value": "spring"
        }
      ],
      "sources": [
        {
          "source": {
            "title": "Spring source",
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
                },
                {
                  "productTitle": {
                    "relation": "CONTAINS",
                    "values": [
                      "shirt"
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
        mutation CollectionCreate($collection: CollectionCreateInput!) {
          collectionCreate(collection: $collection) {
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
                        tagRelation: relation
                        values
                        matchType
                      }
                      ... on CollectionSourceInclusionConditionProductTitle {
                        titleRelation: relation
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
            userErrors {
              field
              message
            }
          }
        }
      `,
      variables: {
          "collection": {
              "title": "Spring styles",
              "descriptionHtml": "Products for the <strong>spring</strong> season.",
              "handle": "spring-styles",
              "templateSuffix": "spring",
              "sortOrder": "MANUAL",
              "image": {
                  "src": "tmp/26371970/collections/d5e5e795-b6cf-4c42-88ae-d3e18576aa2b/test_file.txt",
                  "altText": "Spring collection image"
              },
              "seo": {
                  "title": "Spring styles collection",
                  "description": "Browse spring products."
              },
              "metafields": [
                  {
                      "namespace": "custom",
                      "key": "season",
                      "type": "single_line_text_field",
                      "value": "spring"
                  }
              ],
              "sources": [
                  {
                      "source": {
                          "title": "Spring source",
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
                                  },
                                  {
                                      "productTitle": {
                                          "relation": "CONTAINS",
                                          "values": [
                                              "shirt"
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
    "collectionCreate": {
      "collection": {
        "id": "gid://shopify/Collection/1063001409",
        "title": "Spring styles",
        "descriptionHtml": "Products for the <strong>spring</strong> season.",
        "handle": "spring-styles",
        "sortOrder": "MANUAL",
        "templateSuffix": "spring",
        "image": {
          "url": "https://cdn.shopify.com/s/files/1/2637/1970/collections/test_file.jpg?v=1781273011",
          "altText": "Spring collection image"
        },
        "seo": {
          "title": "Spring styles collection",
          "description": "Browse spring products."
        },
        "metafields": {
          "nodes": [
            {
              "namespace": "global",
              "key": "title_tag",
              "value": "Spring styles collection"
            },
            {
              "namespace": "global",
              "key": "description_tag",
              "value": "Browse spring products."
            },
            {
              "namespace": "custom",
              "key": "season",
              "value": "spring"
            }
          ]
        },
        "sources": [
          {
            "__typename": "CollectionConditionsSource",
            "id": "gid://shopify/CollectionConditionsSource/1047893291",
            "title": "Spring source",
            "inclusion": {
              "matchType": "ALL",
              "conditions": [
                {
                  "__typename": "CollectionSourceInclusionConditionProductTag",
                  "id": "gid://shopify/CollectionSourceInclusionConditionProductTag/977278325",
                  "tagRelation": "TAGGED_WITH",
                  "values": [
                    "spring"
                  ],
                  "matchType": "ANY"
                },
                {
                  "__typename": "CollectionSourceInclusionConditionProductTitle",
                  "id": "gid://shopify/CollectionSourceInclusionConditionProductTitle/977278326",
                  "titleRelation": "CONTAINS",
                  "values": [
                    "shirt"
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
      "userErrors": []
    }
  }
  ```

* ### Create a custom collection

  #### Description

  Create a \[custom collection]\(https://help.shopify.com/manual/products/collections/manual-shopify-collection) by defining the collection's title, description, handle, and associated products. The response returns detailed information about the newly created collection, including its ID, title, description, update timestamp, handle, an image, and a list of associated products.

  #### Query

  ```graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      collection {
        id
        title
        descriptionHtml
        updatedAt
        handle
        image {
          id
          height
          width
          url
        }
        products(first: 10) {
          nodes {
            id
            featuredMedia {
              id
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
      "title": "New Custom Collection",
      "descriptionHtml": "This is a custom collection.",
      "handle": "custom-collection",
      "products": [
        "gid://shopify/Product/20995642"
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
  "query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { collection { id title descriptionHtml updatedAt handle image { id height width url } products(first: 10) { nodes { id featuredMedia { id } } } } userErrors { field message } } }",
   "variables": {
      "input": {
        "title": "New Custom Collection",
        "descriptionHtml": "This is a custom collection.",
        "handle": "custom-collection",
        "products": [
          "gid://shopify/Product/20995642"
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        collection {
          id
          title
          descriptionHtml
          updatedAt
          handle
          image {
            id
            height
            width
            url
          }
          products(first: 10) {
            nodes {
              id
              featuredMedia {
                id
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
              "title": "New Custom Collection",
              "descriptionHtml": "This is a custom collection.",
              "handle": "custom-collection",
              "products": [
                  "gid://shopify/Product/20995642"
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        collection {
          id
          title
          descriptionHtml
          updatedAt
          handle
          image {
            id
            height
            width
            url
          }
          products(first: 10) {
            nodes {
              id
              featuredMedia {
                id
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
      "title": "New Custom Collection",
      "descriptionHtml": "This is a custom collection.",
      "handle": "custom-collection",
      "products": [
        "gid://shopify/Product/20995642"
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
      "query": `mutation CollectionCreate($input: CollectionInput!) {
        collectionCreate(input: $input) {
          collection {
            id
            title
            descriptionHtml
            updatedAt
            handle
            image {
              id
              height
              width
              url
            }
            products(first: 10) {
              nodes {
                id
                featuredMedia {
                  id
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
              "title": "New Custom Collection",
              "descriptionHtml": "This is a custom collection.",
              "handle": "custom-collection",
              "products": [
                  "gid://shopify/Product/20995642"
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
  'mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      collection {
        id
        title
        descriptionHtml
        updatedAt
        handle
        image {
          id
          height
          width
          url
        }
        products(first: 10) {
          nodes {
            id
            featuredMedia {
              id
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
      "title": "New Custom Collection",
      "descriptionHtml": "This is a custom collection.",
      "handle": "custom-collection",
      "products": [
        "gid://shopify/Product/20995642"
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
        mutation CollectionCreate($input: CollectionInput!) {
          collectionCreate(input: $input) {
            collection {
              id
              title
              descriptionHtml
              updatedAt
              handle
              image {
                id
                height
                width
                url
              }
              products(first: 10) {
                nodes {
                  id
                  featuredMedia {
                    id
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
              "title": "New Custom Collection",
              "descriptionHtml": "This is a custom collection.",
              "handle": "custom-collection",
              "products": [
                  "gid://shopify/Product/20995642"
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
    "collectionCreate": {
      "collection": {
        "id": "gid://shopify/Collection/1063001436",
        "title": "New Custom Collection",
        "descriptionHtml": "This is a custom collection.",
        "updatedAt": "2026-06-12T14:03:36Z",
        "handle": "custom-collection",
        "image": null,
        "products": {
          "nodes": [
            {
              "id": "gid://shopify/Product/20995642",
              "featuredMedia": {
                "id": "gid://shopify/MediaImage/730211239"
              }
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Create a new metafield on a new collection

  #### Description

  Create a new metafield \`my\_field.subtitle\` on a new collection. Alternatively, refer to the \[\`metafieldsSet\`]\(https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldsset) mutation to create and update metafields on collection resources.

  #### Query

  ```graphql
  mutation createCollectionMetafields($input: CollectionInput!) {
    collectionCreate(input: $input) {
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
        }
      ],
      "title": "Spring Styles"
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
  "query": "mutation createCollectionMetafields($input: CollectionInput!) { collectionCreate(input: $input) { collection { id metafields(first: 3) { edges { node { id namespace key value } } } } userErrors { message field } } }",
   "variables": {
      "input": {
        "metafields": [
          {
            "namespace": "my_field",
            "key": "subtitle",
            "type": "single_line_text_field",
            "value": "Bold Colors"
          }
        ],
        "title": "Spring Styles"
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
    mutation createCollectionMetafields($input: CollectionInput!) {
      collectionCreate(input: $input) {
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
                  }
              ],
              "title": "Spring Styles"
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
    mutation createCollectionMetafields($input: CollectionInput!) {
      collectionCreate(input: $input) {
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
        }
      ],
      "title": "Spring Styles"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation createCollectionMetafields($input: CollectionInput!) {
        collectionCreate(input: $input) {
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
                  }
              ],
              "title": "Spring Styles"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation createCollectionMetafields($input: CollectionInput!) {
    collectionCreate(input: $input) {
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
        }
      ],
      "title": "Spring Styles"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation createCollectionMetafields($input: CollectionInput!) {
          collectionCreate(input: $input) {
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
                  }
              ],
              "title": "Spring Styles"
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
    "collectionCreate": {
      "collection": {
        "id": "gid://shopify/Collection/1063001315",
        "metafields": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/Metafield/1069228935",
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

* ### Create a smart collection

  #### Description

  Create a \[smart collection]\(https://help.shopify.com/manual/products/collections/smart-collections), specifically tailored for a store's shoe collection. The response returns the details of the newly created collection, including its ID, title, description, handle, sort order, and the defined rule set in the \[collection's conditions]\(https://help.shopify.com/manual/products/collections/smart-collections/conditions).

  #### Query

  ```graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
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
      "title": "Our entire shoe collection",
      "descriptionHtml": "View <b>every</b> shoe available in our store.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": {
          "column": "TITLE",
          "relation": "CONTAINS",
          "condition": "shoe"
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
  "query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { userErrors { field message } collection { id title descriptionHtml handle sortOrder ruleSet { appliedDisjunctively rules { column relation condition } } } } }",
   "variables": {
      "input": {
        "title": "Our entire shoe collection",
        "descriptionHtml": "View <b>every</b> shoe available in our store.",
        "ruleSet": {
          "appliedDisjunctively": false,
          "rules": {
            "column": "TITLE",
            "relation": "CONTAINS",
            "condition": "shoe"
          }
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          ruleSet {
            appliedDisjunctively
            rules {
              column
              relation
              condition
            }
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "title": "Our entire shoe collection",
              "descriptionHtml": "View <b>every</b> shoe available in our store.",
              "ruleSet": {
                  "appliedDisjunctively": false,
                  "rules": {
                      "column": "TITLE",
                      "relation": "CONTAINS",
                      "condition": "shoe"
                  }
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          ruleSet {
            appliedDisjunctively
            rules {
              column
              relation
              condition
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "title": "Our entire shoe collection",
      "descriptionHtml": "View <b>every</b> shoe available in our store.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": {
          "column": "TITLE",
          "relation": "CONTAINS",
          "condition": "shoe"
        }
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
      "query": `mutation CollectionCreate($input: CollectionInput!) {
        collectionCreate(input: $input) {
          userErrors {
            field
            message
          }
          collection {
            id
            title
            descriptionHtml
            handle
            sortOrder
            ruleSet {
              appliedDisjunctively
              rules {
                column
                relation
                condition
              }
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "title": "Our entire shoe collection",
              "descriptionHtml": "View <b>every</b> shoe available in our store.",
              "ruleSet": {
                  "appliedDisjunctively": false,
                  "rules": {
                      "column": "TITLE",
                      "relation": "CONTAINS",
                      "condition": "shoe"
                  }
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
  'mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
          }
        }
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "title": "Our entire shoe collection",
      "descriptionHtml": "View <b>every</b> shoe available in our store.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": {
          "column": "TITLE",
          "relation": "CONTAINS",
          "condition": "shoe"
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
        mutation CollectionCreate($input: CollectionInput!) {
          collectionCreate(input: $input) {
            userErrors {
              field
              message
            }
            collection {
              id
              title
              descriptionHtml
              handle
              sortOrder
              ruleSet {
                appliedDisjunctively
                rules {
                  column
                  relation
                  condition
                }
              }
            }
          }
        }
      `,
      variables: {
          "input": {
              "title": "Our entire shoe collection",
              "descriptionHtml": "View <b>every</b> shoe available in our store.",
              "ruleSet": {
                  "appliedDisjunctively": false,
                  "rules": {
                      "column": "TITLE",
                      "relation": "CONTAINS",
                      "condition": "shoe"
                  }
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
    "collectionCreate": {
      "userErrors": [],
      "collection": {
        "id": "gid://shopify/Collection/1063001438",
        "title": "Our entire shoe collection",
        "descriptionHtml": "View <b>every</b> shoe available in our store.",
        "handle": "our-entire-shoe-collection",
        "sortOrder": "MOST_RELEVANT",
        "ruleSet": {
          "appliedDisjunctively": false,
          "rules": [
            {
              "column": "TITLE",
              "relation": "CONTAINS",
              "condition": "shoe"
            }
          ]
        }
      }
    }
  }
  ```

* ### Create a smart collection with metafield definition conditions

  #### Description

  Create a \[smart collection]\(https://help.shopify.com/manual/products/collections/smart-collections) that contains all products with the specific product and variant \[metafield definition conditions]\(https://shopify.dev/docs/apps/build/custom-data/metafields/definitions). The collection includes all products that have the product metafield value \`leather\` and the variant metafield value \`true\`.

  #### Query

  ```graphql
  mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
            conditionObject {
              ... on CollectionRuleMetafieldCondition {
                metafieldDefinition {
                  id
                  name
                  type {
                    name
                  }
                  ownerType
                }
              }
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
      "title": "Our entire leather collection",
      "descriptionHtml": "Check out our leather products.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": [
          {
            "column": "PRODUCT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "leather",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456136"
          },
          {
            "column": "VARIANT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "true",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456137"
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
  "query": "mutation CollectionCreate($input: CollectionInput!) { collectionCreate(input: $input) { userErrors { field message } collection { id title descriptionHtml handle sortOrder ruleSet { appliedDisjunctively rules { column relation condition conditionObject { ... on CollectionRuleMetafieldCondition { metafieldDefinition { id name type { name } ownerType } } } } } } } }",
   "variables": {
      "input": {
        "title": "Our entire leather collection",
        "descriptionHtml": "Check out our leather products.",
        "ruleSet": {
          "appliedDisjunctively": false,
          "rules": [
            {
              "column": "PRODUCT_METAFIELD_DEFINITION",
              "relation": "EQUALS",
              "condition": "leather",
              "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456136"
            },
            {
              "column": "VARIANT_METAFIELD_DEFINITION",
              "relation": "EQUALS",
              "condition": "true",
              "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456137"
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          ruleSet {
            appliedDisjunctively
            rules {
              column
              relation
              condition
              conditionObject {
                ... on CollectionRuleMetafieldCondition {
                  metafieldDefinition {
                    id
                    name
                    type {
                      name
                    }
                    ownerType
                  }
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
          "input": {
              "title": "Our entire leather collection",
              "descriptionHtml": "Check out our leather products.",
              "ruleSet": {
                  "appliedDisjunctively": false,
                  "rules": [
                      {
                          "column": "PRODUCT_METAFIELD_DEFINITION",
                          "relation": "EQUALS",
                          "condition": "leather",
                          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456136"
                      },
                      {
                          "column": "VARIANT_METAFIELD_DEFINITION",
                          "relation": "EQUALS",
                          "condition": "true",
                          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456137"
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
    mutation CollectionCreate($input: CollectionInput!) {
      collectionCreate(input: $input) {
        userErrors {
          field
          message
        }
        collection {
          id
          title
          descriptionHtml
          handle
          sortOrder
          ruleSet {
            appliedDisjunctively
            rules {
              column
              relation
              condition
              conditionObject {
                ... on CollectionRuleMetafieldCondition {
                  metafieldDefinition {
                    id
                    name
                    type {
                      name
                    }
                    ownerType
                  }
                }
              }
            }
          }
        }
      }
    }
  QUERY

  variables = {
    "input": {
      "title": "Our entire leather collection",
      "descriptionHtml": "Check out our leather products.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": [
          {
            "column": "PRODUCT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "leather",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456136"
          },
          {
            "column": "VARIANT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "true",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456137"
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
      "query": `mutation CollectionCreate($input: CollectionInput!) {
        collectionCreate(input: $input) {
          userErrors {
            field
            message
          }
          collection {
            id
            title
            descriptionHtml
            handle
            sortOrder
            ruleSet {
              appliedDisjunctively
              rules {
                column
                relation
                condition
                conditionObject {
                  ... on CollectionRuleMetafieldCondition {
                    metafieldDefinition {
                      id
                      name
                      type {
                        name
                      }
                      ownerType
                    }
                  }
                }
              }
            }
          }
        }
      }`,
      "variables": {
          "input": {
              "title": "Our entire leather collection",
              "descriptionHtml": "Check out our leather products.",
              "ruleSet": {
                  "appliedDisjunctively": false,
                  "rules": [
                      {
                          "column": "PRODUCT_METAFIELD_DEFINITION",
                          "relation": "EQUALS",
                          "condition": "leather",
                          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456136"
                      },
                      {
                          "column": "VARIANT_METAFIELD_DEFINITION",
                          "relation": "EQUALS",
                          "condition": "true",
                          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456137"
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
  'mutation CollectionCreate($input: CollectionInput!) {
    collectionCreate(input: $input) {
      userErrors {
        field
        message
      }
      collection {
        id
        title
        descriptionHtml
        handle
        sortOrder
        ruleSet {
          appliedDisjunctively
          rules {
            column
            relation
            condition
            conditionObject {
              ... on CollectionRuleMetafieldCondition {
                metafieldDefinition {
                  id
                  name
                  type {
                    name
                  }
                  ownerType
                }
              }
            }
          }
        }
      }
    }
  }' \
  --variables \
  '{
    "input": {
      "title": "Our entire leather collection",
      "descriptionHtml": "Check out our leather products.",
      "ruleSet": {
        "appliedDisjunctively": false,
        "rules": [
          {
            "column": "PRODUCT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "leather",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456136"
          },
          {
            "column": "VARIANT_METAFIELD_DEFINITION",
            "relation": "EQUALS",
            "condition": "true",
            "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456137"
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
        mutation CollectionCreate($input: CollectionInput!) {
          collectionCreate(input: $input) {
            userErrors {
              field
              message
            }
            collection {
              id
              title
              descriptionHtml
              handle
              sortOrder
              ruleSet {
                appliedDisjunctively
                rules {
                  column
                  relation
                  condition
                  conditionObject {
                    ... on CollectionRuleMetafieldCondition {
                      metafieldDefinition {
                        id
                        name
                        type {
                          name
                        }
                        ownerType
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
          "input": {
              "title": "Our entire leather collection",
              "descriptionHtml": "Check out our leather products.",
              "ruleSet": {
                  "appliedDisjunctively": false,
                  "rules": [
                      {
                          "column": "PRODUCT_METAFIELD_DEFINITION",
                          "relation": "EQUALS",
                          "condition": "leather",
                          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456136"
                      },
                      {
                          "column": "VARIANT_METAFIELD_DEFINITION",
                          "relation": "EQUALS",
                          "condition": "true",
                          "conditionObjectId": "gid://shopify/MetafieldDefinition/1071456137"
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
    "collectionCreate": {
      "userErrors": [],
      "collection": {
        "id": "gid://shopify/Collection/1063001433",
        "title": "Our entire leather collection",
        "descriptionHtml": "Check out our leather products.",
        "handle": "our-entire-leather-collection",
        "sortOrder": "MOST_RELEVANT",
        "ruleSet": {
          "appliedDisjunctively": false,
          "rules": [
            {
              "column": "PRODUCT_METAFIELD_DEFINITION",
              "relation": "EQUALS",
              "condition": "leather",
              "conditionObject": {
                "metafieldDefinition": {
                  "id": "gid://shopify/MetafieldDefinition/1071456136",
                  "name": "Material",
                  "type": {
                    "name": "single_line_text_field"
                  },
                  "ownerType": "PRODUCT"
                }
              }
            },
            {
              "column": "VARIANT_METAFIELD_DEFINITION",
              "relation": "EQUALS",
              "condition": "true",
              "conditionObject": {
                "metafieldDefinition": {
                  "id": "gid://shopify/MetafieldDefinition/1071456137",
                  "name": "Imported",
                  "type": {
                    "name": "boolean"
                  },
                  "ownerType": "PRODUCTVARIANT"
                }
              }
            }
          ]
        }
      }
    }
  }
  ```

* ### collectionCreate reference
