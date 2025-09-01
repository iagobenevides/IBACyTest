export interface User {
    username: string
    password: string
  }
  
  const password = Cypress.env("PASSWORD") as string
  
  export const users = {
    standard: {
      username: "standard_user",
      password,
    } as User,
  
    lockedOut: {
      username: "locked_out_user",
      password,
    } as User,
  
    problem: {
      username: "problem_user",
      password,
    } as User,
  
    performanceGlitch: {
      username: "performance_glitch_user",
      password,
    } as User,
  }
  