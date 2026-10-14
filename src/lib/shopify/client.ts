const SHOPIFY_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "1uu25s-t6.myshopify.com";
const SHOPIFY_STOREFRONT_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "d77720f37e8770e1899cec66e152e179";
const SHOPIFY_API_VERSION = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2024-01";

interface ShopifyFetchParams {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
}

export async function shopifyFetch<T>({
  query,
  variables = {},
  cache = "force-cache",
  tags = [],
}: ShopifyFetchParams): Promise<{ status: number; body: T } | never> {
  const endpoint = `https://${SHOPIFY_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      cache,
      ...(tags.length > 0 ? { next: { tags } } : {}),
    });

    const body = await response.json();

    if (body.errors) {
      console.warn("Shopify GraphQL Errors:", body.errors);
    }

    return {
      status: response.status,
      body,
    };
  } catch (error) {
    console.error("Shopify fetch network error:", error);
    throw error;
  }
}
