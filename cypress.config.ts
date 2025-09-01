import { defineConfig } from "cypress"
import { config as dotenv } from "dotenv"

dotenv()

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: "cypress/specs/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    retries: { runMode: 2, openMode: 0 },
    env: {
      PASSWORD: process.env.PASSWORD
    },
    setupNodeEvents(on, config) {
      return config
    }
  }
})
