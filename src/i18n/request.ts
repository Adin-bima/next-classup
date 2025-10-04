/* eslint-disable perfectionist/sort-imports */
import { getRequestConfig } from 'next-intl/server';

import { namespaces } from './settings';
import { getUserLocale } from './action';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale();

  // Specify the namespaces you want to load

  // Dynamically import all namespaces
  const messages = await Promise.all(
    namespaces.map(async (ns) =>
      import(`../../locales/${locale}/${ns}.json`).then((mod) => mod.default)
    )
  );

  // Combine messages under their respective namespaces
  const combinedMessages = namespaces.reduce((acc, ns, i) => {
    if (
      acc &&
      typeof acc === 'object' &&
      ns &&
      messages &&
      i >= 0 &&
      i < messages.length
    ) {
      return { ...acc, [ns]: messages[i as keyof typeof messages] };
    }
    return acc;
  }, {});

  return {
    locale,
    messages: combinedMessages,
  };
});
