/**
 * Cliente Neon PostgreSQL
 * Configuração de conexão com banco de dados Neon (PostgreSQL)
 * Todas as operações são feitas via API REST
 */

const API_URL =
  import.meta.env.VITE_API_URL || "https://eng-software-one.vercel.app/api";

// Validar configuração
const isNeonConfigured = Boolean(API_URL && API_URL.length > 0);

if (!isNeonConfigured) {
  console.warn("⚠️ VITE_API_URL não configurado. As operações podem falhar.");
}

console.log(`✅ Neon Client configurado - API URL: ${API_URL}`);

export { API_URL, isNeonConfigured };
