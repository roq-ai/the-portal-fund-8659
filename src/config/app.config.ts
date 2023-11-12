interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Analyst'],
  customerRoles: ['Customer'],
  tenantRoles: ['Analyst'],
  tenantName: 'Organization',
  applicationName: 'The Portal Fund',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View transaction history', 'View balance', 'View asset', 'View wallet'],
  ownerAbilities: [
    'Read transaction history',
    'Read price performance',
    'Read balance information',
    'Read asset details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/903b5d9f-8db6-4523-9bf0-bad390a2f78e',
};
