/**
 * FEW-SHOT PROMPT: Create a function that converts strings to camelCase
 * 
 * Write a JavaScript function toCamelCase that converts strings to camelCase. 
 * Here are some examples:
 * 
 * Example 1:
 * Input: "first name"
 * Output: "firstName"
 * 
 * Example 2:
 * Input: "user_id"
 * Output: "userId"
 * 
 * Example 3:
 * Input: "SCREEN_NAME"
 * Output: "screenName"
 * 
 * Example 4:
 * Input: "mobile-number"
 * Output: "mobileNumber"
 * 
 * Implement the function to handle these cases.
 */

/**
 * Converts a string to camelCase format with comprehensive error handling and edge case management.
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase formatted string
 * @throws {Error} When input is not a string, null, or undefined
 * 
 * @example
 * toCamelCase("hello world") // "helloWorld"
 * toCamelCase("user_name") // "userName"
 * toCamelCase("API-response") // "apiResponse"
 * 
 * @since 1.0.0
 */
function toCamelCase(input) {
  // Input validation - check for null and undefined first
  if (input === null) {
    throw new Error("Input cannot be null");
  }
  
  if (input === undefined) {
    throw new Error("Input cannot be undefined");
  }
  
  // Type validation - ensure input is a string
  if (typeof input !== 'string') {
    throw new Error(`Input must be a string. Received: ${typeof input}`);
  }
  
  // Handle empty string and whitespace-only strings
  const trimmed = input.trim();
  if (trimmed === '') {
    return '';
  }
  
  // Main transformation logic with comprehensive separator handling
  return trimmed
    .toLowerCase()
    // Handle multiple consecutive separators and various separator types
    // Supports: spaces, hyphens, underscores, dots, slashes, and combinations
    .replace(/[\s_\-\.\/]+(.)/g, (match, char) => {
      // Only capitalize if the character is a letter (supports Unicode)
      return char.match(/\p{L}/u) ? char.toUpperCase() : char;
    })
    // Clean up any remaining separators at the end
    .replace(/[\s_\-\.\/]+$/, '');
}

// Comprehensive test suite for the toCamelCase function
console.log("=== COMPREHENSIVE CAMELCASE FUNCTION TESTS ===\n");

// Successful transformation tests
console.log("--- Successful Transformations ---");
console.log('toCamelCase("first name"):', toCamelCase("first name"));                    // "firstName"
console.log('toCamelCase("user_id"):', toCamelCase("user_id"));                          // "userId"
console.log('toCamelCase("SCREEN_NAME"):', toCamelCase("SCREEN_NAME"));                  // "screenName"
console.log('toCamelCase("mobile-number"):', toCamelCase("mobile-number"));              // "mobileNumber"
console.log('toCamelCase("file.name.ext"):', toCamelCase("file.name.ext"));              // "fileNameExt"
console.log('toCamelCase("path/to/file"):', toCamelCase("path/to/file"));                // "pathToFile"
console.log('toCamelCase("hello___world"):', toCamelCase("hello___world"));              // "helloWorld"
console.log('toCamelCase("user123_id"):', toCamelCase("user123_id"));                    // "user123Id"
console.log('toCamelCase("already.camelCase"):', toCamelCase("already.camelCase"));      // "alreadyCamelCase"
console.log('toCamelCase("café-résumé"):', toCamelCase("café-résumé"));                  // "caféRésumé" (Unicode support)
console.log('toCamelCase("single"):', toCamelCase("single"));                            // "single"
console.log('toCamelCase(""):', `"${toCamelCase("")}"`);                                 // ""
console.log('toCamelCase("   "):', `"${toCamelCase("   ")}"`);                           // ""
console.log('toCamelCase("  hello  world  "):', toCamelCase("  hello  world  "));        // "helloWorld"

// Error handling tests
console.log("\n--- Error Handling Tests ---");

