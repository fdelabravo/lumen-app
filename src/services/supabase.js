// src/services/supabase.js

import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Intentamos leer de expo extra o, si no está, de process.env
const extra = (Constants.expoConfig && Constants.expoConfig.extra)
           || (Constants.manifest  && Constants.manifest.extra)
           || {};

const SUPABASE_URL     = extra.SUPABASE_URL     || process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = extra.SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('⚠️ SUPABASE_URL y SUPABASE_ANON_KEY son requeridos.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
