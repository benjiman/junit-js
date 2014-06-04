load("src/test/resources/TestUtils.js");

tests({
	thisTestShouldPass : function() {
		console.log("One == One");
		assert.assertEquals("One","One");
	},
	/*
	thisTestShouldFail : function() {
		console.log("Running a failing test");
		assert.fail();
	},
	
	testAnEqualityFail : function() {
		console.log("Running an equality fail test");
		assert.assertEquals("One", "Two");
	},
        */
	
	objectEquality : function() {
		var a = { foo: 'bar', bar: 'baz' };
		var b = a;
		assert.assertEquals(a, b);
	},
	
	integerComparison : function() {
		jsAssert.assertIntegerEquals(4, 4);
	}
	/*
	,
	failingIntegerComparison : function() {
		jsAssert.assertIntegerEquals(4, 5);
	}
	*/
});
