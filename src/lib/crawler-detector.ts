// Detect if the current request is from a social media crawler/bot
export const isCrawler = (): boolean => {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const crawlerPatterns = [
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
    'skypeuripreview',
    'slackbot',
    'discordbot',
    'googlebot',
    'bingbot',
    'applebot',
    'crawler',
    'spider',
    'bot',
    'crawling'
  ];

  return crawlerPatterns.some(pattern => userAgent.includes(pattern));
};

// Check if we're in a crawler context and need immediate meta tag injection
export const needsImmediateMetaInjection = (): boolean => {
  // Check for crawler user agents
  if (isCrawler()) {
    return true;
  }
  
  // Check URL parameters that might indicate a social media preview request
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('_escaped_fragment_') || urlParams.has('preview')) {
    return true;
  }
  
  // Check referrer for social media platforms
  if (document.referrer) {
    const socialPlatforms = ['facebook.com', 'linkedin.com', 'twitter.com', 'whatsapp.com', 't.co'];
    const referrerHost = new URL(document.referrer).hostname.toLowerCase();
    if (socialPlatforms.some(platform => referrerHost.includes(platform))) {
      return true;
    }
  }
  
  return false;
};

// Log crawler detection for debugging
export const logCrawlerDetection = () => {
  console.group('🤖 Crawler Detection');
  console.log('User Agent:', navigator.userAgent);
  console.log('Is Crawler:', isCrawler());
  console.log('Needs Immediate Meta Injection:', needsImmediateMetaInjection());
  console.log('Document Referrer:', document.referrer);
  console.log('URL Params:', window.location.search);
  console.groupEnd();
};