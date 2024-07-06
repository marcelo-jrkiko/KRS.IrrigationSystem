import { doConfig as AppConfig } from './config/App';
import * as path from 'path';
import * as dotenv from 'dotenv';

import { doConfig as LoggingConfig } from './config/Logging';
import { doConfig as MailerConfig } from './config/Mailer';
import { doConfig as DiscoveryConfig } from './config/Discovery';

// Global Configuration
(globalThis as any).GlobalConfiguration = {
    Database: undefined,
    AppPort: 0
};

(globalThis as any).AppRoot = path.resolve("");

// Carrega todas as configurações da aplicação
dotenv.config();
AppConfig();
LoggingConfig();
MailerConfig();
DiscoveryConfig();