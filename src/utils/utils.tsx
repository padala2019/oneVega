import React from 'react';

export const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export const capitalize = (string: string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
