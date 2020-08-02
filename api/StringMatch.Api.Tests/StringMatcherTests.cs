using NUnit.Framework;
using Stringmatch.Api.Services;
using System.Linq;

namespace stringmatch.api.tests
{
    public class StringMatcherTests
    {
        StringMatcher stringMatcher = new StringMatcher();

        public StringMatcherTests()
        {
        }

        [Test(Description = @"Given text and substring is provided Then FindSubstring should return array of substring")]
        public void SubStringIsFdund()
        {
            //Arrange
            var text = "This is a randome text and I am new randome, can you provide new data";
            var subString = "new";

            //Act
            var substringPositions = stringMatcher.FindSubstringPositions(text, subString);

            //Assert
            Assert.AreEqual(2, substringPositions.Count, "The substring is not found");
            Assert.AreEqual(32, substringPositions.First(), "First instance of substring is not at");
            Assert.AreEqual(61, substringPositions.Last(), "Second instance of substring is not at");
        }


        [Test(Description = @"Given text and substring is provided Then FindSubstring should return array of substring irrespective of case")]
        public void SubStringIsFoundWhereSubStringIsInDifferentCase()
        {
            //Arrange
            var text = "This is a randome text and I am New randome, can you provide neW data";
            var subString = "new";

            //Act
            var substringPositions = stringMatcher.FindSubstringPositions(text, subString);

            //Assert
            Assert.AreEqual(2, substringPositions.Count, "The substring is not found");
            Assert.AreEqual(32, substringPositions.First(), "First instance of substring is not at");
            Assert.AreEqual(61, substringPositions.Last(), "Second instance of substring is not at");
        }


        [Test(Description = @"Given text and substring supplied And substring is not in the text Then FindSubstring should return empty array")]
        public void WhenSubStringNotFound()
        {
            //Arrange
            var text = "This is a randome text and I am new randome, can you provide New data";
            var subString = "new1";

            //Act
            var substringPositions = stringMatcher.FindSubstringPositions(text, subString);

            //Assert
            Assert.AreEqual(0, substringPositions.Count, "The substring is not found");
        }

    }
}