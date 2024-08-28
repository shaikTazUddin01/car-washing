import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL,
  bcrypt_saltRounds: process.env.BCRYPT_SALTROUND,
  access_token_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
  access_token_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  store_id: process.env.STORE_ID,
  signature_key: process.env.SIGNATURE_KEY,
  payment_url:process.env.PAYMENT_URL
};
