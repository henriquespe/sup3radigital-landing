// memoryManager.mjs

import { createClient } from '@supabase/supabase-js';

// 🔗 Conectando ao Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// 🧹 Lógica de limpeza de memória
async function cleanupOldMessages() {
  const { data, error } = await supabase
    .from('memoria_sup3ra')
    .select('id')
    .order('created_at', { ascending: true })
    .limit(50000); // Apaga os 50 mil mais antigos

  if (error) {
    console.error('❌ Erro ao buscar mensagens antigas:', error);
    return;
  }

  const idsToDelete = data.map(row => row.id);

  if (idsToDelete.length > 0) {
    const { error: deleteError } = await supabase
      .from('memoria_sup3ra')
      .delete()
      .in('id', idsToDelete);

    if (deleteError) {
      console.error('❌ Erro ao apagar mensagens antigas:', deleteError);
    } else {
      console.log(`✅ ${idsToDelete.length} mensagens antigas foram apagadas`);
    }
  } else {
    console.log('🟤 Nenhuma mensagem antiga a apagar');
  }
}

// Executa a limpeza
cleanupOldMessages();
