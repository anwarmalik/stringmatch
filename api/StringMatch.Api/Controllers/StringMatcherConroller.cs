

using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Stringmatch.Api.Services;

namespace StringMatch.Api.Controllers
{
    [Route("api/{controller}")]
    public class StringMatcherController : Controller
    {
        private IStringMatcher stringMatcher;

        public StringMatcherController(IStringMatcher stringMatcher)
        {
            this.stringMatcher = stringMatcher;
        }

        public string Get()
        {
            return "Test";
        }

        [HttpPost]
        [Route("findpoistions")]
        public IList<int> Post([FromBody]StringMatchData payload)
        {

            return stringMatcher.FindSubstringPositions(payload.text, payload.substring);
        }

    }
}