import path from 'path'
import test from 'ava'
import sao from 'sao'

const generator = path.join(__dirname, '..')

test('defaults', async t => {
  const mockAnswers = { name: 'test2022' }
  const stream = await sao.mock({ generator }, mockAnswers)

  t.snapshot(stream.fileList, 'Generated files')
})

test('package.json', async t => {
  const mockAnswers = { name: 'test2022' }
  const stream = await sao.mock({ generator }, mockAnswers)
  const content = await stream.readFile('package.json')
  const parsed = JSON.parse(content)
  t.is(parsed.name, 'test2022')
})
