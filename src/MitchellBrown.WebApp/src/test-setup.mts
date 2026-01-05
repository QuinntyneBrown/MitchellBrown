import 'zone.js';
import 'zone.js/testing';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

console.log('[test-setup.mts] Setting up Angular testbed...');

// Setup Angular testbed with zone-based change detection
setupTestBed({ zoneless: false });

console.log('[test-setup.mts] Angular testbed setup complete');
