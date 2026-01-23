import chalk from "chalk";

export interface ValidationResult {
  valid: boolean;
  message: string;
}

export class Validator {
  validateEmail(email: string): ValidationResult {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      console.log(chalk.red(`Invalid email: ${email}`));
      return { valid: false, message: "Invalid email format" };
    }
    console.log(chalk.green(`Valid email: ${email}`));
    return { valid: true, message: "Email is valid" };
  }

  validatePassword(password: string): ValidationResult {
    if (password.length < 8) {
      console.log(chalk.red("Password too short"));
      return {
        valid: false,
        message: "Password must be at least 8 characters",
      };
    }
    console.log(chalk.green("Password is valid"));
    return { valid: true, message: "Password meets requirements" };
  }
}
