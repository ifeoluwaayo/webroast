"use server";
import LemonSqueezy from "@lemonsqueezy/lemonsqueezy.js";

export const handleCheckout = async ({ data }: any) => {
  const ls = new LemonSqueezy(process.env.LEMON_SQUEEZY_API_KEY as string);
  // const variants = await getProductVariants("133579");

  const { url, email, variantId } = data;

  let attributes = {
    checkout_data: {
      email,
      custom: {
        url,
      },
    },
    checkout_options: {
      dark: true,
      logo: false,
    },
  };

  const checkout = await ls.createCheckout({
    storeId: 133579,
    variantId: parseInt(variantId),
    attributes,
  });
};
