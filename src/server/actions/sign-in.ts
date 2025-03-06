'use server'

export const signin = async (_: unknown, formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  console.log(email, password)

  /*  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    body: JSON.stringify({
      email: JSON.stringify(email),
      password: JSON.stringify(password),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  console.log(await response.json())

  const data = await response.json() */

  return {
    errors: null,
    data: {},
  }
}

export default signin
