// import * as assert from 'assert'
import { Parser } from '../../parser';
import { describe, suite, test, before } from 'mocha';
import { expect, assert } from 'chai';
import * as path from 'path';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode'
// const myExtension = require('../extension');

suite('Parser Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
    let parser, tree, file;

	// UNPARSED TREE TEST
    describe('It initializes correctly', () => {
        before(() => {
            // declare var and assign it to a test file
            file = path.join(__dirname, '')
            // pass the var into the new instance of Parser
            parser = new Parser(file);
        });

        test('It instantiates an object for the parser class', () => {
            assert.typeOf(parser, 'object', 'Value of new instance should be an object');
        });

        test('It begins with a suitable entry file and a tree that is not yet defined', () => {
            assert.strictEqual(parser.entryFile, file, 'These files are strictly equal');
            //OR 
            expect(parser.entryFile).to.equal(file);
            // below is my code
            assert.isUndefined(tree, 'Tree is defined');
        });
    });
	// TEST 0: ONE CHILD
	// TEST 1: NESTED CHILDREN
	// TEST 2: THIRD PARTY, REACT ROUTER, DESTRUCTURED IMPORTS
	// TEST 3: IDENTIFIES REDUX STORE CONNECTION
	// TEST 4: ALIASED IMPORTS
	// TEST 5: MISSING EXTENSIONS AND UNUSED IMPORTS
	// TEST 6: BAD IMPORT OF APP2 FROM APP1 COMPONENT
	// TEST 7: SYNTAX ERROR IN APP FILE CAUSES PARSER ERROR
	// TEST 8: MULTIPLE PROPS ON ONE COMPONENT
	// TEST 9: FINDING DIFFERENT PROPS ACROSS TWO OR MORE IDENTICAL COMPONENTS
	// TEST 10: CHECK CHILDREN WORKS AND COMPONENTS WORK
	// TEST 11: PARSER DOESN'T BREAK UPON RECURSIVE COMPONENTS
	// TEST 12: NEXT.JS APPS (pages & app router)
  	// TEST 13: Variable Declaration Imports and React.lazy Imports
});