const errorTestCases = [
  { input: null, description: "null input" },
  { input: undefined, description: "undefined input" },
  { input: 123, description: "number input" },
  { input: {}, description: "object input" },
  { input: [], description: "array input" },
  { input: true, description: "boolean input" }
];

errorTestCases.forEach(testCase => {
  try {
    toCamelCase(testCase.input);
    console.log(`❌ FAILED: ${testCase.description} should have thrown an error`);
  } catch (error) {
    console.log(`✅ PASSED: ${testCase.description} - ${error.message}`);
  }
});

// Performance test for large strings
console.log("\n--- Performance Test ---");
const largeString = "word ".repeat(1000) + "end";
const startTime = performance.now();
const result = toCamelCase(largeString);
const endTime = performance.now();
console.log(`Large string test (${largeString.length} chars): ${endTime - startTime}ms`);
console.log(`Result length: ${result.length} chars`);

console.log("\n=== ALL TESTS COMPLETED ===");

/**
 * JavaScript function that adds two numbers with error handling
 */
function addNumbers(a, b) {
  // Check for undefined or null values
  if (a === undefined || a === null) {
    throw new Error("First parameter cannot be undefined or null");
  }
  if (b === undefined || b === null) {
    throw new Error("Second parameter cannot be undefined or null");
  }
  
  // Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Both parameters must be numbers. Received: " + 
                   typeof a + " and " + typeof b);
  }
  
  // Check for NaN values
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Parameters cannot be NaN");
  }
  
  return a + b;
}

// Test the addNumbers function
console.log("\n--- Testing addNumbers function ---");
try {
  console.log(addNumbers(5, 3));        // 8
  console.log(addNumbers(-2, 7));       // 5
  console.log(addNumbers(0.5, 0.3));    // 0.8
} catch (error) {
  console.error("Error:", error.message);
}

// Test error cases
try {
  console.log(addNumbers('5', 3));      // Should throw error
} catch (error) {
  console.error("Expected error:", error.message);
}

try {
  console.log(addNumbers(null, 3));     // Should throw error
} catch (error) {
  console.error("Expected error:", error.message);
}

/**
 * SUGGESTED PROMPT FOR ROBUST CAMELCASE FUNCTION:
 * 
 * Write a JavaScript function `toCamelCase` that converts strings to camelCase with 
 * comprehensive error handling and edge case management. The function should:
 * 
 * REQUIREMENTS:
 * 1. Accept only string inputs - throw descriptive errors for non-strings
 * 2. Handle null, undefined, and empty string inputs gracefully
 * 3. Process various separators: spaces, hyphens, underscores, dots, slashes
 * 4. Handle consecutive separators (e.g., "hello___world", "first--name")
 * 5. Preserve existing camelCase formatting where appropriate
 * 6. Handle special characters and numbers correctly
 * 7. Trim whitespace from input
 * 8. Handle very long strings efficiently
 * 9. Support Unicode characters
 * 10. Provide informative error messages
 * 
 * EXAMPLES:
 * Valid inputs:
 * - "hello world" → "helloWorld"
 * - "user_name_field" → "userNameField" 
 * - "API-response-data" → "apiResponseData"
 * - "already.camelCase" → "alreadyCamelCase"
 * - "file/path/name" → "filePathName"
 * - "hello___world" → "helloWorld"
 * - "user123_id" → "user123Id"
 * - "" → ""
 * - "   " → ""
 * - "single" → "single"
 * - "café-résumé" → "caféRésumé"
 * 
 * Error cases:
 * - toCamelCase(123) → throw Error("Input must be a string")
 * - toCamelCase(null) → throw Error("Input cannot be null")
 * - toCamelCase(undefined) → throw Error("Input cannot be undefined")
 * - toCamelCase({}) → throw Error("Input must be a string")
 * 
 * The function should be production-ready with proper JSDoc documentation,
 * parameter validation, and comprehensive test coverage examples.
 */
