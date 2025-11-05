export const App = () => {
  const prompts = [
    {
      nick: 'cool-prompt-nick-1',
      name: 'Prompt 1',
      description: 'Description of prompt 1',
    },
    {
      nick: 'cool-prompt-nick-2',
      name: 'Prompt 2',
      description: 'Description of prompt 2',
    },
    {
      nick: 'cool-prompt-nick-3',
      name: 'Prompt 3',
      description: 'Description of prompt 3',
    },
  ]

  return (
    <>
      <h1 className="title">@Prompt_God</h1>
      <div>
        {prompts.map((prompt) => {
          return (
            <div key={prompt.nick}>
              <h2>{prompt.name}</h2>
              <p>{prompt.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
