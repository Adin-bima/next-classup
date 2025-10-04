import EnumLocale from '@/core/enums/EnumLocale';

export const defaultLocale = EnumLocale.ID;
export const locales = [EnumLocale.EN, EnumLocale.ID];
export const namespaces = ['common', 'error', 'auth'];
export const defaultCookieName = 'NEXT_LOCALE';
export const defaultNamespace = namespaces[0];
