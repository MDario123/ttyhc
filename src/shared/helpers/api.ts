export const api_address = new URL(process.env.NODE_ENV === 'production' 
    ?  "http://ttyhc.vercel.com/api/": 'http://127.0.0.1:3000/api/');
