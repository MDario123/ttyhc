const api_base = new URL(
  process.env.NODE_ENV === "production"
    ? "http://ttyhc.vercel.app/api/"
    : "http://127.0.0.1:3000/api/",
);

export const api_address = {
  daily: new URL("daily", api_base),
};
