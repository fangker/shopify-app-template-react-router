---
title: metaobjectUpsert - GraphQL Admin
description: >-
  Creates or updates a
  [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  based on its handle. If a metaobject with the specified handle exists, the

  mutation updates it with the provided field values. If no matching metaobject

  exists, the mutation creates a new one.


  The handle serves as a unique identifier within a metaobject type. Field

  values map to the
  [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s

  field keys and overwrite existing values during updates.
api_version: 2026-07
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# metaobject​Upsert

mutation

Requires `write_metaobjects` access scope.

Creates or updates a [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) based on its handle. If a metaobject with the specified handle exists, the mutation updates it with the provided field values. If no matching metaobject exists, the mutation creates a new one.

The handle serves as a unique identifier within a metaobject type. Field values map to the [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)'s field keys and overwrite existing values during updates.

## Arguments

* handle

  [Metaobject​Handle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectHandleInput)

  required

  The identifier of the metaobject to upsert.

* metaobject

  [Metaobject​Upsert​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetaobjectUpsertInput)

  The parameters to upsert the metaobject. Only the fields you provide are updated. Cannot be used in conjunction with `values`.

* values

  [JSON](https://shopify.dev/docs/api/admin-graphql/latest/scalars/JSON)

  The values of the metaobject as a JSON object keyed by field definition key. This is a full replacement — omitted keys are cleared on an existing record. Cannot be used in conjunction with `metaobject`.

***

## Metaobject​Upsert​Payload returns

* metaobject

  [Metaobject](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  The created or updated metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Upsert a metaobject

  #### Description

  To upsert a metaobject, you can use the \`metaobjectUpsert\` mutation with the \`handle\` and \`values\` arguments which will either create a new metaobject or update an existing one. Note that \`values\` performs a full replacement — any keys you don't include will be cleared. The following example uses upsert to create a new "color" metaobject with the handle "indigo-swatch" since it does not already exist.

  #### Query

  ```graphql
  mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $values: JSON!) {
    metaobjectUpsert(handle: $handle, values: $values) {
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
    "handle": {
      "type": "color",
      "handle": "indigo-swatch"
    },
    "values": {
      "hex": "#4B0082"
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
  "query": "mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $values: JSON!) { metaobjectUpsert(handle: $handle, values: $values) { metaobject { handle values } userErrors { field message code } } }",
   "variables": {
      "handle": {
        "type": "color",
        "handle": "indigo-swatch"
      },
      "values": {
        "hex": "#4B0082"
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
    mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $values: JSON!) {
      metaobjectUpsert(handle: $handle, values: $values) {
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
          "handle": {
              "type": "color",
              "handle": "indigo-swatch"
          },
          "values": {
              "hex": "#4B0082"
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
    mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $values: JSON!) {
      metaobjectUpsert(handle: $handle, values: $values) {
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
    "handle": {
      "type": "color",
      "handle": "indigo-swatch"
    },
    "values": {
      "hex": "#4B0082"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $values: JSON!) {
        metaobjectUpsert(handle: $handle, values: $values) {
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
          "handle": {
              "type": "color",
              "handle": "indigo-swatch"
          },
          "values": {
              "hex": "#4B0082"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $values: JSON!) {
    metaobjectUpsert(handle: $handle, values: $values) {
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
    "handle": {
      "type": "color",
      "handle": "indigo-swatch"
    },
    "values": {
      "hex": "#4B0082"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $values: JSON!) {
          metaobjectUpsert(handle: $handle, values: $values) {
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
          "handle": {
              "type": "color",
              "handle": "indigo-swatch"
          },
          "values": {
              "hex": "#4B0082"
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
    "metaobjectUpsert": {
      "metaobject": {
        "handle": "indigo-swatch",
        "values": {
          "accent_color": null,
          "hex": "#4B0082",
          "name": null,
          "related_colors": null,
          "secondary_hex": null
        }
      },
      "userErrors": []
    }
  }
  ```

* ### Upsert with patching semantics

  #### Description

  Use the \`metaobject\` argument with a \`fields\` array when you want to patch a single field on upsert — other fields on the existing entry are preserved. Fields you don't list keep their existing values. The following example upserts the existing author metaobject by its handle and replaces only \`full\_name\`; \`first\_published\` survives unchanged.

  #### Query

  ```graphql
  mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
    metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
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
    "handle": {
      "type": "app--2459039--author",
      "handle": "jane-austen"
    },
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
  "query": "mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) { metaobjectUpsert(handle: $handle, metaobject: $metaobject) { metaobject { handle values } userErrors { field message code } } }",
   "variables": {
      "handle": {
        "type": "app--2459039--author",
        "handle": "jane-austen"
      },
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
    mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
      metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
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
          "handle": {
              "type": "app--2459039--author",
              "handle": "jane-austen"
          },
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
    mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
      metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
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
    "handle": {
      "type": "app--2459039--author",
      "handle": "jane-austen"
    },
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
      "query": `mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
        metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
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
          "handle": {
              "type": "app--2459039--author",
              "handle": "jane-austen"
          },
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
  'mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
    metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
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
    "handle": {
      "type": "app--2459039--author",
      "handle": "jane-austen"
    },
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
        mutation UpsertMetaobject($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
          metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
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
          "handle": {
              "type": "app--2459039--author",
              "handle": "jane-austen"
          },
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
    "metaobjectUpsert": {
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

* ### metaobjectUpsert reference
