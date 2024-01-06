/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql://postgres:newpassword@localhost/messagely_test";
} else {
  DB_URI = "postgres://eakbiszi:EBooSpWs-Pe8mN7979VlT18oxL4Pqj8W@mahmud.db.elephantsql.com/eakbiszi";
}

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};