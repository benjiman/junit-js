package uk.co.benjiweber.junitjs.examples;

import org.junit.runner.RunWith;

import uk.co.benjiweber.junitjs.JSRunner;
import uk.co.benjiweber.junitjs.Tests;

@Tests({
	"ExampleTestOne.js",
	"ExampleTestTwo.js",
	"TestFileUnderTest.js"
})
@RunWith(JSRunner.class)
public class ExampleTestSuite {
	
}
