
using System.Text.RegularExpressions;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.FileSystemGlobbing.Internal.Patterns;

namespace Stringmatch.Api.Services
{
    public class StringMatcher : IStringMatcher
    {
        public IList<int> FindSubstringPositions(string text, string substring)
        {
            Regex regex = new Regex(substring, RegexOptions.IgnoreCase);

            var matches = regex.Matches(text);

            return matches.Select(a => a.Index).ToList();
        }
    }
}
