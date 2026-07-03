---
title: metaobjectUpdate - GraphQL Admin
description: >-
  Updates a
  [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)
  with new field values, handle, or capabilities.
  [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects)

  are custom data structures that extend Shopify's data model.


  You can modify field values mapped to the metaobject's
  [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition),

  update the handle for a unique identifier, and adjust capabilities like

  publishing status. When updating the handle, you can optionally create a

  redirect from the old handle to maintain existing references.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpdate.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# metaobject​Update

mutation

Requires `write_metaobjects` access scope.

Updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) with new field values, handle, or capabilities. [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) are custom data structures that extend Shopify's data model.

You can modify field values mapped to the metaobject's [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition), update the handle for a unique identifier, and adjust capabilities like publishing status. When updating the handle, you can optionally create a redirect from the old handle to maintain existing references.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the metaobject to update.

* metaobject

  [Metaobject​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpdateInput)

  required

  Specifies parameters to update on the metaobject.

***

## Metaobject​Update​Payload returns

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Patch a single field on a metaobject

  #### Description

  Use the \`fields\` input to patch a single field. Fields you don't list keep their existing values — in this example the author metaobject's \`first\_published\` survives the update of \`full\_name\`.

  #### Query

  ```graphql
  mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $metaobject) {
      metaobject {
        handle
        values
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Metaobject/971662597",
    "metaobject": {
      "fields": [
        {
          "key": "full_name",
          "value": "Charlotte Brontë"
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
  "query": "mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) { metaobjectUpdate(id: $id, metaobject: $metaobject) { metaobject { handle values } userErrors { field message code } } }",
   "variables": {
      "id": "gid://shopify/Metaobject/971662597",
      "metaobject": {
        "fields": [
          {
            "key": "full_name",
            "value": "Charlotte Brontë"
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
    mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          values
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Metaobject/971662597",
          "metaobject": {
              "fields": [
                  {
                      "key": "full_name",
                      "value": "Charlotte Brontë"
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
    mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          values
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Metaobject/971662597",
    "metaobject": {
      "fields": [
        {
          "key": "full_name",
          "value": "Charlotte Brontë"
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
      "query": `mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
        metaobjectUpdate(id: $id, metaobject: $metaobject) {
          metaobject {
            handle
            values
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Metaobject/971662597",
          "metaobject": {
              "fields": [
                  {
                      "key": "full_name",
                      "value": "Charlotte Brontë"
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
  'mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $metaobject) {
      metaobject {
        handle
        values
      }
      userErrors {
        field
        message
        code
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Metaobject/971662597",
    "metaobject": {
      "fields": [
        {
          "key": "full_name",
          "value": "Charlotte Brontë"
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
        mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
          metaobjectUpdate(id: $id, metaobject: $metaobject) {
            metaobject {
              handle
              values
            }
            userErrors {
              field
              message
              code
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Metaobject/971662597",
          "metaobject": {
              "fields": [
                  {
                      "key": "full_name",
                      "value": "Charlotte Brontë"
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
    "metaobjectUpdate": {
      "metaobject": {
        "handle": "jane-austen",
        "values": {
          "first_published": "1811-01-01",
          "full_name": "Charlotte Brontë"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Update a metaobject

  #### Description

  To update an existing metaobject, you can use the \`metaobjectUpdate\` mutation with the \`id\` and \`metaobject\` arguments. \`values\` is a full replacement — any keys you don't include will be cleared. To patch a subset of fields, see the next example. The following example replaces the author metaobject's \`full\_name\` with \`"Charlotte Brontë"\` and, because \`first\_published\` is omitted, clears that field.

  #### Query

  ```graphql
  mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $metaobject) {
      metaobject {
        handle
        values
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Metaobject/971662598",
    "metaobject": {
      "values": {
        "full_name": "Charlotte Brontë"
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
  "query": "mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) { metaobjectUpdate(id: $id, metaobject: $metaobject) { metaobject { handle values } userErrors { field message code } } }",
   "variables": {
      "id": "gid://shopify/Metaobject/971662598",
      "metaobject": {
        "values": {
          "full_name": "Charlotte Brontë"
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
    mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          values
        }
        userErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Metaobject/971662598",
          "metaobject": {
              "values": {
                  "full_name": "Charlotte Brontë"
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
    mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
      metaobjectUpdate(id: $id, metaobject: $metaobject) {
        metaobject {
          handle
          values
        }
        userErrors {
          field
          message
          code
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Metaobject/971662598",
    "metaobject": {
      "values": {
        "full_name": "Charlotte Brontë"
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
      "query": `mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
        metaobjectUpdate(id: $id, metaobject: $metaobject) {
          metaobject {
            handle
            values
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Metaobject/971662598",
          "metaobject": {
              "values": {
                  "full_name": "Charlotte Brontë"
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
  'mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
    metaobjectUpdate(id: $id, metaobject: $metaobject) {
      metaobject {
        handle
        values
      }
      userErrors {
        field
        message
        code
      }
    }
  }' \
  --variables \
  '{
    "id": "gid://shopify/Metaobject/971662598",
    "metaobject": {
      "values": {
        "full_name": "Charlotte Brontë"
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
        mutation UpdateMetaobject($id: ID!, $metaobject: MetaobjectUpdateInput!) {
          metaobjectUpdate(id: $id, metaobject: $metaobject) {
            metaobject {
              handle
              values
            }
            userErrors {
              field
              message
              code
            }
          }
        }
      `,
      variables: {
          "id": "gid://shopify/Metaobject/971662598",
          "metaobject": {
              "values": {
                  "full_name": "Charlotte Brontë"
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
    "metaobjectUpdate": {
      "metaobject": {
        "handle": "jane-austen",
        "values": {
          "first_published": null,
          "full_name": "Charlotte Brontë"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### metaobjectUpdate reference
