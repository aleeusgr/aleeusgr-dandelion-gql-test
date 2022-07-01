import { Form, TextField, Submit } from '@redwoodjs/forms'

const HomePage = () => {
  const onSubmit = (data) => {
    console.info(data)
  }

  return (
    <Form onSubmit={onSubmit} style={{fontSize: '2rem'}}>
      <TextField
        name="address"
        placeholder="addr"
        maxLength="103"
        validation={{ required: true, pattern: /\w{103}$/ }}
      />
      <Submit>Go</Submit>
    </Form>
  )
}

export default HomePage
