function maskEmail(email) {
  if (!email || !email.includes('@')) return email;

  const [username, domain] = email.split('@');
  if (username.length <= 2) {
    return `${username[0]}***@${domain}`;
  }

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedMiddle = '*'.repeat(username.length - 2);

  return `${firstChar}${maskedMiddle}${lastChar}@${domain}`;
}