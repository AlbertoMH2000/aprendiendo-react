import './App.css'
import { TwiiterFollowCard } from './TwitterFollowCard'

export function App () {

const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
    <TwiiterFollowCard 
      formatUserName={formatUserName} 
      isFollowing 
      userName="albertomh2000" 
      name="Alberto Moreno Herrador" 
    />

    <TwiiterFollowCard 
    formatUserName={formatUserName} 
    isFollowing 
    userName="miguesanmar" 
    name="Miguel Ángel Guaita" 
    />

    <TwiiterFollowCard 
    formatUserName={formatUserName} 
    isFollowing 
    userName="prueba1" 
    name="Prueba 1" 
    />

    <TwiiterFollowCard 
    formatUserName={formatUserName} 
    isFollowing 
    userName="prueba2" 
    name="Prueba 2" 
    />

    </section>
  )
}