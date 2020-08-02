using System.Collections.Generic;

namespace Stringmatch.Api.Services
{
    public interface IStringMatcher
    {
        IList<int> FindSubstringPositions (string text, string substring);
    }
}