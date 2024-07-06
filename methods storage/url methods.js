async function generateSearchURLs({ netloc, subDirectory = 'r/columbus', schema = 'https://', queryBase = '/search/?q=' }) {
    const searchTerms = ["job", "career", "employment", "employ", "hire", "hiring", "indeed", "laid off", "laid", "hustle", "gig", "work", "recruit", "per hour", "salary", "indeed", "linkedin", "software", "dev", "job fair", "full time", "part time"];
    const urls = searchTerms.map(term => `${schema}${netloc}/${subDirectory}${queryBase}${term}`);
    return urls;
}