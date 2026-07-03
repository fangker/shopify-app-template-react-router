---
title: marketingActivityCreateExternal - GraphQL Admin
description: Creates a new external marketing activity.
api_version: 2026-07
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityCreateExternal.md
api_name: admin
api_type: graphql
type: mutation
metadata:
  domain: admin
---

# marketing​Activity​Create​External

mutation

Requires `write_marketing_events` access scope.

Deprecated. Use [marketingActivityUpsertExternal](https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingActivityUpsertExternal) instead.

Creates a new external marketing activity.

## Arguments

* input

  [Marketing​Activity​Create​External​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput)

  required

  The input field for creating an external marketing activity.

***

## Marketing​Activity​Create​External​Payload returns

* marketing​Activity

  [Marketing​Activity](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  The external marketing activity that was created.

* user​Errors

  [\[Marketing​Activity​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create an external marketing activity

  #### Query

  ```graphql
  mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $createInput) {
      marketingActivity {
        id
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "createInput": {
      "remoteId": "fake_id",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
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
  "query": "mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) { marketingActivityCreateExternal(input: $createInput) { marketingActivity { id } } }",
   "variables": {
      "createInput": {
        "remoteId": "fake_id",
        "title": "New Title",
        "remoteUrl": "https://example.com",
        "remotePreviewImageUrl": "https://example.com",
        "status": "ACTIVE",
        "utm": {
          "source": "email",
          "medium": "newsletter",
          "campaign": "external-campaign"
        },
        "tactic": "NEWSLETTER",
        "marketingChannelType": "EMAIL"
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
    mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
      marketingActivityCreateExternal(input: $createInput) {
        marketingActivity {
          id
        }
      }
    }`,
    {
      variables: {
          "createInput": {
              "remoteId": "fake_id",
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com",
              "status": "ACTIVE",
              "utm": {
                  "source": "email",
                  "medium": "newsletter",
                  "campaign": "external-campaign"
              },
              "tactic": "NEWSLETTER",
              "marketingChannelType": "EMAIL"
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
    mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
      marketingActivityCreateExternal(input: $createInput) {
        marketingActivity {
          id
        }
      }
    }
  QUERY

  variables = {
    "createInput": {
      "remoteId": "fake_id",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
        marketingActivityCreateExternal(input: $createInput) {
          marketingActivity {
            id
          }
        }
      }`,
      "variables": {
          "createInput": {
              "remoteId": "fake_id",
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com",
              "status": "ACTIVE",
              "utm": {
                  "source": "email",
                  "medium": "newsletter",
                  "campaign": "external-campaign"
              },
              "tactic": "NEWSLETTER",
              "marketingChannelType": "EMAIL"
          }
      },
    },
  });
  ```

  #### Shopify CLI

  ```bash
  shopify app execute \
  --query \
  'mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
    marketingActivityCreateExternal(input: $createInput) {
      marketingActivity {
        id
      }
    }
  }' \
  --variables \
  '{
    "createInput": {
      "remoteId": "fake_id",
      "title": "New Title",
      "remoteUrl": "https://example.com",
      "remotePreviewImageUrl": "https://example.com",
      "status": "ACTIVE",
      "utm": {
        "source": "email",
        "medium": "newsletter",
        "campaign": "external-campaign"
      },
      "tactic": "NEWSLETTER",
      "marketingChannelType": "EMAIL"
    }
  }'
  ```

  #### Direct API Access

  ```javascript
  const response = await fetch('shopify:admin/api/2026-07/graphql.json', {
    method: 'POST',
    body: JSON.stringify({
      query: `
        mutation marketingActivityCreateExternal($createInput: MarketingActivityCreateExternalInput!) {
          marketingActivityCreateExternal(input: $createInput) {
            marketingActivity {
              id
            }
          }
        }
      `,
      variables: {
          "createInput": {
              "remoteId": "fake_id",
              "title": "New Title",
              "remoteUrl": "https://example.com",
              "remotePreviewImageUrl": "https://example.com",
              "status": "ACTIVE",
              "utm": {
                  "source": "email",
                  "medium": "newsletter",
                  "campaign": "external-campaign"
              },
              "tactic": "NEWSLETTER",
              "marketingChannelType": "EMAIL"
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
    "marketingActivityCreateExternal": {
      "marketingActivity": {
        "id": "gid://shopify/MarketingActivity/1063897376"
      }
    }
  }
  ```

* ### marketingActivityCreateExternal reference
