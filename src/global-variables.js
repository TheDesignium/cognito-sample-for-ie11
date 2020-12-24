export const REGION = 'input_region';
export const POOL_DATA = {
  UserPoolId: 'input_user_id_here',
  ClientId: 'input_client_id_here'
};
export const IDENTITY_POOL_ID = 'input_identity_pool_id';
export const LOGINS_KEY = 'cognito-idp.' + REGION + '.amazonaws.com/' + POOL_DATA.UserPoolId;