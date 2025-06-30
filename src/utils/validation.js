// Email validation
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation
export function isValidPassword(password) {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Name validation
export function isValidName(name) {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
}

// Phone number validation
export function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// URL validation
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Required field validation
export function isRequired(value) {
  return value !== null && value !== undefined && value.toString().trim() !== "";
}

// Min length validation
export function hasMinLength(value, minLength) {
  return value && value.toString().length >= minLength;
}

// Max length validation
export function hasMaxLength(value, maxLength) {
  return value && value.toString().length <= maxLength;
}

// Number validation
export function isValidNumber(value) {
  return !isNaN(value) && isFinite(value);
}

// Date validation
export function isValidDate(date) {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d);
} 