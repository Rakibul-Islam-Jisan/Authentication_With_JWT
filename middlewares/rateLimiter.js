const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
    windowMs: 15 * 1000, 
	limit: 10, 
	standardHeaders: 'draft-8', 
	legacyHeaders: false,
	ipv6Subnet: 56, 
});

module.exports = loginLimiter;