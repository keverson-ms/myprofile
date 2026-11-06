// Liga as palavras da nuvem aos projetos.
// Cada palavra procura seus termos (nome, partes separadas por " / " ou a lista `match`)
// no nome, no resumo e nas etiquetas do projeto — por palavra inteira, sem diferenciar maiúsculas.
// Ex.: "Java / Spring Boot" → termos "Java" e "Spring Boot" (e "Java" não casa com "JavaScript").

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const termRegex = (term) => new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRegex(term)}([^\\p{L}\\p{N}]|$)`, 'iu')

export function wordTerms(word) {
  if (word.match?.length) return word.match
  return word.name.split(' / ').map((s) => s.trim())
}

const haystack = (project) =>
  [project.name, project.summary, ...(project.stack ?? []), ...(project.integrations ?? []), ...(project.infra ?? [])].join(
    ' | ',
  )

export function projectMatches(project, word) {
  const text = haystack(project)
  return wordTerms(word).some((term) => termRegex(term).test(text))
}

export function tagMatches(tag, word) {
  return wordTerms(word).some((term) => termRegex(term).test(tag))
}
