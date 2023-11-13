import { OAuth2Client } from 'google-auth-library';

class GoogleAuth {
  public auth: OAuth2Client;
  constructor() {
    this.auth = new OAuth2Client({
      clientId:'1092028433387-tkiksf8mvb1d5golclhme55srl94rr9p.apps.googleusercontent.com',
      clientSecret:'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',
      redirectUri:'postmessage',
    });
  }
  async getTokens(code:string) {
    const { tokens } = await this.auth.getToken(code);
    return tokens;
  }
}

export default GoogleAuth;
