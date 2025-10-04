'use server';

import { cookies } from 'next/headers';

import EnumLocale from '@/core/enums/EnumLocale';
import { defaultLocale, defaultCookieName } from '@/i18n/settings';

export async function getUserLocale() {
  const cookie = await cookies();
  return cookie.get(defaultCookieName)?.value || defaultLocale;
}

export async function setUserLocale(locale: EnumLocale) {
  const cookie = await cookies();
  cookie.set(defaultCookieName, locale);
}
