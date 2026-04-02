/**
 * Security utility functions for input validation and sanitization
 */

// Input sanitization function to prevent XSS
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length to prevent DoS
};

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

// URL validation
export const isValidURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Content Security Policy nonce generation (for dynamic content)
export const generateCSPNonce = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Rate limiting helper (simple in-memory implementation)
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  isAllowed(identifier: string, limit: number, windowMs: number): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, [now]);
      return true;
    }
    
    const userRequests = this.requests.get(identifier)!;
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => time > windowStart);
    
    if (validRequests.length >= limit) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }
}

export const rateLimiter = new RateLimiter();

// Form validation for Growth Audit
export interface GrowthAuditFormData {
  email: string;
  firstName: string;
  company: string;
  jobTitle: string;
  website: string;
}

export const validateGrowthAuditForm = (data: Partial<GrowthAuditFormData>): {
  isValid: boolean;
  errors: string[];
  sanitizedData: GrowthAuditFormData;
} => {
  const errors: string[] = [];
  
  // Sanitize all inputs
  const sanitizedData: GrowthAuditFormData = {
    email: sanitizeInput(data.email || ''),
    firstName: sanitizeInput(data.firstName || ''),
    company: sanitizeInput(data.company || ''),
    jobTitle: sanitizeInput(data.jobTitle || ''),
    website: sanitizeInput(data.website || ''),
  };
  
  // Validate required fields
  if (!sanitizedData.email) {
    errors.push('Email is required');
  } else if (!isValidEmail(sanitizedData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!sanitizedData.company) {
    errors.push('Company name is required');
  }
  
  if (!sanitizedData.website) {
    errors.push('Website is required');
  } else if (!isValidURL(sanitizedData.website)) {
    errors.push('Please enter a valid website URL');
  }
  
  // Validate lengths
  if (sanitizedData.firstName.length > 50) {
    errors.push('First name is too long');
  }
  
  if (sanitizedData.company.length > 100) {
    errors.push('Company name is too long');
  }
  
  if (sanitizedData.jobTitle.length > 100) {
    errors.push('Job title is too long');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData,
  };
};