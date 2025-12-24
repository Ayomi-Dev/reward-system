import { useState } from 'react'
import { signIn, signUp } from '../lib/auth'

export const  AuthForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    isLogin
      ? await signIn(email, password)
      : await signUp(email, password, name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      {!isLogin ? 
        <input placeholder='Name' type='text' onChange={e => setName(e.target.value)} /> :  null
      }
      <button type="submit">
        {isLogin ? 'Sign In' : 'Sign Up'}
      </button>

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create account' : 'Have an account? Sign in'}
      </p>
    </form>
  )
}
