---
title: metaobjectByHandle - GraphQL Admin
description: >-
  Retrieves a
  [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)
  by its handle and type. Handles are unique identifiers within a metaobject
  type.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectByHandle'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectByHandle.md
api_name: admin
api_type: graphql
type: query
metadata:
  domain: admin
---

# metaobject​By​Handle

query

Requires `read_metaobjects` access scope.

Retrieves a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) by its handle and type. Handles are unique identifiers within a metaobject type.

## Arguments

* handle

  [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

  required

  The identifier of the metaobject to return.

***

## Possible returns

* Metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  An instance of custom structured data defined by a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store reusable data that extends beyond Shopify's standard resources, such as product highlights, size charts, or custom content sections.

  Each metaobject includes fields that match the field types and validation rules specified in its definition, which also determines the metaobject's capabilities, such as storefront visibility, publishing and translation support. [`Metafields`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) can reference metaobjects to connect custom data with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other Shopify resources.

  * capabilities

    [Metaobject​Capability​Data!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectCapabilityData)

    non-null

    Metaobject capabilities for this Metaobject.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    When the object was created.

  * created​By

    [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

    non-null

    The app used to create the object.

  * created​By​App

    [App!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

    non-null

    The app used to create the object.

  * created​By​Staff

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    The staff member who created the metaobject.

  * definition

    [Metaobject​Definition!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

    non-null

    The MetaobjectDefinition that models this object type.

  * display​Name

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The preferred display name field value of the metaobject.

  * field

    [Metaobject​Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

    The field for an object key, or null if the key has no field definition.

    * key

      [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

      required

      ### Arguments

      The metaobject key to access.

    ***

  * fields

    [\[Metaobject​Field!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

    non-null

    All ordered fields of the metaobject with their definitions and values.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The unique handle of the object, useful as a custom ID.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * referenced​By

    [Metafield​Relation​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection)

    non-null

    List of back references metafields that belong to the resource.

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

  * thumbnail​Field

    [Metaobject​Field](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField)

    The recommended field to visually represent this metaobject. May be a file reference or color field.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The type of the metaobject.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    non-null

    When the object was last updated.

  * values

    [JSON!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

    non-null

    The values of the metaobject.

  * staff​Member

    [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

    Deprecated

***

## Examples

* ### Fetch a metaobject by handle

  #### Description

  Retrieves a metaobject by its type and handle.

  #### Query

  ```graphql
  query MetaobjectByHandle {
    metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
      id
      handle
      type
      displayName
      values
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
  "query": "query MetaobjectByHandle { metaobjectByHandle(handle: {type: \"$app:author\", handle: \"jane-austen\"}) { id handle type displayName values } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query MetaobjectByHandle {
      metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
        id
        handle
        type
        displayName
        values
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
    query MetaobjectByHandle {
      metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
        id
        handle
        type
        displayName
        values
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query MetaobjectByHandle {
      metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
        id
        handle
        type
        displayName
        values
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query MetaobjectByHandle {
    metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
      id
      handle
      type
      displayName
      values
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query MetaobjectByHandle {
          metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
            id
            handle
            type
            displayName
            values
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
    "metaobjectByHandle": {
      "id": "gid://shopify/Metaobject/971662561",
      "handle": "jane-austen",
      "type": "app--2459039--author",
      "displayName": "Jane Austen",
      "values": {
        "first_published": "1811-01-01",
        "full_name": "Jane Austen"
      }
    }
  }
  ```

* ### Fetch metaobject with publish status

  #### Description

  Retrieves a metaobject with its capabilities. The capabilities.publishable field shows whether the entry's status is DRAFT or ACTIVE.

  #### Query

  ```graphql
  query MetaobjectByHandle {
    metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
      id
      handle
      displayName
      capabilities {
        publishable {
          status
        }
      }
      values
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
  "query": "query MetaobjectByHandle { metaobjectByHandle(handle: {type: \"$app:author\", handle: \"jane-austen\"}) { id handle displayName capabilities { publishable { status } } values } }"
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    query MetaobjectByHandle {
      metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
        id
        handle
        displayName
        capabilities {
          publishable {
            status
          }
        }
        values
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
    query MetaobjectByHandle {
      metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
        id
        handle
        displayName
        capabilities {
          publishable {
            status
          }
        }
        values
      }
    }
  QUERY

  response = client.query(query: query)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: `query MetaobjectByHandle {
      metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
        id
        handle
        displayName
        capabilities {
          publishable {
            status
          }
        }
        values
      }
    }`,
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'query MetaobjectByHandle {
    metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
      id
      handle
      displayName
      capabilities {
        publishable {
          status
        }
      }
      values
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query MetaobjectByHandle {
          metaobjectByHandle(handle: {type: "$app:author", handle: "jane-austen"}) {
            id
            handle
            displayName
            capabilities {
              publishable {
                status
              }
            }
            values
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
    "metaobjectByHandle": {
      "id": "gid://shopify/Metaobject/971662562",
      "handle": "jane-austen",
      "displayName": "Jane Austen",
      "capabilities": {
        "publishable": {
          "status": "ACTIVE"
        }
      },
      "values": {
        "first_published": "1811-01-01",
        "full_name": "Jane Austen"
      }
    }
  }
  ```
