// Test for hello.js
// Created by 码农 worker

const assert = require('assert');

// Import the hello function
const hello = require('./hello');

describe('Hello World Tests', () => {
    it('should return the correct message', () => {
        const result = hello();
        assert.strictEqual(result, 'Hello from CodeWorker!');
    });
    
    it('should log to console', () => {
        console.log('Running hello()...');
        hello();
    });
});

// Run tests
try {
    console.log('Test: should return the correct message');
    assert.strictEqual(hello(), 'Hello from CodeWorker!');
    console.log('✅ PASSED\n');
    
    console.log('Test: should log to console');
    hello();
    console.log('✅ PASSED\n');
    
    console.log('All tests passed! 🎉');
} catch (error) {
    console.error('❌ FAILED:', error.message);
    process.exit(1);
}
