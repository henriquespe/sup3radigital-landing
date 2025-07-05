// memoryManager.mjs

import { createClient } from '@supabase/supabase-js'

// 🔗 Conectando ao Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

// 🧹 Lógica de limpeza de memória
async function cleanupOldMessages() {
  try {
    // Busca os 50 mil registros mais antigos
    const { data, error } = await supabase
      .from('memoria_sup3ra')
      .select('id')
      .order('created_at', { ascending: true })
      .limit(50000)

    if (error) throw new Error(`Erro ao buscar mensagens: ${error.message}`)

    const idsToDelete = data.map(row => row.id)

    if (idsToDelete.length === 0) {
      console.log('📭 Nenhuma mensagem antiga a apagar.')
      return
    }

    const { error: deleteError } = await supabase
      .from('memoria_sup3ra')
      .delete()
      .in('id', idsToDelete)

    if (deleteError) throw new Error(`Erro ao apagar mensagens: ${deleteError.message}`)

    console.log(`🧽 ${idsToDelete.length} mensagens antigas foram apagadas.`)

  } catch (err) {
    console.error('❌ Falha durante a limpeza de memória:', err.message)
  }
}

// Inicia a função ao executar
cleanupOldMessages()
