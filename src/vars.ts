require('dotenv').config()

const { env } = process;

export default {
  api: {
    port: Number(env.API_PORT || env.PORT || 3001)
  },
  postgres: {
    databaseUrl: env.databaseUrl || "postgresql://postgres:ng-test@localhost:5432",
  }
}