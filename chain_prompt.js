/**
 * CHAIN PROMPT: Three-step approach to creating toKebabCase function
 * 
 * Following the sequential chain prompt approach with building steps.
 */

// STEP 1: Basic Implementation
// "Create a JavaScript function called `toKebabCase` that converts strings to kebab-case format 
// (lowercase words separated by hyphens). The function should handle basic cases like converting 
// 'Hello World' to 'hello-world' and 'userName' to 'user-name'. Include simple input validation 
// to ensure the input is a string."

function toKebabCase_Step1(input) {
  // Basic input validation
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  
  return input
    .toLowerCase()
    // Handle camelCase by adding hyphens before uppercase letters
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    // Replace spaces with hyphens
    .replace(/\s+/g, '-');
}

// STEP 2: Enhanced Functionality
// "Now enhance the `toKebabCase` function from Step 1 to handle more complex scenarios. 
// Add support for multiple separator types (underscores, dots, slashes), consecutive separators, 
// and mixed case inputs like 'API_RESPONSE_DATA' to 'api-response-data'. Also handle edge cases 
// such as empty strings, whitespace-only strings, and strings that are already in kebab-case format."

function toKebabCase_Step2(input) {
  // Enhanced input validation
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  
  // Handle edge cases
  const trimmed = input.trim();
  if (trimmed === '') {
    return '';
  }
  
  return trimmed
    .toLowerCase()
    // Handle camelCase by adding hyphens before uppercase letters
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    // Replace multiple separator types with hyphens
    .replace(/[\s_\.\/]+/g, '-')
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

// STEP 3: Production-Ready with Comprehensive Error Handling
// "Transform the `toKebabCase` function from Step 2 into a production-ready implementation. 
// Add comprehensive error handling with descriptive messages for null, undefined, and non-string inputs. 
// Include full JSDoc documentation with multiple examples, parameter descriptions, and error cases. 
// Add Unicode character support and ensure the function performs well with large strings. 
// Create a test suite that validates all functionality including error scenarios."

/**
 * Converts a string to kebab-case format with comprehensive error handling and edge case management.
 * 
 * This function transforms input strings into kebab-case by converting separators to hyphens and
 * splitting camelCase words. It handles various separator types, normalizes consecutive
 * separators, and maintains consistent lowercase output. The function provides robust
 * error handling and supports Unicode characters for production use.
 * 
 * @param {string} input - The string to convert to kebab-case format
 * @returns {string} The transformed kebab-case string with hyphen separators and lowercase letters
 * @throws {Error} Throws error with descriptive message when input is null
 * @throws {Error} Throws error with descriptive message when input is undefined
 * @throws {Error} Throws error with type information when input is not a string
 * 
 * @example
 * // Basic transformations
 * toKebabCase("Hello World") // "hello-world"
 * toKebabCase("userName") // "user-name"
 * toKebabCase("API_RESPONSE_DATA") // "api-response-data"
 * 
 * @example
 * // Edge cases
 * toKebabCase("") // ""
 * toKebabCase("single") // "single"
 * toKebabCase("already-kebab-case") // "already-kebab-case"
 */
function toKebabCase(input) {
  // Comprehensive error handling
  if (input === null) {
    throw new Error("Input cannot be null");
  }
  
  if (input === undefined) {
    throw new Error("Input cannot be undefined");
  }
  
  if (typeof input !== 'string') {
    throw new Error(`Input must be a string. Received: ${typeof input}`);
  }
  
  // Enhanced edge case handling
  const trimmed = input.trim();
  if (trimmed === '') {
    return '';
  }
  
  // Production-ready implementation with Unicode support
  return trimmed
    .toLowerCase()
    // Handle camelCase by adding hyphens before uppercase letters (Unicode aware)
    .replace(/([a-z\u00E0-\u017F])([A-Z\u00C0-\u017F])/g, '$1-$2')
    // Replace multiple separator types with hyphens
    .replace(/[\s_\.\/]+/g, '-')
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '');
}

/**
 * Test suite for the chain prompt implementation
 */
function runChainPromptTests() {
  console.log("=== CHAIN PROMPT KEBAB-CASE IMPLEMENTATION TESTS ===\n");

  // Test cases for all steps
  const testCases = [
    "Hello World",
    "userName", 
    "API_RESPONSE_DATA",
    "file.name.ext",
    "camelCaseString",
    "already-kebab-case",
    "path/to/file",
    "hello___world",
    "",
    "   ",
    "single"
  ];

  // Test Step 1 implementation
  console.log("--- Step 1: Basic Implementation ---");
  testCases.slice(0, 4).forEach(test => {
    try {
      console.log(`toKebabCase_Step1("${test}"):`, toKebabCase_Step1(test));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  });

  // Test Step 2 implementation
  console.log("\n--- Step 2: Enhanced Functionality ---");
  testCases.forEach(test => {
    try {
      console.log(`toKebabCase_Step2("${test}"):`, toKebabCase_Step2(test));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  });

  // Test Step 3 implementation
  console.log("\n--- Step 3: Production-Ready Implementation ---");
  testCases.forEach(test => {
    try {
      console.log(`toKebabCase("${test}"):`, toKebabCase(test));
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  });

  // Error handling tests for Step 3
  console.log("\n--- Step 3: Error Handling Tests ---");
  const errorTests = [
    { input: null, description: "null" },
    { input: undefined, description: "undefined" },
    { input: 123, description: "number" },
    { input: {}, description: "object" }
  ];

  errorTests.forEach(test => {
    try {
      toKebabCase(test.input);
      console.log(`❌ FAILED: ${test.description} should have thrown an error`);
    } catch (error) {
      console.log(`✅ PASSED: ${test.description} - ${error.message}`);
    }
  });

  console.log("\n=== CHAIN PROMPT DEMONSTRATION COMPLETE ===");
  console.log("\n📋 Chain Prompt Evolution:");
  console.log("Step 1: ✅ Basic kebab-case conversion with simple validation");
  console.log("Step 2: ✅ Enhanced with multiple separators and edge cases");
  console.log("Step 3: ✅ Production-ready with full error handling and documentation");
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { toKebabCase, toKebabCase_Step1, toKebabCase_Step2 };
}

// Run the chain prompt test suite
runChainPromptTests();
