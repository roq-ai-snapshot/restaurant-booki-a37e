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
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'Make a reservation', 'Edit personal info'],
  ownerAbilities: [
    'Manage the restaurant information',
    'Manage the restaurant menus',
    'Manage the restaurant reservations',
    'Manage the restaurant tables',
    'Manage the restaurant employees',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/93757c0d-17c7-4a8b-8456-6be438d2b91b',
};
