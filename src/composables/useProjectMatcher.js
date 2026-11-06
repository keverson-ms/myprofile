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
